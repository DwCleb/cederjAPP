<?php

// Routes for signIn
$app->group('', function () {
    $this->group('/signIn', function () {
        $this->post('', '\controllers\AuthController:signIn');
        $this->post('/fb', '\controllers\AuthController:fbSignIn');
    });

// Routes for signUp
    $this->group('/signUp', function () {
        $this->post('', '\controllers\AuthController:signUp');
    });

// Routes for signOut
    $this->group('/signOut', function () {
        $this->post('', '\controllers\AuthController:signOut');
    });

});
?>
