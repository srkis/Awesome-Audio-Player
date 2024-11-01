
jQuery(document).ready(function($){

 $('#togglePlaylist').click(function() {
   //  $('.box').slideToggle("fast");

     var hint = document.getElementById('wave_playlist_songs');
      if (hint.classList.contains('h-hide')) {
        hint.classList.remove('h-hide');
      } else {
        hint.classList.add('h-hide');
      }


    var closeIcon = document.getElementById("closeIcon");
    if(closeIcon.src.includes("close.png")) {
        closeIcon.src = getBaseURL() + "/wp-content/plugins/music-player/public/assets/images/playlist.png";
    }else{
        closeIcon.src = getBaseURL() + "/wp-content/plugins/music-player/public/assets/images/close.png";
    }
 });


 $(".box").mousemove(function(e){
        var h = $('.innerbox').height();
        var offset = $($(this)).offset();
        var position = (e.pageY-offset.top)/$(this).height();
        
        if(position<0.33) {

            $(this).stop().animate({ scrollTop: 0 }, 3000);
        }
        else if(position>0.66) {
            $(this).stop().animate({ scrollTop: h }, 3000);
        }
        else
        {
            $(this).stop();
        }
    });



  var params = {};
  var playerType = $("#player_type").val();
  params.action = 'awesome_player_get_playlist_by_id_frontend';
  params.playerType = playerType;
 
 // console.log(playerType);return;

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

    

    $("#playlistName").val(response.result.playlist[0].aw_playlist_name);
      
    let songs = JSON.parse(response.result.playlist[0].aw_playlist);
    var song_artist_name = songs[0].artistName + ' - ' + songs[0].songName;

    $('#wave_playlist_1_song_img').attr('src', songs[0].trackImg);
    $('#author_song_name').text( song_artist_name);


   
    for(var i = 0; i < songs.length; i++ ){  
       
        html += '<div class="songItem">'+
                     '<a href="'+songs[i].song_url+'" class="list-group-item">'+  
                      '<span class="playlist_counter">'+j+'</span> '+
                     '<img class="wave_1_playlist_img" src="'+songs[i].trackImg+'">'+
                        '<i class="glyphicon glyphicon-play"></i>'+
                        '<span id="playlist_author">'+songs[i].artistName+'&nbsp;</span> ' + " – " + ' &nbsp;<span id="playlist_song">' + songs[i].songName+'</span>'+
                        '<span class="badge"><a class="downloadSong" title="Download Song" href="'+songs[i].song_url+'" class="button" download><img class="downloadImg" style="width:20px; max-height:20px;" src="'+getBaseURL()+'/wp-content/plugins/music-player/public/assets/images/download-button.svg"></a></span>'+ 
                    '</a>'+
                    '</div>';

       j++;
    }



     html = html.replace("undefined", ""); 

    $("#playlist").append(html);

    var firstChild = $("#playlist").children(":first");
    firstChild[0].childNodes[0].childNodes[4].classList.add('active-song');

    createPlayer(songs);
    applyPlayerSettings(response);

}

  });  


  });  


function createPlayer(songs) {

var playButton = document.getElementById("playButton");
var pauseButton = document.getElementById("pauseButton");
var stopButton = document.getElementById("stopButton");
var volumeButton = document.getElementById("volumeButton");
var fastForwardButton = document.getElementById("fastForward");
var rewindButton = document.getElementById("rewind");
var nextSong = document.getElementById("nextSong");
var previousSong = document.getElementById("previousSong");


var wavesurfer = WaveSurfer.create({
    container: "#waveform",

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


    waveColor: "#000",
    progressColor: "#ff7a7a",
    barWidth: 1.2,
    height: 60,
    responsive: true,
    hideScrollbar: false,
    pixelRatio: window.devicePixelRatio || screen.deviceXDPI / screen.logicalXDPI,
    barRadius: 1,
    barGap: 2
});



  // The playlist links
    let links = document.querySelectorAll(".songItem .list-group-item");
    //let links = document.querySelectorAll("#playlist a");
    let currentTrack = 0;

    // Load a track by index and highlight the corresponding link
    let setCurrentSong = function(index) {
    
    currentTrack = index;

    if(currentTrack < 0 ) {
        currentTrack = songs.length - 1;
    }

        
        links[currentTrack].classList.remove("wave_playlist_active");
        
        links[currentTrack].classList.add("wave_playlist_active");

        jQuery('#wave_playlist_1_song_img').attr('src', songs[currentTrack].trackImg);
        jQuery('#author_song_name').text( songs[currentTrack].artistName + ' - ' + songs[currentTrack].songName);

        playButton.style.display = "none";
        pauseButton.style.display = "block";
      
        wavesurfer.load(links[currentTrack].href);

    };

    // Load the track on click
    Array.prototype.forEach.call(links, function(link, index) {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            jQuery("span").removeClass("active-song");
            jQuery(this).find('#playlist_author').eq(0).addClass('active-song');

            setCurrentSong(index);
        });
    });


  // Go to the next track on finish
    wavesurfer.on("finish", function() {
        setCurrentSong((currentTrack + 1) % links.length);
    });


    nextSong.onclick = function(){
        setCurrentSong((currentTrack + 1) % links.length);
    };

    previousSong.onclick = function(){
        setCurrentSong((currentTrack - 1) % links.length);
    };


setCurrentSong(currentTrack);


//wavesurfer.load("http://localhost/wp-test/wp-content/uploads/2023/04/Nando_Fortunato_-_Tomorrow_Original_Mix_sample.mp3");


wavesurfer.on("ready", function () {

	 var totalTime = wavesurfer.getDuration(),
        currentTime = wavesurfer.getCurrentTime(),
        remainingTime = totalTime - currentTime;

    document.getElementById("time-total").innerText = fancyTimeFormat(totalTime);
    document.getElementById("time-current").innerText = fancyTimeFormat(currentTime);


      let links = document.querySelectorAll("#playlist a");
      let currentTrack = 0;

    for( var i = 0; i < links.length; i++){
       
      //checkMp3SizeAndDuration(links[i].href);
       checkMp3SizeAndDuration(links[i].href);

       //fancyTimeFormat
    }

     wavesurfer.play();
   
});


wavesurfer.on("seek", function (position) {

    var currentTime = position * wavesurfer.getDuration();
});


playButton.onclick = function(){
	//wavesurfer.playPause();
    playButton.style.display = "none";
    pauseButton.style.display = "block";
	// if(playButton.src.includes("play.png")) {
	// 	playButton.src = getBaseURL() + "/wp-content/plugins/music-player/public/assets/images/pause.png";
	// }else{
	// 	playButton.src = getBaseURL() + "/wp-content/plugins/music-player/public/assets/images/play.png";
	// }

    wavesurfer.play();
}

pauseButton.onclick = function(){
    //wavesurfer.playPause();
    playButton.style.display = "block";
    pauseButton.style.display = "none";

    wavesurfer.pause();
}

stopButton.onclick = function(){
	wavesurfer.stop();
	document.getElementById("time-current").style.left = "0px";
	document.getElementById("time-current").innerText = "00:00";
    playButton.style.display = "block";
    pauseButton.style.display = "none";
	//playButton.src =getBaseURL() + "/wp-content/plugins/music-player/public/assets/images/play.png";
}

volumeButton.onclick = function(){
	wavesurfer.toggleMute();
	if(volumeButton.src.includes("volume.png")) {
		volumeButton.src = getBaseURL() + "/wp-content/plugins/music-player/public/assets/images/mute.png";
	}else{
		volumeButton.src = getBaseURL() + "/wp-content/plugins/music-player/public/assets/images/volume.png";
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


/*
wavesurfer.on("finish", function () {
    playButton.src = "'.$img_url.'play.png";
    wavesurfer.stop();
});
*/


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

    //console.log('SES',response.result.player[0]);

    if(response.result.player[0].aw_player_stop == "1") jQuery( "#stopButton" ).addClass('hide');
    if(response.result.player[0].aw_player_volume_button == "1") jQuery( "#volumeButton" ).addClass('hide');
    if(response.result.player[0].aw_player_rewind == "0") jQuery( "#rewind" ).addClass('hide');
    if(response.result.player[0].aw_player_fast_forward == "0") jQuery( "#fastForward" ).addClass('hide');
    if(response.result.player[0].aw_player_progressbar == "1") jQuery( "#cursorId" ).css('display', 'inline-grid');

    if(response.result.player[0].aw_player_sticky == "1") jQuery( ".hero" ).addClass('sticky');

    if(response.result.player[0].aw_player_download_button == "1") jQuery( ".downloadSong" ).hide();
    if(response.result.player[0].aw_player_current_time == "1") jQuery( "#time-current" ).hide();
    if(response.result.player[0].aw_player_duration == "1") jQuery( "#time-total" ).hide();

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


        function checkMp3SizeAndDuration(mp3file) {    
   //     const mp3file = 'https://raw.githubusercontent.com/prof3ssorSt3v3/media-sample-files/master/doorbell.mp3'

        const audioContext = new (window.AudioContext || window.webkitAudioContext)()
        const request = new XMLHttpRequest()
        request.open('GET', mp3file, true)
        request.responseType = 'arraybuffer'
        request.onload = function() {
            audioContext.decodeAudioData(request.response,
                function(buffer) {
                    let duration = buffer.duration
                 
                    return duration;
                    //document.write(duration)
                    }
                )
            }
          request.send()
   
  }


//https://stackoverflow.com/questions/8871429/how-do-i-create-a-jquery-vertical-scroll-of-div-contents-on-hover
//http://jsfiddle.net/n3Q9j/5/