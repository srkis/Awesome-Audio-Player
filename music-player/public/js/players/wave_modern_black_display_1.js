
let autoplay = false;


jQuery(document).ready(function($){
    
  var params = {};
  var playerType = $("#player_type").val();
  params.action = 'awesome_player_get_playlist_by_id_frontend';
  params.playerType = playerType;

 jQuery.ajax({
    type: 'GET',
    dataType : "json",
      url: "/wp_player/wp-admin/admin-ajax.php", 
      data:params,  // this is the function in your functions.php that will be triggered - moze da se stavi u root od plugin-a (nba-live.php). Ja sam stavio u class-nba-live u define_public_hooks a metoda je u clas-nba-live-public

    success: function( response ){

      var playlist = response.result;
      var html;
      var purchase;
      var options;
      var j = 1;

    let songs = JSON.parse(response.result.playlist[0].aw_playlist);
    var song_artist_name = songs[0].artistName + ' - ' + songs[0].songName;

    console.log("songs:", songs);


    $('#song_img').attr('src', songs[0].trackImg);
    $('#author_song_name').text( song_artist_name);

for(var i = 0; i < songs.length; i++ ){ 

            switch(songs[i].purchaseDwnload){
                 case "download_button":
                    purchase = '<a class="playlist-icon download" href="'+songs[i].song_url+'" download="" title="Download" aria-label="Download"><svg width="15" height="15" fill="#999" viewBox="0 0 512 512"><path d="M288 32V0H224V32 274.7l-73.4-73.4L128 178.7 82.7 224l22.6 22.6 128 128L256 397.3l22.6-22.6 128-128L429.3 224 384 178.7l-22.6 22.6L288 274.7V32zM0 512H512V352H346.5l-45.3 45.3L256 442.5l-45.3-45.3L165.5 352H0V512zM432 408a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"></path></svg></a>';
                    break;

                case "none":
                    purchase = "";
                    break;

                case "purchase_button":
                    purchase = '<a class="playlist-icon hap-link" href="https://www.amazon.com/s?k='+songs[i].songName+'&i=digital-music" target="_blank" title="Purchase" aria-label="Purchase" rel="nofollow"><svg width="15" height="15" fill="#999" viewBox="0 0 576 512"><path d="M24 0H0V48H24 76.1l60.3 316.5 3.7 19.5H160 488h24V336H488 179.9l-9.1-48H496L576 32H122l-2.4-12.5L115.9 0H96 24zM176 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm336-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM316 180H256V140h60V80h40v60h60v40H356v60H316V180z"></path></svg></a>';
                    break;
            }

      html += '<div style="display: flex;" class="playlist-item-wrap">'+
                        '<div class="playlist-item-content">'+
                            '<div class="playlist-info">'+
                                '<a href="'+songs[i].song_url+'" class="playlist-title-wrap">'+
                                    '<p data-id="'+j+'" class="playlist-title-num">'+j+'.&nbsp;</p>'+
                                    '<p class="playlist-title">'+songs[i].artistName+'</p>'+
                                    '&nbsp;-&nbsp;'+
                                    '<p data-song="'+songs[i].songName+'" id="playlist_author" class="playlist-artist">'+songs[i].songName+'</p>'+
                                '</a>'+
                            '</div>'+

                        '</div>'+
                        '<span>'+purchase+'</span>'+
                        
                    '</div>';
            j++;
        }

    html = html.replace("undefined", ""); 

if(response.result.player[0].aw_player_autoplay === "1") {
      autoplay = true;
    }
   
    $("#playlist").append(html);       
        var songList = document.querySelectorAll('.playlist-title-wrap');
        songList[0].classList.add("modern_playlist_active");
        createPlayer(songs);
        applyPlayerSettings(response)
    }
});


    /*Search*/
 $("#search_song").keyup(function () {
  var filter = $(this).val().trim().toLowerCase();
  $('.playlist-item-wrap').each(function () {
    if ($(this).find("p").text().toLowerCase().includes(filter)) {
      $(this).show();
    } else {
      $(this).hide();
    }
  });
});



 $(function() {
  
  $('.wrap').addClass('loaded');
  
  $('.range').bind('change mousemove', function() {
    var val = $(this).val();
    var buf = ((100 - val) / 4) + parseInt(val);
    $(this).css(
      'background',
      'linear-gradient(to right, #cc181e 0%, #cc181e ' + val + '%, #777 ' + val + '%, #777 ' + buf + '%, #444 ' + buf + '%, #444 100%)'
    );
  });

  var timeout;
  $('.wrap').bind('focusin mouseover mousedown hover', function() {
    window.clearTimeout(timeout);
    $(this).addClass('hover');
  });
  $('.wrap').bind('focusout mouseout mouseup', function() {
    window.clearTimeout(timeout);
    timeout = setTimeout(function(){removeHoverClass();}, 1000);
  });
  function removeHoverClass() {
    if (!$('.wrap').is(":hover")) {
      $('.wrap').removeClass('hover');
    }
  }

});


});



function createPlayer(songs){

    var playButton = document.getElementById("playButton");
    var pauseButton = document.getElementById("pauseButton");
    var stopButton = document.getElementById("stopButton");
    var volumeButton = document.getElementById("volumeButton");
    var fastForwardButton = document.getElementById("fastForward");
    var rewindButton = document.getElementById("rewind");
    var nextSong = document.getElementById("nextSong");
    var previousSong = document.getElementById("previousSong");
    let recent_volume = document.querySelector('#volume');
    let volume_show = document.querySelector('#volume_show')
    let muteButton = document.querySelector('#muteButton')

    volume_show.innerHTML = recent_volume.value+'%';

    var wavesurfer = WaveSurfer.create({
    container: "#modern-black-waveform",

    plugins: [
        WaveSurfer.cursor.create({
            showTime: false,
            opacity: 1,
            customShowTimeStyle: {
                "background-color": "#fff",
                color: "#fff",
                padding: "2px",
                "font-size": "10px"
            }
        })
    ],


    waveColor: "#ffd454",
    progressColor: "#fff",
    barWidth: 1.2,
    height: 60,
    responsive: true,
    hideScrollbar: false,
    pixelRatio: window.devicePixelRatio || screen.deviceXDPI / screen.logicalXDPI,
    barRadius: 1,
    barGap: 2
});

    let links = document.querySelectorAll(".playlist-item-wrap .playlist-title-wrap");
    wavesurfer.setVolume(0.5);

    let currentTrack = 0;

    // Load a track by index and highlight the corresponding link
    let setCurrentSong = function(index) {
    
     currentTrack = index;

    if(currentTrack < 0 ) {
        currentTrack = songs.length - 1;
    }

       links[currentTrack].classList.add("modern_playlist_active");

        jQuery('#song_img').attr('src', songs[currentTrack].trackImg);
        jQuery('#author_song_name').text( songs[currentTrack].artistName + ' - ' + songs[currentTrack].songName);

        playButton.style.display = "block";
        pauseButton.style.display = "none";

        wavesurfer.load(links[currentTrack].href);

        //wavesurfer.play();

    };


      // Load the track on click
    Array.prototype.forEach.call(links, function(link, index) {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            jQuery(".playlist-title-wrap").removeClass("modern_playlist_active");

            setCurrentSong(index);
        });
    });

      nextSong.onclick = function(){
         links[currentTrack].classList.remove("modern_playlist_active");
        setCurrentSong((currentTrack + 1) % links.length);
    };

    previousSong.onclick = function(){
         links[currentTrack].classList.remove("modern_playlist_active");
        setCurrentSong((currentTrack - 1) % links.length);
    };

    setCurrentSong(currentTrack);

    wavesurfer.on("ready", function () {

     var totalTime = wavesurfer.getDuration(),
            currentTime = wavesurfer.getCurrentTime(),
            remainingTime = totalTime - currentTime;

        document.getElementById("totalTime").innerText = fancyTimeFormat(totalTime);
        document.getElementById("currentTime").innerText = fancyTimeFormat(currentTime);

        if(autoplay){
            wavesurfer.play();
        }
        
});

     // Go to the next track on finish
    wavesurfer.on("finish", function() {
        jQuery(".playlist-title-wrap").removeClass("modern_playlist_active");
        setCurrentSong((currentTrack + 1) % links.length);
    });


    playButton.onclick = function(){
    playButton.style.display = "none";
    pauseButton.style.display = "block";

    wavesurfer.play();
}

pauseButton.onclick = function(){
    playButton.style.display = "block";
    pauseButton.style.display = "none";

    wavesurfer.pause();
}


recent_volume.onchange = function () {
     volume_show.innerHTML = recent_volume.value+'%';
      wavesurfer.setVolume(recent_volume.value / 100);
}

 volumeButton.onclick = function(){
    wavesurfer.toggleMute();
    volumeButton.style.display = 'none';
    muteButton.style.display = 'block';
    volume_show.innerHTML = 0+'%';
    wavesurfer.setVolume(0);
}

muteButton.onclick = function() {
     wavesurfer.toggleMute();
    volumeButton.style.display = 'block';
    muteButton.style.display = 'none';
    volume_show.innerHTML = recent_volume.value+'%';
    wavesurfer.setVolume(recent_volume.value/100);
}

fastForwardButton.onclick = function(){
        var totalTime = wavesurfer.getDuration(),
        currentTime = wavesurfer.getCurrentTime(),
        remainingTime = totalTime - currentTime;

        currentTime += 5;
        document.getElementById("currentTime").innerText = fancyTimeFormat(currentTime);
        wavesurfer.setCurrentTime(currentTime);
   
}

rewindButton.onclick = function(){
        var totalTime = wavesurfer.getDuration(),
        currentTime = wavesurfer.getCurrentTime(),
        remainingTime = totalTime - currentTime;

        currentTime -= 5;
        if(currentTime <= 0) currentTime = 0;
        document.getElementById("currentTime").innerText = fancyTimeFormat(currentTime);

        wavesurfer.setCurrentTime(currentTime);
   }

wavesurfer.on("audioprocess", function() {
  if (wavesurfer.isPlaying()) {
    var totalTime = wavesurfer.getDuration(),
        currentTime = wavesurfer.getCurrentTime(),
        remainingTime = totalTime - currentTime;

    var cursorId = document.getElementById("cursorId");
    var style;
    var moveDiv = true;

    document.getElementById("totalTime").innerText = fancyTimeFormat(totalTime);
    document.getElementById("currentTime").innerText = fancyTimeFormat(currentTime);
    var divTimeCurrent = document.getElementById("currentTime")
    var divTimeCurrentStyle = window.getComputedStyle(divTimeCurrent);
    var divTimeCurrentWidth = divTimeCurrentStyle.getPropertyValue("width");    

    var cursorIdStyle = window.getComputedStyle(cursorId);
    var cursorIdWidth = cursorIdStyle.getPropertyValue("width");    

     var firstChild = cursorId.firstElementChild;
       style = window.getComputedStyle(firstChild)
       width = style.getPropertyValue("width");

    if(moveDiv) {
        document.getElementById("currentTime").style.left = width;
    }
            
    if(moveDiv && parseInt(width) + parseInt(divTimeCurrentWidth) >= parseInt(cursorIdWidth))  {
        document.getElementById("currentTime").style.left = parseInt(cursorIdWidth) - parseInt(divTimeCurrentWidth)-12 + "px" ;
        }
    }
 
});   




}



function applyPlayerSettings(response) {

    console.log('SES',response.result.player[0]);

    if(response.result.player[0].aw_player_stop == "1") jQuery( "#stopButton" ).addClass('hide');
    if(response.result.player[0].aw_player_volume_button == "1") jQuery( "#volumeWrap" ).addClass('hide');
    if(response.result.player[0].aw_player_rewind == "0") jQuery( "#rewind" ).addClass('hide');
    if(response.result.player[0].aw_player_fast_forward == "0") jQuery( "#fastForward" ).addClass('hide');
    if(response.result.player[0].aw_player_progressbar == "1") jQuery( "#cursorId" ).css('display', 'inline-grid');

    if(response.result.player[0].aw_player_sticky == "1") jQuery( ".hero" ).addClass('sticky');

    if(response.result.player[0].aw_player_download_button == "1") jQuery( ".downloadSong" ).hide();
    if(response.result.player[0].aw_player_current_time == "1") jQuery( "#currentTime" ).hide();
    if(response.result.player[0].aw_player_duration == "1") jQuery( "#totalTime" ).hide();

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
        const audioContext = new (window.AudioContext || window.webkitAudioContext)()
        const request = new XMLHttpRequest()
        request.open('GET', mp3file, true)
        request.responseType = 'arraybuffer'
        request.onload = function() {
            audioContext.decodeAudioData(request.response,
                function(buffer) {
                    let duration = buffer.duration
                 
                   // console.log('dur',duration);
                    return duration;
                    //document.write(duration)
                    }
                )
            }
          request.send()
   
  }



//https://www.youtube.com/watch?v=7UZbS-NBiD8&t=103s



