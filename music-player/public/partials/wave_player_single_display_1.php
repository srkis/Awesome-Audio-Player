<?php

function wave_player_single_display_1()
{

	$img_url = WP_PLUGIN_URL . '/music-player/public/assets/images/';
	$html = '

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WaveSurfer Player 1</title>
     <link rel="stylesheet" type="text/css" href="'.MUSIC_PLAYER_DIR.'/public/css/wave_player_single_1.css"/>
        <script src="'.MUSIC_PLAYER_DIR.'/public/js/players/wavesurfer-original.js"></script> 
        <script src="'.MUSIC_PLAYER_DIR.'/public/js/players/wavesurfer.cursor.js"></script> 
       
    
</head>
<body>
    

	<div id="wave_single_1" class="hero ">
		<input type="hidden" name="wave_player_single_1" id="player_type" value="wave_player_single_1">
	</div>


<script>









</script>



<script src="'.MUSIC_PLAYER_DIR.'/public/js/players/wave_player_single_display_1.js"></script>

</body>
</html>


	';

	return $html;
	//https://stackoverflow.com/questions/40638181/how-to-display-remaining-time-in-realtime-with-wavesurfer-js
	//https://codecanyon.net/search/html5%20audio%20player
}