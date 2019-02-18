<?php
namespace controllers {
  require_once './models/class.auth.php';

  //Autoload
  use DateTime as DateTime;

  use \Psr\Http\Message\ResponseInterface as Response;
  use \Psr\Http\Message\ServerRequestInterface as Request;
  
  use \controllers\UserController as User;
  
  use \models\Auth as Auth;

  class AuthController
  {

    public function signIn(Request $request, Response $response, $args) {
      $body = $request->getParsedBody();

      $return = Auth::signIn($body['login'], $body['password']);

      // Try SignIn
      if (!$return) {
        $resp['status'] = 0;
        $resp['message'] = Auth::getMessage();

        $status = 401;
      } else {
        $resp['status'] = 1;
        $resp['data'] = $return;
        $status = 200;
      }

      return $response->withJson($resp, $status);
    }

    public function fbSignIn(Request $request, Response $response, $args) {
      $body = $request->getParsedBody();

      $return = false;
      if(isset($body["fbId"])) $return = Auth::fbSignIn($body["fbId"]);

      if(!$return) {
        $resp["status"] = 0;
        $status = 401;
      } else {
        $resp["status"] = 1;
        $resp["data"] = $return;
        $status = 200;
      }

      return $response->withJson($resp, $status);
    }

    public function signUp(Request $request, Response $response, $args) {
      $body = $request->getParsedBody();

      $return = Auth::signUp($body);

      if (!$return) {
        $resp["status"] = 0;
        $resp["message"] = Auth::getMessage();
        $status = 401;
      } else {
        $resp["status"] = 1;
        $resp["message"] = Auth::getMessage();
        $status = 201;
      }

      return $response->withJson($resp, $status);
    }
}
