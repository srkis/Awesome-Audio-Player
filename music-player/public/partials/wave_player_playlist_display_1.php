<?php

function wave_player_playlist_display_1()
{

	$img_url = WP_PLUGIN_URL . '/music-player/public/assets/images/';
	$html = '

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WaveSurfer Player 1</title>
     <link rel="stylesheet" type="text/css" href="'.MUSIC_PLAYER_DIR.'/public/css/wave_player_playlist_1.css"/>
        <script src="'.MUSIC_PLAYER_DIR.'/public/js/players/wavesurfer-original.js"></script> 
        <script src="'.MUSIC_PLAYER_DIR.'/public/js/players/wavesurfer.cursor.js"></script> 
       
    
</head>
<body>
    

	<div class="hero ">

		<div class="music">
		<img id="wave_playlist_1_song_img" src="http://localhost/wp-test/wp-content/uploads/2023/04/kick_it.jpg">
		<div class="info">
			<div class="songTime">
				<div id="time-current">00:00</div>
				<div id="time-total"></div>
			</div>

			<input type="hidden" name="wave_player_playlist_1" id="player_type" value="wave_player_playlist_1">

			<div class="center" id="waveform"></div>
				
			<div class="wavesurfer_player_1_controls">
			
			<img style="width:30px;height:30px;" src="'.$img_url.'backward-10s.svg" id="rewind">
			<img style="width:20px;height:20px;" src="'.$img_url.'previous-btn.svg" id="previousSong">
					
			<img src="'.$img_url.'play.png" id="playButton">
			<img style="display:none;" src="'.$img_url.'pause.png" id="pauseButton">
			<img style="width:20px;height:20px;" src="'.$img_url.'next-btn.svg" id="nextSong">


			<img style="width:30px;height:30px;" src="'.$img_url.'forward-10s.svg" id="fastForward">
			<img src="'.$img_url.'stop.png" id="stopButton">
			<img src="'.$img_url.'volume.png" id="volumeButton">
			<span id="author_song_name"></span>
			<span id="togglePlaylist"> <img id="closeIcon" src="'.$img_url.'close.png"></span>

			</div>


		</div>

		</div>

	</div>


	  <div id="wave_playlist_songs" class="box">

	 	 <div class="list-group innerbox" id="playlist"></div>

      </div>

</script>



<script src="'.MUSIC_PLAYER_DIR.'/public/js/players/wave_player_playlist_display_1.js"></script>


</body>
</html>


	';

	return $html;
	//https://stackoverflow.com/questions/40638181/how-to-display-remaining-time-in-realtime-with-wavesurfer-js
	//https://codecanyon.net/search/html5%20audio%20player
}