<?php

function wave_modern_black_display_1()
{

	$img_url = WP_PLUGIN_URL . '/music-player/public/assets/images/';
	$html = '

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WaveSurfer Player 1</title>
     <link rel="stylesheet" type="text/css" href="'.MUSIC_PLAYER_DIR.'/public/css/wave_modern_black_display_1.css"/>
        <script src="'.MUSIC_PLAYER_DIR.'/public/js/players/wavesurfer-original.js"></script> 
        <script src="'.MUSIC_PLAYER_DIR.'/public/js/players/wavesurfer.cursor.js"></script> 

    
</head>
<body>
    



	<div class=" ">


	 <div class="card mt-4 main-wave" id="main">
      <div  class="modern-player-wrap">
           <div class="player-thumb-wrapper">
            <img id="song_img" src="" alt="..." class="img-avatar-circle">
           </div>


           <div class="modern-player-holder"> 
           	<div style="display: flex; flex-direction: row; justify-content: space-between;" class="modern-player-top">
           	<div class="modern-player-top-left" style="display: flex;flex-direction: row;align-items: center;">

           	<span class="backward-10s">
           	   <img style="width:23px;height:23px;" src="'.$img_url.'backward-10s.svg" id="rewind">
           	</span>

           	<span id="previousSong" class="btn-previous">
	           	<svg width="15" height="15" fill="#ffffff" viewBox="0 0 10.2 11.7"><polygon points="10.2,0 1.4,5.3 1.4,0 0,0 0,11.7 1.4,11.7 1.4,6.2 10.2,11.7"></polygon></svg>
				  	</span>

				  		<input type="hidden" name="wave_black_modern_1" id="player_type" value="wave_black_modern_1">
				  		
               	<span id="playButton" class="btn-play">
               		<svg width="30" height="30" fill="#ffffff" viewBox="0 0 17.5 21.2"><path d="M0,0l17.5,10.9L0,21.2V0z"></path></svg>
               	</span>


				  <span class="btn-pause" id="pauseButton" style="display:none;" >
   	                 <svg width="30" height="50" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff">
									<g id="SVGRepo_bgCarrier" stroke-width="0"/>
									<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
									<g id="SVGRepo_iconCarrier">
									<path d="M307.2 256h153.6v512H307.2V256zm256 512h153.6V256H563.2v512z" fill="#ffffff" fill-rule="evenodd"/>
									</g>
									</svg>
					   </span>
				 	
				 	<span id="nextSong" class="btn-next">
					  <svg width="15" height="15" fill="#ffffff" viewBox="0 0 10.2 11.7"><polygon points="0,11.7 8.8,6.4 8.8,11.7 10.2,11.7 10.2,0 8.8,0 8.8,5.6 0,0"></polygon></svg>
					</span>

					<span>
						<img style="width:23px;height:23px;" src="'.$img_url.'forward-10s.svg" id="fastForward">
					</span>
 	
  					<span id="author_song_name">Anton Ishutin - Kick It</span>
			
					</div>
			

					<div id="volumeWrap" class="volume-wrap">
							<span id="volumeButton" class="">	
							 <svg width="25" height="25" fill="#ffffff" viewBox="0 0 48 48"><path d="M6 18v12h8l10 10V8L14 18H6zm27 6c0-3.53-2.04-6.58-5-8.05v16.11c2.96-1.48 5-4.53 5-8.06zM28 6.46v4.13c5.78 1.72 10 7.07 10 13.41s-4.22 11.69-10 13.41v4.13c8.01-1.82 14-8.97 14-17.54S36.01 8.28 28 6.46z"></path><path d="M0 0h48v48H0z" fill="none"></path></svg>
						 </span>

						 <span id="muteButton" style="display:none">	
							<svg fill="#ffffff" width="40px" height="40px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
								<g id="SVGRepo_bgCarrier" stroke-width="0"/>
								<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
								<g id="SVGRepo_iconCarrier">
								<path d="M542.86 294.4L362.3 430a10.72 10.72 0 0 0-2.71 3.25H255.53v153.2h104.06a10.58 10.58 0 0 0 2.71 3.25l180.56 135.52a10.83 10.83 0 0 0 17.34-8.66v-413.5a10.83 10.83 0 0 0-17.34-8.66zM742.6 599.41L765 577l-67.2-67.2 67.2-67.2-22.4-22.4-67.2 67.2-67.2-67.2-22.4 22.4 67.2 67.2-67.2 67.2 22.4 22.4 67.2-67.2 67.2 67.2z"/>
								</g>
								</svg>
						 </span>
				      

				 	<div class="wrap">
					  <input type="range" min="0" max="100" value="50" class="range" id="volume">
					</div>
					<span id="volume_show"></span>
				</div>
				 </div>

		 		<div class="wave-holder" class="" id="modern-black-waveform"></div>

		 		<div class="time-wrap">  
                  <div id="currentTime" class="time-current">00:00</div>
                  <div id="totalTime" class="time-total"></div>
            </div>
           </div>
   		 </div>
 			<div style="overflow-y:auto" class="playlist-holder" >
				<div class="playlist-filter-msg"><span>NOTHING FOUND!</span></div>
          	<div class="playlist-inner">
          	  <div class="playlist-content">
          	  	<div id="playlist" class="playlist-item">


          	  	</div>

          	  </div>

          	</div>

          </div>
       

       <div class="bottom-bar">
       	<div class="filter-wrap">
				<input id="search_song" class="search-filter" type="text" placeholder="Search.." title="Search">

       	</div>

       </div>

        <div class="card-body card-body-big">
            <div class="row">
                <div class="col-lg-6">
                  
                </div>
                <div class="col-lg-5 ml-lg-auto">
                   
                   
                </div>

            </div>
        </div>
    </div>

 </div>


	<!--
 <div style="display: flex;" class="playlist-item-wrap">
          	  		<div class="playlist-item-content">
          	  			<div class="playlist-info">
          	  				<div class="playlist-title-wrap active">
          	  					<p class="playlist-title-num">01.&nbsp;</p>
          	  					<p class="playlist-title">A Way To The Top</p>
          	  					&nbsp;-&nbsp;
          	  					<p class="playlist-artist">Soundroll</p>
          	  				</div>

          	  			</div>
          	  		</div>

          	  	
          	  		<div class="playlist-icons">
     
          	  		 <a class="playlist-icon" href="https://spotify.com" target="_blank" title="Spotify">
							<img style="width:20px; height:25px;" src="'.$img_url.'spotify-icon.svg" id="amazon-icon">
          	  		 </a>
          	  		 <a class="playlist-icon" href="https://youtube.com" target="_blank" title="Youtube">
							<img style="width:25px; height:25px;" src="'.$img_url.'youtube-icon.svg" id="amazon-icon">
						</a>

						<a class="playlist-icon" href="https://apple.com" target="_blank" title="Apple Music">
							<img style="width:20px; height:25px;" src="'.$img_url.'apple-icon.svg" id="amazon-icon">
						</a>

          	  		 <a class="playlist-icon" href="https://soundcloud.com" target="_blank" title="Soundcloud">
          	  		 	<img style="width:25px; height:25px;" src="'.$img_url.'soundcloud-icon.svg" id="amazon-icon">
          	  		 </a>

          	  		 <a class="playlist-icon" href="https://amazon.com" target="_blank" title="Amazon">
          	  		   <img style="width:25px; height:25px;" src="'.$img_url.'amazon-icon.svg" id="amazon-icon"></a>
          	  		 </div> 


          	  	</div>

          	  	-->



</script>



<script src="'.MUSIC_PLAYER_DIR.'/public/js/players/wave_modern_black_display_1.js"></script>


</body>
</html>


	';

	return $html;
	//https://stackoverflow.com/questions/40638181/how-to-display-remaining-time-in-realtime-with-wavesurfer-js
	//https://codecanyon.net/search/html5%20audio%20player
}