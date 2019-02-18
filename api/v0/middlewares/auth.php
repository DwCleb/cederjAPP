<?php
namespace middlewares;
require_once ('./models/class.auth.php');

use \Psr\Http\Message\ResponseInterface as Response;
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Firebase\JWT\JWT;
use \models\Auth as Auth;
use DateTime as DateTime;

class AuthMiddleware
{

    private static $secretkey = "";
    private static $token = null;
    private static $error = null;
    private static $status = null;
    private static $userId = null;

    public function __invoke($request, $response, $next)
    {
      if (!AuthMiddleware::auth($request, $response)){
        $data = ["status" => AuthMiddleware::$status, "message" => AuthMiddleware::$error];
        $response = $response->withJson($data, 401);
        return $response;
      }
      $request = $request->withAttribute('userId', AuthMiddleware::$userId);
      $response = $next($request, $response);
      return $response;
    }

    private function auth(Request $request, Response $response)
    {
        $header = $request->getHeaders();
        $token = trim(str_replace("Bearer", "", $header["HTTP_AUTHORIZATION"])[0]);
        $secret = AuthMiddleware::$secretkey;

        //Checks if the token was successfully decoded
        if ((!AuthMiddleware::decode($token, $secret)) || (!Auth::verifyToken($token))) {
            AuthMiddleware::$status = 0;
            AuthMiddleware::$error = "Acesso expirado - Faça um novo login";

            return false;
        }

        $token = AuthMiddleware::$token;

        //Verify Expiration
        date_default_timezone_set('America/Sao_Paulo');
        $now = new DateTime('now');
        $now = $now->getTimeStamp();
        $expiration = $token->expiredAt;

        if ($now > $expiration) {
            AuthMiddleware::$status = 0;
            AuthMiddleware::$error = "Token Expirado";

            return false;
        }

        AuthMiddleware::$userId = $token->userId;

        //return userId
        AuthMiddleware::$status = 1;
        return true;

    }

    private function decode($token, $secret)
    {
        try {
            $token = JWT::decode($token, $secret, array("HS256"));
            AuthMiddleware::$token = $token;
            return true;

        } catch (Exception $e) {
            AuthMiddleware::$error = $e->getMessage();
            return false;
        }
    }

}
