<?php

function vertical_playlist_player_1() 
{
	$img_url = WP_PLUGIN_URL . '/music-player/public/assets/images/';

	$html = '<!DOCTYPE html>
<html>
   <head>
      <title>music player</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      <link rel="stylesheet" type="text/css" href="'.MUSIC_PLAYER_DIR.'/public/css/vertical_playlist_player_1.css"/>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
   </head>
   <body>
    
    <div style="width:400px;" class="music-app">
     <audio src="" id="audio"></audio>
      <input type="hidden" name="vertical_playlist_player_1" id="player_type" value="vertical_playlist_player_1">
  <div class="cover">

     <div id="carouselImg" class="carousel"></div>

    <div class="cover-title">
      <p id="songTitle" class="title"></p>
    </div>

    <div class="artist">
      <img src="" id="song_img">
    </div>
    <!--
    <button class="btn btn-search">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search">
        <circle cx="11" cy="11" r="8"/>
        <path d="M21 21l-4.35-4.35"/>
      </svg>
    </button>
    -->

  </div>
  <div class="content">
    <div class="content-header">
      <span class="content-title">Top Songs</span>
    
    </div>
    <ul id="playlist" class="vertical-playlist"></ul>

    <!--
    <div class="content-header">
      <span class="content-title">Albums</span>
      <button class="btn-all">all albums</button>
    </div>

    <div class="album-list">
      <div class="album-wrapper">
        <img src="https://images.unsplash.com/photo-1497911174120-042e550e7e0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2238&q=80" alt="album" class="album-cover">
        <div class="list-item-info">
          <div class="info-title">The Slow Rush</div>
          <div class="info-subtitle">Tame Impala</div>
        </div>
      </div>
      <div class="album-wrapper">
        <img src="https://images.unsplash.com/photo-1565021009519-22da0e21f65c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" alt="album" class="album-cover">
        <div class="list-item-info">
          <div class="info-title">Currents</div>
          <div class="info-subtitle">Tame Impala</div>
        </div>
      </div>
      <div class="album-wrapper">
        <img src="https://images.unsplash.com/photo-1574155088851-0c770818ba40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" alt="album" class="album-cover">
        <div class="list-item-info">
          <div class="info-title">Lonerism</div>
          <div class="info-subtitle">Tame Impala</div>
        </div>
      </div>
    </div>
-->

  </div>
  <div class="player">
    <button class="btn btn-extend">
    </button>
    <div class="player-top-content">

      <img id="song_bottom_img" class="list-item-image" src="" alt="song">

      <div class="list-item-info">
        <div id="song_bottom_name" class="info-title">Let It Happen</div>
        <div id="artist_bottom_name" class="info-subtitle">Tame Impala</div>
      </div>

      <div class="buttons-wrapper">

        <button id="prevBtn" class="btn btn-prev">
        <i class="fas fa-backward fa-xs"></i>
        </button>

        <button id="playBtn" class="btn btn-play">
        <i class="fas fa-play"></i>
        </button> 

       

        <button id="nextBtn" class="btn btn-next">
          <i class="fas fa-forward fa-xs"></i>
        </button>
      </div>
    </div>
    <div class="proggress-part">
      <span id="currentTime" class="time">00:00</span>
      <div class="progress-container">
        <span class="progress"></span>
      </div>
      <span id="duration" class="time">03:44</span>
    </div>
  </div>
  <div class="player-screen">
    <button class="btn btn-close">
    </button>
    <span class="top-text">Now Playing</span>
    <div class="cover-wrapper">
      <img class="cover-shadow" src="https://images.unsplash.com/photo-1588465023238-f8951f48a1ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80">
      <img id="coverImgActive" class="cover-img" src="https://images.unsplash.com/photo-1588465023238-f8951f48a1ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80">
    </div>
    <div class="song-info">
      <p id="songTitleActive" class="song-title">Let It Happen</p>
      <p id="artistNameActive" class="song-subtitle">Tame Impala</p>
    </div>
    <div class="proggress-part">
      <span id="currentTimeActive" class="time">01:24</span>
      <div class="progress-container-active srki">
        <span class="progress-active"></span>
      </div>
      <span id ="durationActive" class="time">03:44</span>
    </div>
    <div class="action-bar">
      <button id="repeatBtn" class="btn btn-repeat">
       <i id="materialRepeat" class="material-icons" style="color:#fff; font-size:30px;">repeat_one</i>
      </button>
      <button id="prevBtnActive" class="btn btn-back"></button>
      <button class="btn btn-rewind"></button>
      <button id="playBtnActive" class="play-button">
          <i class="fas fa-play"></i>
      </button>
      <button class="btn btn-rewind-next"></button>
      <button id="nextBtnActive" class="btn btn-play-next"></button>
    
    </div>
    <div class="sound-bar">
      <button id="muteBtn" class="btn btn-volume-down"></button>
      <div class="volume-container volume">
     
      <input type="range" min="0" max="100" value="70" id="volumeSlider">
      <span style="visibility:hidden; opacitiy:0;" id="volumeShow">90%</span>
      </div>
      <button id="volume" class="btn btn-volume-up"></button>
    </div>
  </div>
</div>

      <script src="'.MUSIC_PLAYER_DIR.'/public/js/players/vertical_playlist_player_1.js"></script>
   </body>
</html>';

  return $html;

}