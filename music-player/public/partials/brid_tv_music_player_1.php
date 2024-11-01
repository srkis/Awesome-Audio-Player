<?php

function brid_tv_music_player_1() 
{
	$img_url = WP_PLUGIN_URL . '/music-player/public/assets/images/';

	$html = '<!DOCTYPE html>
<html>
   <head>
      <title>music player</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      <link rel="stylesheet" type="text/css" href="'.MUSIC_PLAYER_DIR.'/public/css/brid_tv_music_player_1.css"/>
   </head>
   <body>
        <script src="https://imasdk.googleapis.com/js/sdkloader/ima3.js"></script>

      <div style="max-width: 45%" id="main_div" class="main">
         <audio src="" id="audio"></audio>
         <p id="logo"><i class="fa fa-music"></i>Brid.TV - Music
         <span id="equalizers">
             <svg xmlns="http://www.w3.org/2000/svg" class="equilizer" viewBox="0 0 128 128">
                    <g>
                      <title>Audio Equilizer</title>
                      <rect class="bar" transform="translate(0,0)" y="15"></rect>
                      <rect class="bar" transform="translate(25,0)" y="15"></rect>
                      <rect class="bar" transform="translate(50,0)" y="15"></rect>
                      <rect class="bar" transform="translate(75,0)" y="15"></rect>
                      <rect class="bar" transform="translate(100,0)" y="15"></rect>
                    </g>
                  </svg>
         </span>
         </p>

         <!--- left part --->
         <div class="left">
            <!--- song img --->

      <section class="slideshow">

      <div id="track_image" class="current"><img id="first_img" src=""></div>
         <div id="songs_img" class="image_gallery">

            </div>

     </section>
       
           <!-- <img id="track_image"> -->
       
         </div>
         <!--- right part --->
         <div class="right">
            <div class="show_song_no">
               <p id="present">1</p>
               <p>/</p>
               <p id="total">5</p>
            </div>
            <!--- song title & artist name --->
            
            <div id="song-wrapper">
               <p id="title"></p>
               <p id="artist"></p>
            </div>

              <p id="volume_show">90%</p>   

            <!--- middle part --->
            <div class="middle">
               <button id="pre"><i class="fa fa-step-backward" aria-hidden="true"></i></button>
               <button id="play"><i class="fa fa-play" aria-hidden="true"></i></button>
               <button id="next"><i class="fa fa-step-forward" aria-hidden="true"></i></button>

           <div id="volume_button" class="volume">
               <i class="fa fa-volume-up" aria-hidden="true" id="volume_icon"></i>

                  <input type="hidden" name="brid_tv_music_player_1" id="player_type" value="brid_tv_music_player_1">
               <input type="range" min="0" max="100" value="90" id="volume">
            </div>


            </div>
            <!--- song duration part --->
            <div class="duration">
               <input type="range" min="0" max="100" value="0" id="duration_slider" onchange="change_duration()">
               <div class="song-time">
                  <div id="currentTime" class="current-time">00:00</div>
                  <div id="totalTime" class="total-time"></div>
               </div>
            </div>


            <button id="auto">Loop <i class="fa fa-circle-o-notch" aria-hidden="true"></i></button>


            <div id="company_logo" class="logo"><a target="_blank" href="https://brid.tv"><img style="width:120px;" src="'.MUSIC_PLAYER_DIR.'/public/assets/images/Brid.TV-Logo-Main.svg"></a></div>
            
         </div>

         <div style="display:none;" id="ad-container"></div>

         
         <div id="ad-overlay">
         <a href="https://brid.tv" target="_blank" alt="bridtv">
         <img style="width:100%; height:100%;" src="'.MUSIC_PLAYER_DIR.'/public/assets/images/bridtv_audio_ads.png">
         <div id="ad-container"></div>
         <div id="ad-playing-message">Your content will resume in <span id="ad-countdown-value"> 10 </span> seconds...</div>
         </a>
         <button style="color:#fff" id="skipAd"></button>
        </div>
        


      </div>

      
      <script src="'.MUSIC_PLAYER_DIR.'/public/js/players/brid_tv_music_player_1.js"></script>
   </body>
</html>';

  return $html;

  //https://codepen.io/gustavoalbuquerquebr/pen/LBrLOm
}