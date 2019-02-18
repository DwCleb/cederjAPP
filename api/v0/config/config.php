<?php

$config['displayErrorDetails'] = true;
// $config['addContentLegthHeader'] = false;
// $config['determineRouteBeforeAppMiddleware'] = true;
$config['addContentLengthHeader'] = false;
$config['secretkey'] = ""; //JWT Token

/** 
 * Config DEV DB
 */
$config['db']['host'] = "localhost";
$config['db']['username'] = "root";
$config['db']['password'] = "";
$config['db']['dbname'] = "";

/**
 *  Config Hmg DB
 */
// $config['db']['host'] = "";
// $config['db']['username'] = "";
// $config['db']['password'] = "";
// $config['db']['dbname'] = "";

/**
 *  Config Prd DB
 */ 
// $config['db']['host'] = "";
// $config['db']['username'] = "";
// $config['db']['password'] = "";
// $config['db']['dbname'] = "";
?>
