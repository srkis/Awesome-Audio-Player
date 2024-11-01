
let songIndex = 0;

const musicContainer = document.querySelector('.player-wrapper')
const audio = document.querySelector('#audio')
const songTitle = document.querySelector('#songTitle')
const songArtist = document.querySelector('#songArtist')
const thumbImg = document.querySelector('#thumbImg');
const play = document.querySelector("#play")
const playBtn = document.querySelector(".playBtn")
//const exPlay = document.querySelector("#exPlay")

const repeatBtn = document.getElementById("repeatBtn")
const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
const progress = document.querySelector('.progress')
const progressContainer = document.querySelector('.seekbar')
const currTimeDiv = document.getElementById('currentTime');
const durationDiv = document.getElementById('duration');
const volumeBtn = document.querySelector('#volume')
const volumeSlider = document.getElementById("volumeSlider");
const volume_show = document.getElementById("volumeShow");
const playlistBtn = document.getElementById("playlistBtn");
const playlistHolder = document.getElementById("playlist-holder");
const playerToggle = document.getElementById("playerToggle");

 const buttons = document.getElementsByClassName('playBtn');

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
      var css_class;

    var songs = JSON.parse(response.result.playlist[0].aw_playlist);
    var song_artist_name = songs[0].artistName + ' - ' + songs[0].songName;
    console.log("player:", response.result.player);

    $("#thumbImg").attr('src', songs[0].trackImg);
    $('#songTitle').text( song_artist_name);
    $('#songArtist').text( songs[0].artistName);


     for(var i = 0; i < songs.length; i++ ){ 

   //   css_class = i == 0 ? "active-song" : "";

      html += '<div class="slide">'+
            '<img src="'+songs[i].trackImg+'" alt="">'+
             '<div class="slide-song-info"></div>'+
             '<div class="slide-song-title">'+songs[i].songName+'</div>'+
             '<div class="slide-song-artist">'+songs[i].artistName+'</div>'+
            '</div>';

         }

      html = html.replace("undefined", ""); 
      $("#slider-container").append(html);     
    
  //  player_autoplay = response.result.player[0].aw_player_autoplay;

      createPlayer(songs);
  }  //success

   }); //ajax

            

   }); //dom ready
//Song Titles


function createPlayer(songs) {

   let links = document.querySelectorAll(".slide");
   let currentTrack = 0;
   let loop = 0;

   audio.onloadedmetadata = function() {
      duration.innerText = formatSecondsAsTime(audio.duration);
            
      };


  loadSong(songs[songIndex]);


  function loadSong(song) {

    currentTrack = songIndex;

    if(currentTrack < 0 ) {
        currentTrack = songs.length - 1;
    }

    
    links[currentTrack].classList.add("active-song");

    audio.src = song.song_url;

    songTitle.innerText = song.songName;
    songArtist.innerText = song.artistName;
    thumbImg.src = song.trackImg;

  }


function playSong() {
    
  musicContainer.classList.add('play');
  play.querySelector('i.fas').classList.remove('fa-play')
  play.querySelector('i.fas').classList.add('fa-pause')

  playBtn.querySelector('i.fas').classList.remove('fa-play')
  playBtn.querySelector('i.fas').classList.add('fa-pause')
  audio.play();

}



function pauseSong(){
 
  musicContainer.classList.remove('play');
  play.querySelector('i.fas').classList.add('fa-play')
  play.querySelector('i.fas').classList.remove('fa-pause')

  playBtn.querySelector('i.fas').classList.add('fa-play')
  playBtn.querySelector('i.fas').classList.remove('fa-pause')
  audio.pause();
}

function muteSong() {
      volumeBtn.querySelector('i.fas').classList.remove('fa-volume-up');
      volumeBtn.querySelector('i.fas').classList.add('fa-volume-mute');

      audio.volume = 0;
      volume.value = 0;
      volume_show.innerHTML = 0;
      volumeSlider.value = 0;
}

function unmuteSong() {
      volumeBtn.querySelector('i.fas').classList.add('fa-volume-up');
      volumeBtn.querySelector('i.fas').classList.remove('fa-volume-mute');

      audio.volume = 0.7;
      volume.value = 0.7;
      volume_show.innerHTML = 70+'%';
      volumeSlider.value = 70;  
}


function showPlayList() {

      if(jQuery(".player-ex-controls").hasClass("ex-controls-shown")) {
          jQuery(".player-ex-controls").removeClass("ex-controls-shown");

       }else {

        jQuery(".player-ex-controls").addClass("ex-controls-shown");
      }


      if(jQuery(".control-prev-btn").hasClass("ex-control-btn")) {
          jQuery(".control-prev-btn").removeClass("ex-control-btn");
       }else{
         jQuery(".control-prev-btn").addClass("ex-control-btn");
      }

      if(jQuery(".control-next-btn").hasClass("ex-control-btn")) {
          jQuery(".control-next-btn").removeClass("ex-control-btn");
       }else{
         jQuery(".control-next-btn").addClass("ex-control-btn");
      }


      

      if(jQuery(".playlist-holder").hasClass("playlist-hide")) {
          jQuery(".playlist-holder").removeClass("playlist-hide");
       }else{
         jQuery(".playlist-holder").addClass("playlist-hide");
      }

}


function showPlayer() {

      if(jQuery(".player-holder").hasClass("player-hide")) {
          jQuery(".player-holder").removeClass("player-hide");
       }else{
         jQuery(".player-holder").addClass("player-hide");
      }

        if(jQuery('.player-ex-controls').hasClass("ex-controls-toggle")) {
          jQuery('.player-ex-controls').removeClass("ex-controls-toggle");
         
       }else{
         jQuery('.player-ex-controls').addClass("ex-controls-toggle");

      } 


}


function prevSong(){

  links[songIndex].classList.remove("active-song");

  songIndex--;

  if( songIndex < 0 ) {
    songIndex = songs.length - 1;
  }

   jQuery('#song_bottom_name').text( songs[songIndex].songName);
   jQuery('#artist_bottom_name').text( songs[songIndex].artistName);
   jQuery('#song_bottom_img').attr('src', songs[songIndex].trackImg);

  loadSong(songs[songIndex]);

  playSong();
}

function nextSong(){

  if(repeatBtn.className.includes('mystyle')){
       console.log('songIndex',songIndex);
       console.log('loop',loop);
       loadSong(songs[songIndex]);
       playSong();
   }


if (loop == 0) {
  links[songIndex].classList.remove("active-song");

  songIndex++;

  if( songIndex > songs.length - 1 ) {
    songIndex = 0;
  }

  songTitle.innerText = songs[songIndex].songName;
  songArtist.innerText = songs[songIndex].artistName;
  thumbImg.src = songs[songIndex].trackImg;

  loadSong(songs[songIndex]);
  playSong();
 }

}


function updateProgress(e){
  const {duration, currentTime} = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;

   var currTime = Math.floor(currentTime).toString(); 
   var songDuration = Math.floor(duration).toString();

   currTimeDiv.innerText = formatSecondsAsTime(currTime);

  if (isNaN(songDuration)){
      durationDiv.innerText = '00:00';
    } 
  else{
    durationDiv.innerText = formatSecondsAsTime(songDuration);
  }
}


function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width ) * duration;
}


function formatSecondsAsTime(secs, format) {
  var hr  = Math.floor(secs / 3600);
  var min = Math.floor((secs - (hr * 3600))/60);
  var sec = Math.floor(secs - (hr * 3600) -  (min * 60));

  if (min < 10){ 
    min = "0" + min; 
  }
  if (sec < 10){ 
    sec  = "0" + sec;
  }

  return min + ':' + sec;
}



     
       
      
      for(var i = 0; i < buttons.length; i++){
          buttons[i].addEventListener("click", function(){ 
            const isPlaying = musicContainer.classList.contains('play')
              if(isPlaying) {
           pauseSong()
        }else{
           playSong()
        }

       })
    }

    //Event listeners
    // playBtn.addEventListener('click', () => {
    //   console.log("opsa");
    //   const isPlaying = musicContainer.classList.contains('play')
    //     if(isPlaying) {
    //        pauseSong()
    //     }else{
    //        playSong()
    //     }
    // });


    playlistBtn.addEventListener('click', showPlayList);
    playerToggle.addEventListener('click', showPlayer);
    prevBtn.addEventListener('click', prevSong);
    nextBtn.addEventListener('click', nextSong);
    audio.addEventListener('timeupdate', updateProgress);
    progressContainer.addEventListener('click', setProgress);
    audio.addEventListener('ended', nextSong);


  repeatBtn.onclick = function() {

    repeatBtn.classList.toggle("mystyle");

    if (loop == 1) {
      loop = 0;
      jQuery("#materialRepeat").css("color", "#333")
    } else {
      loop = 1;
      jQuery("#materialRepeat").css("color", "#ff7e00")
    }
}


volumeBtn.addEventListener('click', () => {

      var isMuted = volumeSlider.value == '0' ? true : false;

       if(isMuted) {
          unmuteSong()
          
        }else{
          muteSong()
        } 
})

volumeSlider.onchange = function () {
        volume_show.style.display = "flex"; 
        volume_show.style.visibility = "visible";
        volume_show.style.opacity = 1;
        volume_show.innerHTML = volumeSlider.value+'%';
        audio.volume = volumeSlider.value / 100;
}

  //   volumeBtn.onclick = function() {
  //   audio.volume = 0.7;
  //   volume.value = 0.7;
  //   volume_show.innerHTML = 70+'%';
  //   volumeSlider.value = 70;  
  // }


   Array.prototype.forEach.call(links, function(link, index) {
        link.addEventListener("click", function(e) {
            e.preventDefault();    

             loadSong(songs[index]);
             jQuery(".slide").removeClass("active-song");

              link.classList.add('active-song');

             playSong();
        });
    });





} // createPlayer


function prev(){
      document.getElementById('slider-container').scrollLeft -= 270;
}

function next()
{
      document.getElementById('slider-container').scrollLeft += 270;
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

      return baseLocalUrl + "/";
    }
    else {

      return baseURL + "/";
      }
}
