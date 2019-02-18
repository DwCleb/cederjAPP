<?php
namespace models;

require_once "class.sql.php";
require_once "class.settings.php";

use \models\Sql as Sql;
use \models\Settings as Settings;

class Notification {
  private static $message;

  
  public function sendAll($data) {
    
    if ((empty($data["header"])) || (empty($data["message"]))) return false;

    $header = array(
      'en' => $data["header"]
    );

    $content = array(
      "en" => $data["message"]
    );

    $fields = array(
        'app_id' => array(Settings::$config['ONESIGNAL']['app_id']),
        'included_segments' => array(
            'All'
        ),
        'headings' => $header,
        'contents' => $content,
    );
    
    $fields = json_encode($fields);
    // print("\nJSON sent:\n");
    // print($fields);
    
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, "https://onesignal.com/api/v1/notifications");
    curl_setopt($ch, CURLOPT_HTTPHEADER, array(
        'Content-Type: application/json; charset=utf-8',
        'Authorization: Basic '.Settings::$config["ONESIGNAL"]["auth"]
    ));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
    curl_setopt($ch, CURLOPT_HEADER, FALSE);
    curl_setopt($ch, CURLOPT_POST, TRUE);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $fields);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
    
    $response = curl_exec($ch);
    curl_close($ch);
    
    if (!empty($fields["errors"])) return false; 

    return true;
  }

  public function sendToUserId($data) {
    
    if ((empty($data["header"])) ||
        (empty($data["message"])) ||
        (empty($data["userId"]))
       ) return false;

    $header = array(
      'en' => $data["header"]
    );

    $content = array(
      "en" => $data["message"]
    );

    $fields = array(
        'app_id' => Settings::$config['app_id']['municipe'],
        'include_external_user_ids' => array($data["userId"]),
        'headings' => $header,
        'contents' => $content,
    );
    
    $fields = json_encode($fields);
    // print("\nJSON sent:\n");
    // print($fields);
    
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, "https://onesignal.com/api/v1/notifications");
    curl_setopt($ch, CURLOPT_HTTPHEADER, array(
        'Content-Type: application/json; charset=utf-8',
        'Authorization: Basic ZGNjM2QzMWYtOWE1YS00OTZmLWE0NzktNTIwZTZlYzFhNGE5'
    ));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
    curl_setopt($ch, CURLOPT_HEADER, FALSE);
    curl_setopt($ch, CURLOPT_POST, TRUE);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $fields);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
    
    $response = curl_exec($ch);
    curl_close($ch);
    
    if (!empty($fields["errors"])) return false; 

    return true;
  }

}
