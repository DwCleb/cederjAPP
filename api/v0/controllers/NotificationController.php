<?php
namespace controllers {
  require_once './models/class.notification.php';

  use \Psr\Http\Message\ResponseInterface as Response;
  use \Psr\Http\Message\ServerRequestInterface as Request;
  
  use \models\Notification as Notification;

  
  class NotificationController {
    public static $message;

    public function sendAll(Request $request, Response $response, $args) {
      $data = $request->getParsedBody();

      $return = Notification::sendAll($data);

      if ($return) {
        $back["message"] = "Notificação disparada com sucesso";
        $status = 200;
      } else {
        $back["message"] = "Erro ao disparar a notificação. Confira os campos";
        $status = 401;
      }

      return $response->withJson($back, $status);
    }

    public function sendToUserId(Request $request, Response $response, $args) {
      $data = $request->getParsedBody();

      $return = Notification::sendToUserId($data);

      if ($return) {
        $back["message"] = "Notificação disparada com sucesso";
        $status = 200;
      } else {
        $back["message"] = "Erro ao disparar a notificação. Confira os campos";
        $status = 401;
      }

      return $response->withJson($back, $status);
    }

    public function setOneSignalId(Request $request, Response $response, $args) {

      $data = $request->getParserBody();

      $return = Notification::setOneSignalId($data);

      return $response->withJson($return, 200);
    }

  }
}
