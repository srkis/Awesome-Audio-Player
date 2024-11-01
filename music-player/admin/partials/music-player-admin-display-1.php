<?php

function choose_awesome_player_page($id, $name) {

    $music_player_dir = plugin_dir_url( __FILE__ ) . 'css/';


 echo '<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">

    <meta name="theme-color" content="#333">

    <title>Material Style</title>
    <meta name="description" content="Awesome Audio Player">

    <link rel="shortcut icon" href="assets/img/favicon30f4.png?v=3">

     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css">
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">


    <link rel="stylesheet" href="'.MUSIC_PLAYER_DIR.'/admin/css/material-icons.css">

     <link rel="stylesheet" href="'.MUSIC_PLAYER_DIR.'/admin/css/preload.min.css">

     <link rel="stylesheet" href="'.MUSIC_PLAYER_DIR.'/admin/css/style.light-blue-500.min.css">

    <link rel="stylesheet" href="'.MUSIC_PLAYER_DIR.'/admin/css/width-boxed.min.css" id="ms-boxed" disabled="">


</head>

<body>

    <div class="container">
      <div id="allPlayers" class="row"></div>
        
    </div>



    
 

<script src="'.MUSIC_PLAYER_DIR.'/admin/js/plugins.min.js"></script>

<script src="'.MUSIC_PLAYER_DIR.'/admin/js/app.min.js"></script>

<script src="'.MUSIC_PLAYER_DIR.'/admin/js/configurator.min.js"></script>

<script src="'.MUSIC_PLAYER_DIR.'/admin/js/choose-awesome-player.js"></script>


</body>

</html>

';

}
