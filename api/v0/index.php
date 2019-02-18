<?php header("Content-type: text/html; charset=utf-8");
/**
 * Autoload
 */

use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require_once './vendor/autoload.php';
// require_once './config/constants.php';
require_once './config/config.php';

$config = ['settings' => $config];

$app = new \Slim\App($config);
// $app->contentType('text/html; charset=utf-8');

/**
 * Required files for API Routes
 */
require_once './controllers/index.php';

/**
 * API Routes
 */
require_once 'routes.php';

$app->run();

?>
