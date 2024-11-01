const musicContainer = document.querySelector('.music-app')
const playBtn = document.querySelector('#playBtn')
const playBtnActive = document.querySelector('#playBtnActive')
const prevBtn = document.querySelector('#prevBtn')
const prevBtnActive = document.querySelector('#prevBtnActive')
const nextBtn = document.querySelector('#nextBtn')
const nextBtnActive = document.querySelector('#nextBtnActive')
const audio = document.querySelector('#audio')
const progress = document.querySelector('.progress')
const progress_active = document.querySelector('.progress-active')
const progressContainer = document.querySelector('.progress-container')
const progressContainerActive = document.querySelector('.progress-container-active')
const title = document.querySelector('#songTitle')
const cover = document.querySelector('#song_img')
const volumeBtn = document.querySelector('#volume')

const currTimeDiv = document.getElementById('currentTime');
const durationDiv = document.getElementById('duration');
const currentTimeActive = document.getElementById("currentTimeActive");
const durationActive = document.getElementById("durationActive");
const songTitleActive = document.getElementById("songTitleActive");
const artistNameActive = document.getElementById("artistNameActive");
const volumeSlider = document.getElementById("volumeSlider");
const volume_show = document.getElementById("volumeShow");
const repeatBtn = document.getElementById("repeatBtn");
const mute_sound = document.getElementById("muteBtn");

const content  = document.querySelector('.vertical-playlist ');




let songIndex = 0;

jQuery(document).ready(function($){ 


  jQuery('button.btn-extend').click(function(){
    jQuery('.player-screen').addClass("active");
  });
  jQuery('button.btn-close').click(function(){
   jQuery('.player-screen').removeClass("active");
  });


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
    
    $('#song_img').attr('src', songs[0].trackImg);
    $('#coverImgActive').attr('src', songs[0].trackImg);
    $('#song_bottom_img').attr('src', songs[0].trackImg);
    $('#songTitle').text( song_artist_name);
    $('#song_bottom_name').text( songs[0].songName);
    $('#artist_bottom_name').text( songs[0].artistName);
    $('#songTitleActive').text( songs[0].songName);
    $('#artistNameActive').text( songs[0].artistName);
  //  player_autoplay = response.result.player[0].aw_player_autoplay;


    css_class = i == 0 ? "current-image" : "";

        for(var i = 0; i < songs.length; i++ ){ 

      css_class = i == 0 ? "current-image" : "";

      html += '<li class="list-item">'+
        '<img class="list-item-image" src="'+songs[i].trackImg+'" alt="song">'+
        '<div class="list-item-info">'+
          '<div class="info-title">'+songs[i].songName+'</div>'+
          '<div class="info-subtitle">'+songs[i].artistName+'</div>'+
        '</div>'+
        '<button class="btn-add">'+
         '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus">'+
            '<path d="M12 5v14M5 12h14"/>'+
          '</svg>'+
        '</button>'+
      '</li>';

        }

    html = html.replace("undefined", ""); 
  
    $("#playlist").append(html);     



  createPlayer(songs);
  }  //success

   }); //ajax



});  //DOM ready


function createPlayer(songs) {

    let loop = 0;

    for(var i = 0; i < songs.length; i++){
      var imgClass = 'active';
      imgClass = (i == 0 ) ? '' : '';

        jQuery('#carouselImg').prepend('<img class="'+imgClass+'" id="songImg" src="'+songs[i].trackImg+'" />')
    }


    let links = document.querySelectorAll(".list-item");
    let currentTrack = 0;

    //Carousel 
  const carousel = [...document.querySelectorAll('.carousel img')];

  let carouselImageIndex = 0;

  const changeCarousel = () => {
    carousel[carouselImageIndex].classList.toggle('active');

    if(carouselImageIndex >= carousel.length - 1) {
      carouselImageIndex = 0;
    
    }else{

      carouselImageIndex++;
    }
  }


  setInterval(() => {
  changeCarousel();
  }, 3000);




  loadSong(songs[songIndex]);


  function loadSong(song) {

  
    currentTrack = songIndex;

    if(currentTrack < 0 ) {
        currentTrack = songs.length - 1;
    }

    
  links[currentTrack].classList.add("active-song");

  title.innerText = song.artistName + ' - ' + song.songName;
  audio.src = song.song_url;
  cover.src = song.trackImg;

  songTitleActive.innerText = song.songName;
  artistNameActive.innerText = song.artistName;
  coverImgActive.src = song.trackImg;

  }


function playSong() {
  musicContainer.classList.add('play');
  playBtn.querySelector('i.fas').classList.remove('fa-play')
  playBtn.querySelector('i.fas').classList.add('fa-pause')

  playBtnActive.querySelector('i.fas').classList.remove('fa-play')
  playBtnActive.querySelector('i.fas').classList.add('fa-pause')

  audio.play();

}



function pauseSong(){
  musicContainer.classList.remove('play');
  playBtn.querySelector('i.fas').classList.add('fa-play')
  playBtn.querySelector('i.fas').classList.remove('fa-pause')

  playBtnActive.querySelector('i.fas').classList.add('fa-play')
  playBtnActive.querySelector('i.fas').classList.remove('fa-pause')

  audio.pause();
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


   jQuery('#song_bottom_name').text( songs[songIndex].songName);
   jQuery('#artist_bottom_name').text( songs[songIndex].artistName);
   jQuery('#song_bottom_img').attr('src', songs[songIndex].trackImg);

  loadSong(songs[songIndex]);
  playSong();
}

}


function repeatSong() {
    loadSong(songs[songIndex]);

     playSong();
}


function updateProgress(e){
  const {duration, currentTime} = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
  progress_active.style.width = `${progressPercent}%`;

   var currTime = Math.floor(currentTime).toString(); 
   var songDuration = Math.floor(duration).toString();

   currTimeDiv.innerText = formatSecondsAsTime(currTime);
   currentTimeActive.innerText = formatSecondsAsTime(currTime);

  if (isNaN(songDuration)){
      durationDiv.innerText = '00:00';
      durationActive.innerText = '00:00';
    } 
  else{
    durationDiv.innerText = formatSecondsAsTime(songDuration);
    durationActive.innerText = formatSecondsAsTime(songDuration);
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


  repeatBtn.onclick = function() {

    repeatBtn.classList.toggle("mystyle");

    if (loop == 1) {
      loop = 0;
      jQuery("#materialRepeat").css("color", "#fff")
    } else {
      loop = 1;
      jQuery("#materialRepeat").css("color", "#6343e4")
    }
}



  //mute sound function
  mute_sound.onclick = function() {
    audio.volume = 0;
    volume.value = 0;
    volume_show.innerHTML = 0;
    volumeSlider.value = 0;
  }


    volumeBtn.onclick = function() {
    audio.volume = 0.7;
    volume.value = 0.7;
    volume_show.innerHTML = 70+'%';
    volumeSlider.value = 70;  
  }

  


// audio.onended = function() {

//     if(repeatBtn.className.includes('mystyle')){

//       console.log('songIndex',songIndex);
//       loadSong(songs[songIndex]);

//     }

//       //index_no +=1;   

//     if (songIndex < songs.length - 1) {
//       songIndex += 1;
//       loadSong(songs[songIndex]);

//       //playsong();
//     } else {
//       songIndex = 0;
//       loadSong(songs[songIndex]);
//       //playsong();
//     }
// };













    // function will run when the song is over
  // if (audio.ended) {
  //   console.log("ended");
  //   playBtn.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';

  //   if (loop == 1) {
  //     //index_no += 1;
  //     load_track(index_no);
  //     playsong();
  //   }
  // }



//Event listeners
playBtn.addEventListener('click', () => {
  const isPlaying = musicContainer.classList.contains('play')

  if(isPlaying) {
     pauseSong()
  }else{
     playSong()
  }
})


playBtnActive.addEventListener('click', () => {

  const isPlaying = musicContainer.classList.contains('play')

  if(isPlaying) {
     pauseSong()
  }else{
     playSong()
  }
})



   // Load the track on click
    Array.prototype.forEach.call(links, function(link, index) {
        link.addEventListener("click", function(e) {
            e.preventDefault();    
                    

            //  jQuery(this).addClass("active-song");
          

          //  jQuery(".list-item").addClass("active-song");

             loadSong(songs[index]);

             let x = document.getElementsByClassName("active-song");
              // If it exists, remove it.
              if(x.length > 0) { x[0].classList.remove("active-song"); }

              link.classList.add('active-song');

             playSong();
        });
    });

    prevBtn.addEventListener('click', prevSong);
    prevBtnActive.addEventListener('click', prevSong);
    nextBtn.addEventListener('click', nextSong);
    nextBtnActive.addEventListener('click', nextSong);
    audio.addEventListener('timeupdate', updateProgress);
    progressContainer.addEventListener('click', setProgress);
    progressContainerActive.addEventListener('click', setProgress);
    audio.addEventListener('ended', nextSong);

    volumeSlider.onchange = function () {
    volume_show.style.display = "flex"; 
    volume_show.style.visibility = "visible";
    volume_show.style.opacity = 1;
    volume_show.innerHTML = volumeSlider.value+'%';
    audio.volume = volumeSlider.value / 100;
}


document.getElementById('volumeSlider').addEventListener("mouseout", function(){ 
      volume_show.style.display = "";
      volume_show.style.visibility = "hidden";
      volume_show.style.opacity = 0;
  }); 


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
