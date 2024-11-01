<?php

 function html_music_player() { 

    $img_url = 'https://awesome.player.icodes.rocks/wp_player/wp-content/plugins/music-player/public/assets/images/'; //WP_PLUGIN_URL . '/music-player/public/assets/images/';

   //var_dump($img_url);die;


$html ='

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Music Player</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Roboto:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">

    
</head>
<body>
    

    <audio src="" id="audio-source"></audio>

    <div class="music-player-main">

<section class="home-section">
<input type="hidden" name="player_1" id="player_type" value="player_1">
    <!-- Carousel -->
    <div id="carouselImg" class="carousel">
       
    </div>

    <!-- Playlists -->
    <h1 class="heading">Recently played</h1>

    <div class="playlists-group" id="playlistGroup">



    </div>

<div class="music-player-section ">

    <img src="'.$img_url.'back.png" class="back-btn icon hide" alt="">
    <img src="'.$img_url.'nav.png" class="nav-btn icon hide" alt="">
    <br>
    <p class="current-song-name">song 1</p>
    <p class="artist-name">artist 1</p>
    <img src="'.$img_url.'cover1.png" class="cover hide" alt="">
    
    <div class="seek-bar-container">
        <input type="range" class="music-seek-bar" value="0">
        <p class="current-time hide">00 : 00</p>
        <p class="duration hide">00 : 00</p>
    </div>



    <div class="controls">
        <span class="fas fa-redo redo-btn"></span>
        <div class="main">
            <i class="fas fa-backward backward-btn active"></i>
            <i class="fas fa-play play-btn active"></i>
            <i class="fas fa-pause pause-btn"></i>
            <i class="fas fa-forward forward-btn active" ></i>
        </div>
        <br>
        <input type="range" class="volume-slider" max="1" value="1" step="0.1">
    
        <span class="fas fa-volume-up volume-btn"></span>
    </div>

</div>


</section>


<section id="playlistActive" class="playlist">
    
    <img src="'.$img_url.'back.png" class="back-btn icon" alt="">

    <h1 class="title">playlist</h1>

    <div id="playlistSongs">

  
   
   

    </div>

</section>

</div>
   
    <script src="'.MUSIC_PLAYER_DIR.'/public/js/players/player1.js"></script> 

</body>
</html>
 ';

 return $html;

}