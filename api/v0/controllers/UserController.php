<?php
namespace controllers {
  require_once './models/class.user.php';

  use \Psr\Http\Message\ResponseInterface as Response;
  use \Psr\Http\Message\ServerRequestInterface as Request;
  
  use \models\User as User;
  
  class UserController
  {
    public static $message;

    public function create($data) {
      $return = true;

      return $response->withJson($return, 200);
    }

    public function read($data) {
      $return = true;

      return $response->withJson($return, 200);
    }

    public function update(Request $request, Response $response, $args) {

      $return = true;

      return $response->withJson($return, 200);
    }

  }
}
