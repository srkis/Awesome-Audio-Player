<?php

function modern_circular_audio_player() 
{
	$img_url = WP_PLUGIN_URL . '/music-player/public/assets/images/';

	$html = '<!DOCTYPE html>
<html>
   <head>
      <title>music player</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.5.0/css/all.min.css">


      
  
      <link rel="stylesheet" type="text/css" href="'.MUSIC_PLAYER_DIR.'/public/css/modern_circular_audio_player.css"/>
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
   </head>
   <body>


          




      <div id="main" class="main">
         <audio src="" id="audio"></audio>
          <input type="hidden" name="modern-circular-audio-player" id="player_type" value="modern-circular-audio-player">

          <div id="leftSection" class="left">

              <div class="slide__audio js-audio">
         <audio class="slide__audio-player" controls="">
            <source src="http://localhost/wp-test/wp-content/uploads/2023/05/Korin-Last-Stone-Original-Mix-textmp3.ru_.mp3" type="audio/mpeg"/>
         </audio>
         <div class="audio__controls">
            <svg height="160px" width="160px" version="1.1" id="circle" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100">
               <path id="seekbar" fill="none" stroke-meterlimit="10" d="M50,2.9L50,2.9C76,2.9,97.1,24,97.1,50v0C97.1,76,76,97.1,50,97.1h0C24,97.1,2.9,76,2.9,50v0C2.9,24,24,2.9,50,2.9z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="equalizer" viewBox="0 0 100 100">
               <g class="equalizer-group">
                  <rect class="bar"></rect>
                  <rect class="bar"></rect>
                  <rect class="bar"></rect>
                  <rect class="bar"></rect>
                  <rect class="bar"></rect>
               </g>
            </svg>
            <div class="audio__slider"></div>
            <button class="play-pause"></button>
         </div>    <!-- audio__controls -->
           
          </div> <!-- slide__audio js-audio -->

          <div class="middle">         
               <button id="volumeBtn" class="action-btn playing"> <i class="fas fa-volume-up"></i> </button>
               <input type="range" min="0" max="100" value="70" id="volumeSlider">
            </div>                

            <span id="currentTime">00:00</span>
         
            <div id="duration">03:22</div>


          </div> <!-- Left -->

           <div class="right">

           <div id="playlistHolder" class="playlist-holder">

           <ul id="playlist" class="vertical-playlist"></ul>


           </div>

            <div class="bottom-section">
              <div class="search">
                <input type="text" id="search_song" name="search" placeholder="search...">
              </div>
              <div class="social">
                <a href="https://facebook.com"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                <a href="https://instagram.com"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                <a href="https://twitter.com"><a href="#"> <i class="fa fa-twitter" aria-hidden="true"></i></a></a>
                <a href="https://youtube.com"><i class="fa fa-youtube" aria-hidden="true"></i></a>

              </div>
            </div>

          </div> <!-- right -->



      </div>

       <script src="https://imasdk.googleapis.com/js/sdkloader/ima3.js"></script>
       <script src="https://cdnjs.cloudflare.com/ajax/libs/roundSlider/1.3/roundslider.js"></script>
      <script src="'.MUSIC_PLAYER_DIR.'/public/js/players/modern_circular_audio_player.js"></script>
   </body>
</html>';

  return $html;

  //https://codepen.io/gustavoalbuquerquebr/pen/LBrLOm
  //https://codepen.io/yondmn/pen/wOYYvd
  //omgdeveloper57@gmail.com
}