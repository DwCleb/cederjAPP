<?php

// Routes for Notifications
$app->group('/notification', function () {
  $this->post('/sendAll','\controllers\NotificationController:sendAll');
  $this->post('/sendToUserId','\controllers\NotificationController:sendToUserId');
  $this->post('/setOneSignalId','\controllers\NotificationController:setOneSignalId');
});

?>
