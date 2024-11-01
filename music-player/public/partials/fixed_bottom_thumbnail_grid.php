<?php

function fixed_bottom_thumbnail_grid() 
{
	$img_url = WP_PLUGIN_URL . '/music-player/public/assets/images/';

	$html = '<!DOCTYPE html>
<html>
   <head>
      <title>music player</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      <link rel="stylesheet" type="text/css" href="'.MUSIC_PLAYER_DIR.'/public/css/fixed_bottom_thumbnail_grid.css"/>
       <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
   </head>
   <body>
     

  <div class="player-wrapper">
    
    <div id="playlist-holder" class="playlist-holder">
<div id="slider-container" class="slider">

   <audio src="" id="audio"></audio>
   <input type="hidden" name="fixed-bottom-thumbnail-grid" id="player_type" value="fixed-bottom-thumbnail-grid">
   
   <div onclick="prev()" class="control-prev-btn ">
       <i class="fas fa-arrow-left"></i>
   </div>
   <div onclick="next()" class="control-next-btn ">
      <i class="fas fa-arrow-right"></i>
   </div>
</div>

</div> <!-- Playlist holder --> 



<div class="player-holder">


   <div id="ex_controls" class="player-ex-controls"> 

        <button  class="playback-toggle-ex action-btn action-btn-big playBtn" style="display: block";>
            <i class="fas fa-play"></i>
         </button>

       <button id="playerToggle" type="button" class="player-toggle-ex">
             <span class="hap-btn-player-toggle">
             <svg height="20" width="20" aria-hidden="true" focusable="false" role="img" viewBox="0 0 512 512"><path d="M238 429.3l22.6-22.6 192-192L475.3 192 430 146.7l-22.6 22.6L238 338.7 68.6 169.4 46 146.7 .7 192l22.6 22.6 192 192L238 429.3z"></path></svg>
            </span>
        </button>


     </div>
     
     
     
     

      <div class="seekbar">
      <div class="progress"></div>
      </div> 

      <div class="left-controls">
         <img id="thumbImg" class="player-thumb" src="http://localhost/wp-test/wp-content/uploads/2023/04/papa_tin_send_me_angel.jpg">
         <div id="songInfo" class="song-info"></div>
         <div id="songTitle" class="song-title">Hopes for Tomorrow</div>
         <div id="songArtist" class="song-artist">Marcozannone</div>

      </div>
<span id="currentTime" class="time">00:00</span>

      <div class="center-controls">

       <button id="prev" class="action-btn">
            <i class="fas fa-backward"></i>
         </button>

         <button id="play" class="action-btn action-btn-big playBtn" style="display: block";>
            <i class="fas fa-play"></i>
         </button>

         <button id="next" class="action-btn">
            <i class="fas fa-forward"></i>
         </button>


         <button id="repeatBtn" class="action-btn">
       <i id="materialRepeat" class="material-icons" style="font-size:32px;">repeat_one</i>
      </button>

      <span id="duration" class="time">03:44</span>
       
   </div>


   <div class="right-controls">

     <button id="volume" class="action-btn playing">
            <i class="fas fa-volume-up"></i>
      </button>

       <input type="range" min="0" max="100" value="70" id="volumeSlider">

        <span id="volumeShow">90%</span>  

        <button class="action-btn">
          <span id="playlistBtn" style="color:#201518; font-size:32px;" class="material-icons">playlist_play</span>
       </button>

      </div>

      
</div>  <!-- player holder -->


</div> <!-- player wrapper -->


      <script src="'.MUSIC_PLAYER_DIR.'/public/js/players/fixed_bottom_thumbnail_grid.js"></script>
   </body>
</html>';

  return $html;

  //https://codepen.io/abhishekdana/pen/zYYXbMY
  //https://www.interactivepixel.net/env/hap/index_wp.html
  //https://codepen.io/tonypconway/pen/bGVQyKO - google ima
  //https://developers.google.com/interactive-media-ads/docs/sdks/html5/client-side/ad-rules
  //https://codepen.io/search/pens?q=ima+sdk&cursor=ZD0xJm89MCZwPTEx
  //https://developers.google.com/interactive-media-ads/docs/sdks/html5/client-side

  //https://interactivepixel.net/env/hap/



                      //      <img src="<?php echo CMS_STATIC_HOST;  /img/upgrade/marketplace_bridman_apply.svg" style="height:105px">


//https://srdjan.brid.tv/players/edit/31720?partner_id=19698

// /var/www/html/cms/Config/core.php na 532 liniji zakomentarisati     //$cms_static_host = 'd2rz3gz50gnui2.cloudfront.net';


}


