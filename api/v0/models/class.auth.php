<?php
namespace models;

require_once "class.sql.php";
require_once "class.user.php";

use \models\Sql as Sql;
use \models\User as User;

class Auth {

  private static $message;

  public function signIn($login, $password) {
    $login = trim(preg_replace("/[^0-9]/", "", $login), " ");
    $query = "";
    $params = [
      ":LOGIN" => $login
    ];

    $result = Sql::select($query, $params);

    if(count($result) < 1) {
      Auth::setMessage("Usuário não encontrado");
      return false;
    }

    $result = $result[0];

    if ($result["senha"] != sha1($password)) {
      Auth::setMessage("Senha incorreta");
      return false;
    }

    unset($result["senha"]);

    return $result;
  }

  public function fbSignIn($fbId) {

    $query = "";
    
    $params = [
      ":FBID" => $fbId
    ];

    $result = Sql::select($query, $params);

    if(count($result) < 1) return false;

    $result = $result[0];
    unset($result["senha"]);

    return $result;
  }

  public function signUp($data) {
    $data['login'] = trim(preg_replace("/[^0-9]/", "", $data['login']), " ");
    if(Auth::checkLogin($data["login"])) {
      Auth::setMessage("E-mail já cadastrado");
      return false;
    }

    if(Auth::checkEmail($data["email"])) {
      Auth::setMessage("Email já cadastrado");
      return false;
    }

    if(!isset($data["fbToken"])) $data["fbToken"] = null;

    $addressId = null; //Address::create($data);
    // if(!$addressId) {
    //   Auth::setMessage("Falha no cadastro A");
    //   return false;
    // }

    $data["addressId"] = $addressId;
    if(!isset($data["fbtoken"])) $data["fbtoken"] = null;
    if(!isset($data["fbId"])) $data["fbId"] = null;
    $data["userId"] = User::create($data);

    if(!$data["userId"]) {
      Auth::setMessage("Falha no cadastro U");
      Auth::signUpRollBack(null, $addressId);
      return false;
    }

    return true;
  }

  private function signUpRollBack($userId = null, $addressId = null) {
    if ($userId != null) User::rollBack($userId);

    return true;
  }

  private function checkLogin($login) {
    $query = "SELECT * FROM users WHERE login = :LOGIN";
    $params = [
      ":LOGIN" => $login
    ];

    $result = Sql::select($query, $params);
    
    if(count($result) > 0) return true;
    else return false;
  }
 
  private function setMessage($message) {
    Auth::$message = $message;
    return true;
  }

  public function getMessage() {
    return Auth::$message;
  }
}
