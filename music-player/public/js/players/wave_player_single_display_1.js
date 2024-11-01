jQuery(document).ready(function($){


  var params = {};
  var playerType = $("#player_type").val();
  params.action = 'awesome_player_get_playlist_by_id_frontend';
  params.playerType = playerType;
 
 
 console.log('base URL', getBaseURL());

  jQuery.ajax({
    type: 'GET',
    dataType : "json",
      url: "/wp_player/wp-admin/admin-ajax.php", 
      data:params,  // this is the function in your functions.php that will be triggered - moze da se stavi u root od plugin-a (nba-live.php). Ja sam stavio u class-nba-live u define_public_hooks a metoda je u clas-nba-live-public

    success: function( response ){

      var playlist = response.result;
      var html;
      var options;
      var j = 1;

    //console.log(response.result);
    let song = JSON.parse(response.result.playlist[0].aw_playlist);



    html += '<div class="music">'+
        '<img id="wavesurfer1SongImg" src="'+song[0].trackImg+'">'+
        '<div class="info">'+
            '<div class="songTime">'+
                '<div id="time-current">00:00</div>'+
                '<div id="time-total"></div>'+
            '</div>'+
            '<div class="center" id="waveform_single"></div>'+
            '<div class="wavesurfer_player_1_controls">'+
            '<img id="playButton" src="'+getBaseURL()+'/wp-content/plugins/music-player/public/assets/images/play-black.svg" >'+
            '<img id="stopButton" src="'+getBaseURL()+'/wp-content/plugins/music-player/public/assets/images/stop-black.svg">'+
            '<img id="volumeButton" src="'+getBaseURL()+'/wp-content/plugins/music-player/public/assets/images/volume-black.svg">'+
            '<img id="rewind" src="'+getBaseURL()+'/wp-content/plugins/music-player/public/assets/images/rewind-black.svg">'+
            '<img id="fastForward" src="'+getBaseURL()+'/wp-content/plugins/music-player/public/assets/images/fast-forward-black.svg">'+
            '<span id="playlist_author">'+song[0].artistName+'&nbsp;</span> ' + " – " + ' &nbsp;<span id="playlist_song">' + song[0].songName+'</span>'+
            '<span id="downloadSong"><a title="Download Song" href="'+song[0].song_url+'" class="button" download><img src="'+getBaseURL()+'/wp-content/plugins/music-player/public/assets/images/download-button.svg"></a></span>'+

            '</div>'+
        '</div>'+
        '</div>';


     html = html.replace("undefined", ""); 

    $("#wave_single_1").append(html);

     if(song.length > 1) {

          $(".info").append('<div id="multiple_songs_warning">Player does not support multiple songs in playlist. Create new playlist with 1 (one) song or delete multiple songs in this playlist.</div>');
          $(".wavesurfer_player_1_controls").hide();
          $("#time-current").hide();
          $("#time-total").hide();
            return;
        }


    createPlayer(song);
    applyPlayerSettings(response)

}

  });  


  });  


function createPlayer(song) {

var playButton = document.getElementById("playButton");
var stopButton = document.getElementById("stopButton");
var volumeButton = document.getElementById("volumeButton");
var fastForwardButton = document.getElementById("fastForward");
var rewindButton = document.getElementById("rewind");

var wavesurfer = WaveSurfer.create({
    container: "#waveform_single",

    plugins: [
        WaveSurfer.cursor.create({
            showTime: false,
            opacity: 1,
            customShowTimeStyle: {
                "background-color": "#000",
                color: "#fff",
                padding: "2px",
                "font-size": "10px"
            }
        })
    ],


    waveColor: "#fff",
    progressColor: "#ff3800",
    barWidth: 1.2,
    height: 60,
    responsive: true,
    hideScrollbar: false,
	pixelRatio: window.devicePixelRatio || screen.deviceXDPI / screen.logicalXDPI,
    barRadius: 1,
    barGap: 2,
    mediaControls: true
});

wavesurfer.load(song[0].song_url);


wavesurfer.on("ready", function () {

	 var totalTime = wavesurfer.getDuration(),
        currentTime = wavesurfer.getCurrentTime(),
        remainingTime = totalTime - currentTime;

        console.log("totalTime:", fancyTimeFormat(totalTime));

    document.getElementById("time-total").innerText = fancyTimeFormat(totalTime);
    document.getElementById("time-current").innerText = fancyTimeFormat(currentTime);
   
});


wavesurfer.on("seek", function (position) {

    var currentTime = position * wavesurfer.getDuration();
});


playButton.onclick = function(){
	wavesurfer.playPause();
	if(playButton.src.includes("play-black.svg")) {
		playButton.src = getBaseURL()+'/wp-content/plugins/music-player/public/assets/images/pause-black.svg"';
	}else{
		playButton.src = getBaseURL()+'/wp-content/plugins/music-player/public/assets/images/play-black.svg"';
	}
}

stopButton.onclick = function(){
	wavesurfer.stop();
	document.getElementById("time-current").style.left = "0px";
	document.getElementById("time-current").innerText = "00:00";
	playButton.src = getBaseURL()+'/wp-content/plugins/music-player/public/assets/images/play-black.svg"';
}

volumeButton.onclick = function(){
	wavesurfer.toggleMute();
	if(volumeButton.src.includes("volume-black.svg")) {
		volumeButton.src = getBaseURL()+'/wp-content/plugins/music-player/public/assets/images/mute-black.svg"';
	}else{
		volumeButton.src = getBaseURL()+'/wp-content/plugins/music-player/public/assets/images/volume-black.svg"';
	}
}

fastForwardButton.onclick = function(){
        var totalTime = wavesurfer.getDuration(),
        currentTime = wavesurfer.getCurrentTime(),
        remainingTime = totalTime - currentTime;

        currentTime += 5;
        document.getElementById("time-current").innerText = fancyTimeFormat(currentTime);
        wavesurfer.setCurrentTime(currentTime);
   
}

rewindButton.onclick = function(){
        var totalTime = wavesurfer.getDuration(),
        currentTime = wavesurfer.getCurrentTime(),
        remainingTime = totalTime - currentTime;

        currentTime -= 5;
        if(currentTime <= 0) currentTime = 0;
        document.getElementById("time-current").innerText = fancyTimeFormat(currentTime);
        wavesurfer.setCurrentTime(currentTime);
   }

wavesurfer.on("finish", function () {
    playButton.src = getBaseURL()+'/wp-content/plugins/music-player/public/assets/images/play-black.svg"';
    wavesurfer.stop();
});


wavesurfer.on("audioprocess", function() {
  if (wavesurfer.isPlaying()) {
    var totalTime = wavesurfer.getDuration(),
        currentTime = wavesurfer.getCurrentTime(),
        remainingTime = totalTime - currentTime;

    var cursorId = document.getElementById("cursorId");
 	var style;
 	var moveDiv = true;

    document.getElementById("time-total").innerText = fancyTimeFormat(totalTime);
    document.getElementById("time-current").innerText = fancyTimeFormat(currentTime);
	var divTimeCurrent = document.getElementById("time-current")
	var divTimeCurrentStyle = window.getComputedStyle(divTimeCurrent);
	var divTimeCurrentWidth = divTimeCurrentStyle.getPropertyValue("width");	

	var cursorIdStyle = window.getComputedStyle(cursorId);
	var cursorIdWidth = cursorIdStyle.getPropertyValue("width");	

	 var firstChild = cursorId.firstElementChild;
	   style = window.getComputedStyle(firstChild)
	   width = style.getPropertyValue("width");


	if(moveDiv) {
		document.getElementById("time-current").style.left = width;
	}
	     	
	if(moveDiv && parseInt(width) + parseInt(divTimeCurrentWidth) >= parseInt(cursorIdWidth))  {
		document.getElementById("time-current").style.left = parseInt(cursorIdWidth) - parseInt(divTimeCurrentWidth)-12 + "px" ;
	}
	   
    }
});   


wavesurfer.on("finish", function () {
    document.getElementById("time-current").style.left = "0px";
	document.getElementById("time-current").innerText = "00:00";
});

}


function applyPlayerSettings(response) {

    console.log(response.result.player[0]);

    if(response.result.player[0].aw_player_stop == "1") jQuery( "#stopButton" ).addClass('hide');
    if(response.result.player[0].aw_player_muted == "1") jQuery( "#volumeButton" ).addClass('hide');
    if(response.result.player[0].aw_player_rewind == "1") jQuery( "#rewind" ).addClass('hide');
    if(response.result.player[0].aw_player_fast_forward == "1") jQuery( "#fastForward" ).addClass('hide');
    if(response.result.player[0].aw_player_progressbar == "1") jQuery( "#cursorId" ).css('display', 'inline-grid');
  }


 function getBaseURL() {
    var url = location.href;
    var baseURL = url.substring(0, url.indexOf('/', 14));

    if (baseURL.indexOf('http://localhost') != -1) {

      var url = location.href;
      var pathname = location.pathname;
      var index1 = url.indexOf(pathname);
      var index2 = url.indexOf("/", index1 + 1);
      var baseLocalUrl = url.substr(0, index2);

      return baseLocalUrl + "/wp_player/";
    }
    else {

      return baseURL + "/wp_player/";
      }

    }



function fancyTimeFormat(duration) {
  // Hours, minutes and seconds
  const hrs = ~~(duration / 3600);
  const mins = ~~((duration % 3600) / 60);
  const secs = ~~duration % 60;

  // Output like "1:01" or "4:03:59" or "123:03:59"
  let ret = "";

  if (hrs > 0) {
    ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
  }

  ret += "0"  + mins + ":" + (secs < 10 ? "0" : "");
  ret += "" + secs;

  return ret;
}
