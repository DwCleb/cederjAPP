<?php 
namespace models;
header("Content-type: text/html; charset=utf-8");

require_once 'class.settings.php';

use PDO as PDO;

class Sql extends PDO {

  // general - DONT CHANGE THIS BLOCK
  private static $conn = null;
  private static $lastId;
  public static $done;
  public static $rows;
  //
  
  // 
  public function __construct() {

    $host =  Settings::$config['DB']['host'];
    $dbname =  Settings::$config['DB']['dbname'];
    $user =  Settings::$config['DB']['username'];
    $password =  Settings::$config['DB']['password'];

    $conn = new PDO("$host;$dbname; charset=UTF8", $user, $password);
     Sql::$conn = $conn;
  
  }

  protected function getConn() {
    $host =  Settings::$config['DB']['host'];
    $dbname =  Settings::$config['DB']['dbname'];
    $user =  Settings::$config['DB']['username'];
    $password =  Settings::$config['DB']['password'];

    Sql::$conn = new PDO("$host;$dbname; charset=UTF8", $user, $password);
  }

  protected function setParams($statment, $parameters = array()){

    foreach ($parameters as $key => $value) {
      Sql::setParam($statment, $key, $value);
    }

  }

  protected function setParam($statment, $key, $value) {

    $statment->bindParam($key, $value);
  
  }

  public function query($rawQuery, $params = array()) {
    Sql::$done = false;

    if(!SQL::$conn)
      SQL::getConn();

    $stmt = Sql::$conn->prepare($rawQuery);

    Sql::setParams($stmt, $params);

    Sql::$done = $stmt->execute();

    Sql::$rows = $stmt->rowCount();

    Sql::setLastId(Sql::$conn->lastInsertId());

    return $stmt;
  
  }

  public function select($rawQuery, $params = array()) {

    $stmt = Sql::query($rawQuery, $params);

    return $stmt->fetchAll(PDO::FETCH_ASSOC);
  
  }

  protected function setLastId($lastId) {
    Sql::$lastId = $lastId;
  }

  public function getLastId() {
    return Sql::$lastId;
  }

  
}



?>
