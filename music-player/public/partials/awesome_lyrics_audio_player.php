<?php

function awesome_lyrics_audio_player() {

		$html = '

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WaveSurfer Player 1</title>
     <link rel="stylesheet" type="text/css" href="'.MUSIC_PLAYER_DIR.'/public/css/awesome_lyrics_audio_player.css"/>
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">            


    
</head>
<body>


<div id="wrapper" class="wrapper" style="display: block;">

<div class="player-outer" style="opacity: 1;">

<div class="player-holder">

<div class="player-thumb-wrapper">
     <div id="playerThumb" class="player-thumb" role="img" aria-label="Longshot" style="background-image: url(http://localhost/wp-test/wp-content/uploads/2023/05/korin-last-stone.jpg); opacity: 1;"></div>
     </div>

     <input type="hidden" name="awesome-lyrics-audio-player" id="player_type" value="awesome-lyrics-audio-player">

     <div class="player-right">

		<audio id="audio" class="player" controls></audio>
		<div class="center-elements">

		<div class="info">
            <div id="artistName" class="player-title">Longshot</div>
            <div id="songTitle" class="player-artist">Catfish and the Bottlemen</div>
        </div>

        <div class="seekbar-wrap">
            <div class="media-time"> 
              <div id="currentTime" class="media-time-current">01:42</div>
              <div id="duration" class="media-time-total">03:57</div>
            </div>
           <div class="media-time-ad">Advertising will end in&nbsp;<span></span></div>
            <div class="seekbar">
             <div class="progress-bg">
             <div class="load-level" style="width: 730px;">
             <div class="progress-level" style="width: 312.999px;"></div>
           </div>
          </div>
         </div> 

       </div>


       	<div class="lyrics-controls">

            <div class="controls-left">
               <button id="fastBackward"> <i class="fa fa-fast-backward dark-color" aria-hidden="true"></i></button>
               <button id="pre"><i class="fa fa-step-backward dark-color" aria-hidden="true"></i></button>
               <button id="play"><i class="fa fa-play dark-color" aria-hidden="true"></i></button>

               <button id="next"><i class="fa fa-step-forward dark-color" aria-hidden="true"></i></button>
               <button id="fastForward"><i class="fa fa-fast-forward dark-color" aria-hidden="true"></i></button>

				<div id="volume_wrapper" class="volume_wrapper">
                  <i class="fa fa-volume-up" aria-hidden="true" id="volumeBtn"></i>
                    <div class="volume-seekbar">
                      <input type="range" min="0" max="100" value="70" id="volumeBar">
                      <div class="volume-bg">
                      <div id="volumeLevel" class="volume-level" style="width: 50px;"></div>
                      </div>
                    </div>
                </div>
              </div>  

              <div class="controls-right">
              <span id="togglePlaylist"> <img id="closeIcon" src="http://localhost/wp-test//wp-content/plugins/music-player/public/assets/images/close.png"></span>

              </div>



           
            </div>
        </div>
     </div>

</div> <!-- player-holder -->


<div class="lyrics-holder">
    <div class="lyrics">
        

    </div>


</div> <!-- lyrics-holder -->



<div id="playlist_holder" class="playlist-holder">

<div id="playlist" class="playlist-inner">

  

    
</div>


</div>  <!-- playlist-holder -->

</div> <!-- outer -->


</div> <!-- wrapper -->



<script src="'.MUSIC_PLAYER_DIR.'/public/js/players/awesome_lyrics_audio_player.js"></script>


</body>
</html>


	';

	return $html;
}


//http://localhost/wp-test/wp-content/uploads/2023/05/eric-clapton-cocaine.lrc
