<?php
namespace models;

/**
* Athenticate Class
*/
class Settings {


    /**
     *    L O C A L   S E T T I N G S 
     */

        // Variables for DataBase settings in LOCALHOST
        ///*
        public static $config = array(

            // D A T A B A S E   S E T T I N G S
            "DB" => array(
                "host" => "mysql:host="."localhost",
                "dbname" => "dbname="."",
                "username" => "root",
                "password" => ""
            ),

            // API
            "API" => array(
                "url" => "",
            ),
            
            // ONESIGNAL
            "ONESIGNAL" => array(
                "app_id" => "",
            ),
        );
        //*/
    

    /**
     *    H O M O L O G   S E T T I N G S 
     */

        // Variables for DataBase settings in HOMOLOG
        /*
        public static $config = array(

            // D A T A B A S E   S E T T I N G S
            "db" => array(
                "host" => "mysql:host="."",
                "dbname" => "dbname="."",
                "username" => "",
                "password" => ""
            ),

            // API
            "API" => array(
                "url" => "",
            ),
        );
        */
    
   
    
    /**
     *    P R O D U C T I O N    S E T T I N G S 
     */

        // Variables for DataBase settings in PRODUCTION
        /*
        public static $config = array(

            // D A T A B A S E   S E T T I N G S
            "db" => array(
                "host" => "mysql:host="."",
                "dbname" => "dbname="."",
                "username" => "",
                "password" => ""
            ),

            // API
            "API" => array(
                "url" => "",
            ),
        );
        */
}

?>
