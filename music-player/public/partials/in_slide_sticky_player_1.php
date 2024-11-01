<?php

function in_slide_sticky_player_1() 
{
	$img_url = WP_PLUGIN_URL . '/music-player/public/assets/images/';

	$html = '<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Music Player</title>

   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">

   <link rel="stylesheet" type="text/css" href="'.MUSIC_PLAYER_DIR.'/public/css/in_slide_sticky_player_1.css"/>
</head>
<body>
   <h1>Music Player</h1>


   <div class="main-wrapper">
     <div class="music-container">
     <input type="hidden" name="in-slide-sticky-player-1" id="player_type" value="in-slide-sticky-player-1">
      <div class="music-info">
         <h4 id="title">Ukulele</h4>
         <div class="progress-container">
            <div class="progress"></div>
            <div class="songTime">
               <div id="currentTime">00:00</div>
               <div id="duration"></div>
            </div>

         </div>
      </div>

      <audio src="music/ukulele.mp3" id="audio"></audio>

      <div class="img-container">
         <img src="images/ukulele.jpg" alt="music-cover" id="cover">
      </div>

      <div class="navigation">
         <button id="prev" class="action-btn">
            <i class="fas fa-backward"></i>
         </button>
         <button id="play" class="action-btn action-btn-big">
            <i class="fas fa-play"></i>
         </button>
         <button id="next" class="action-btn">
            <i class="fas fa-forward"></i>
         </button>

         <button id="volume" class="action-btn playing">
            <i class="fas fa-volume-up"></i>
         </button>
      </div>

   </div>
</div>




   

      <script src="'.MUSIC_PLAYER_DIR.'/public/js/players/in_slide_sticky_player_1.js"></script>
   </body>
</html>';

  return $html;
}