<?php
namespace models;

require_once "class.sql.php";

use \models\Sql as Sql;

class User
{
  public static $message;

  
  public function create($data) {
    $query = "";
    $params = [
    ];
    
    Sql::query($query, $params);

    $userId = Sql::getLastId();

    if ((Sql::$done) && (Sql::$rows > 0))
      return $userId;
    else
      return false;
  }

  public function read($userId) {
    // return all information about the user. Data user and access information
    $query = "SELECT * FROM users
              WHERE userId = :USERID";

    $params = [
    ":USERID" => $userId,
    ];
    
    $results = Sql::select($query, $params);
    $data = $results[0];

    if ((Sql::$done) && (count($results) > 0))
      return $data;
    else
      return false;
  }

  public function update($data) {

    $query = "";

    $params = [
    ];

    $results = Sql::query($query, $params);

    if ((Sql::$done) && (Sql::$rows > 0))
      return true;
    else
      return false;
  }

  public function rollBack($userId) {
    $query = "DELETE FROM usuarios WHERE id_usuario = :USERID";
    $params = [
      ":USERID" => $userId
    ];

    Sql::query($query, $params);

    if((Sql::$done) && (Sql::$rows > 0)) {
      return true;
    } else {
      return false;
    }
  }

  private function setMessage($message) {
    User::$message = $message;
  }

  public function getMessage() {
    return User::$message;
  }

}
