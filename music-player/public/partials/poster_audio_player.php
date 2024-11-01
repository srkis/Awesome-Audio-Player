<?php

function poster_audio_player() 
{
	$img_url = WP_PLUGIN_URL . '/music-player/public/assets/images/';

	$html = '<!DOCTYPE html>
<html>
   <head>
      <title>music player</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      <link rel="stylesheet" type="text/css" href="'.MUSIC_PLAYER_DIR.'/public/css/poster_audio_player.css"/>
   </head>
   <body>
      <div id="main" class="main-audio">
         <audio src="" id="audio"></audio>
          <input type="hidden" name="poster-audio-player" id="player_type" value="poster-audio-player">

         <div class="title-holder">
         <div id="title">Marcozannone</div>
         <div id="artist">Inspiring Solo Piano</div>
         </div>

          <!--- middle part --->
            <div class="middle">
               <button id="pre"><i class="fa fa-step-backward" aria-hidden="true"></i></button>
               <button id="play"><i class="fa fa-play" aria-hidden="true"></i></button>
               <button id="next"><i class="fa fa-step-forward" aria-hidden="true"></i></button>
               <button id="volume" class="action-btn playing"> <i class="fas fa-volume-up"></i> </button>
               <input type="range" min="0" max="100" value="70" id="volumeSlider">
            </div>   

           <!--
           <div class="seekbar">
                <div class="progress"></div>
             </div>

             -->

             <div id="circularHolder" class="circular-holder">
              <div class="circular-bg"></div>
           <!--   <p class="percentage">0%</p> -->
              <div id="circularLevel" class="circular-level"></div>
            </div>

            <span id="currentTime">00:00</span>

             <div class="seekbar">
                    <div class="progress-bg">
                        <div class="progress-level" style="width: 0px;"></div>
                    </div>
                </div>
         
          <div id="duration">03:22</div>


      </div>

       <script src="https://imasdk.googleapis.com/js/sdkloader/ima3.js"></script>
      <script src="'.MUSIC_PLAYER_DIR.'/public/js/players/poster_audio_player.js"></script>
   </body>
</html>';

  return $html;

  //https://codepen.io/gustavoalbuquerquebr/pen/LBrLOm
}