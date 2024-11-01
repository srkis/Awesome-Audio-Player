const musicContainer = document.querySelector('.wrapper')
const playBtn = document.querySelector('#play')
const prevBtn = document.querySelector('#pre')
const nextBtn = document.querySelector('#next')
const audio = document.querySelector('#audio')
const progress = document.querySelector('.progress-level')
const progressContainer = document.querySelector('.seekbar')
const title = document.querySelector('#songTitle')
const playerThumb = document.querySelector('#playerThumb')
const volumeBtn = document.querySelector('#volumeBtn')
let volumeBtnDiv = document.querySelector("#volume_wrapper");
let volumeBar = document.querySelector('#volumeBar');
let fastForwardButton = document.querySelector('#fastForward');
let rewindButton = document.querySelector('#fastBackward');


const currTimeDiv = document.getElementById('currentTime');
const durationDiv = document.getElementById('duration');
const volumeSlider = document.getElementById("volumeSlider");
const volume_show = document.getElementById("volumeShow");
const repeatBtn = document.getElementById("repeatBtn");
const mute_sound = document.getElementById("volumeBtn");
const volumeLevel = document.getElementById("volumeLevel");


const content  = document.querySelector('.vertical-playlist ');
const lyricsDiv = document.querySelector(".lyrics");
let seekTime;

let songIndex = 0;
let song_index = 0;

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
    console.log("result:",response.result);

   seekTime = response.result.player[0].aw_player_seek_time;

    $('#playerThumb').css("background-image", "url("+songs[0].trackImg+")");  
    $('#artistName').text( songs[0].artistName);
    $('#songTitle').text( songs[0].songName);
  
    $('#song_bottom_img').attr('src', songs[0].trackImg);
    
    $('#song_bottom_name').text( songs[0].songName);
    $('#artist_bottom_name').text( songs[0].artistName);
    $('#songTitleActive').text( songs[0].songName);


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


           css_class = i == 0 ? "active-song" : "";
      html += '<div class="playlist-item">'+
                  '<div class="playlist-item-content">'+
                    '<div class="playlist-thumb">'+
                    '<img class="thumbimg visible" src="'+songs[i].trackImg+'" alt="Korin - Last Stone">'+
                    '</div>'+

                    '<div class="playlist-info">'+
                      '<div class="playlist-title-wrap  ">'+
                      '<p class="playlist-title">'+songs[i].artistName+' - </p>'+
                      '<p class="playlist-artist">&nbsp; '+songs[i].songName+'</p>'+

                      '</div>'+
                     
                    '</div>'+
                       '<span>'+purchase+'</span>'+
                '</div>';

        j++;
            
    }


    html = html.replace("undefined", ""); 


    $("#playlist").append(html);   


  createPlayer(songs);
  applyPlayerSettings(response)
  }  //success

   }); //ajax


});  //DOM ready


function createPlayer(songs) {

  let links = document.querySelectorAll(".playlist-title-wrap");
  //let links = document.querySelectorAll(".playlist-title-wrap");

  loadSong(songIndex);

  function loadSong(song_index) {

    currentTrack = songIndex;

    if(currentTrack < 0 ) {
        currentTrack = songs.length - 1;
    }

   links[song_index].classList.add("active-song");

   title.innerText = songs[song_index].songName;
   jQuery('#artistName').text( songs[song_index].artistName);
   audio.src = songs[song_index].song_url;
   playerThumb.style.backgroundImage = 'url('+songs[song_index].trackImg+' )';
    
   main(songs[song_index]);

  }

  function playSong() {
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fa').classList.remove('fa-play')
    playBtn.querySelector('i.fa').classList.add('fa-pause')

    audio.play();

}

function prevSong() {
links[songIndex].classList.remove("active-song");
    console.log('prev',links[song_index]);

  songIndex--;

  if( songIndex < 0 ) {
    songIndex = songs.length - 1;
  }

  loadSong(songIndex);
    links[songIndex].classList.add("active-song");
    lyricsDiv.innerHTML = "";
    playSong();
}

function nextSong(){

  links[songIndex].classList.remove("active-song");
  songIndex++;

  if( songIndex > songs.length - 1 ) {
    songIndex = 0;
  }

  loadSong(songIndex);
    links[songIndex].classList.add("active-song");
    lyricsDiv.innerHTML = "";
  playSong();

}

function pauseSong(){
  musicContainer.classList.remove('play');
  playBtn.querySelector('i.fa').classList.add('fa-play')
  playBtn.querySelector('i.fa').classList.remove('fa-pause')

  audio.pause();
}

playBtn.addEventListener('click', () => {
  const isPlaying = musicContainer.classList.contains('play')

  if(isPlaying) {
     pauseSong()
  }else{
     playSong()
  }
})

 mute_sound.onclick = function() {
      if( volumeBar.value > 0 ) {
          audio.volume = 0;
          volumeBar.value = 0;
          volumeLevel.style.width = 0+"%";
          volumeBtnDiv.querySelector('i.fa').classList.remove('fa-volume-up')
          volumeBtnDiv.querySelector('i.fa').classList.add('fa-volume-off')

      } else{
        audio.volume = 0.7;
        volumeBar.value = 70;
        volumeLevel.style.width = 70+"%";
        volumeBtnDiv.querySelector('i.fa').classList.add('fa-volume-up')
        volumeBtnDiv.querySelector('i.fa').classList.remove('fa-volume-off')
      } 
  }

volumeBar.onchange = function () {
  volumeLevel.style.width = volumeBar.value+'%';
      // volume_show.style.display = "flex"; 
      // volume_show.style.visibility = "visible";
      // volume_show.style.opacity = 1;
      // volume_show.innerHTML = volumeBar.value+'%';
      audio.volume = volumeBar.value / 100;
}

fastForwardButton.onclick = function(){
        var totalTime = audio.duration,
        currTime = audio.currentTime,
        remainingTime = totalTime - currTime;

        currTime += parseInt(seekTime);
        document.getElementById("currentTime").innerText = formatSecondsAsTime(currTime);
        audio.currentTime = currTime;
   
}

rewindButton.onclick = function(){
        var totalTime = audio.currentTime,
         currTime = audio.currentTime,
         remainingTime = totalTime - currentTime;

        currTime -= parseInt(seekTime)
        if(currTime <= 0) currTime = 0;
        document.getElementById("currentTime").innerText = formatSecondsAsTime(currTime);
        audio.currentTime = currTime;
   }

 // Load the track on click
    Array.prototype.forEach.call(links, function(link, index) {
        link.addEventListener("click", function(e) {
            e.preventDefault();    
                
           jQuery(".playlist-title-wrap").removeClass("active-song");

             lyricsDiv.innerHTML = "";
             song_index = index;
             songIndex = index;
             loadSong(song_index);
             let x = document.getElementsByClassName("active-song");
              // If it exists, remove it.
              if(x.length > 0) { x[0].classList.remove("active-song"); }

              link.classList.add('active-song');
              playSong();
        });
    });


  prevBtn.addEventListener('click', prevSong);
  nextBtn.addEventListener('click', nextSong);


function main(song) {
    "use strict";
  const BASE_URL = getBaseURL();

  // load lrc file
    fetch(song.lyrics_url)
    .then(res => res.text())
    .then(lrc => parseLyric(lrc))
    .then(lyrics => audio.ontimeupdate = () => {
    const time = audio.currentTime;
    const index = syncLyric(lyrics, time);

    if (index == null) return;
        lyricsDiv.innerHTML = lyrics[index].text;
    })
      //console.log('Checkout this text! ', lrc))
    .catch(err => { throw err });
}

 
// lrc (String) - lrc file text
function parseLyric(lrc) {
  // will match "[00:00.00] ooooh yeah!"
  // note: i use named capturing group
  const regex = /^\[(?<time>\d{2}:\d{2}(.\d{2})?)\](?<text>.*)/;

  // split lrc string to individual lines
  const lines = lrc.split("\n");

  const output = [];

  lines.forEach(line => {
    const matches = line.match(regex);

    // if doesn't match, return.
    if (matches == null) return;
    const { time, text } = matches.groups;
    output.push({
      time: parseTime(time),
      text: text.trim() });

  });

  // parse formated time
  // "03:24.73" => 204.73 (total time in seconds)
  function parseTime(time) {
    const minsec = time.split(":");

    const min = parseInt(minsec[0]) * 60;
    const sec = parseFloat(minsec[1]);

    return min + sec;
  }

  return output;
}

// lyrics (Array) - output from parseLyric function
// time (Number) - current time from audio player
function syncLyric(lyrics, time) {
  const scores = [];

  lyrics.forEach(lyric => {
    // get the gap or distance or we call it score
    const score = time - lyric.time;

    // we don't want a negative score
    if (score >= 0) scores.push(score);
  });

  if (scores.length == 0) return null;

  // get the smallest value from scores
  const closest = Math.min(...scores);

  // return the index of closest lyric
  return scores.indexOf(closest);
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


audio.addEventListener('timeupdate', updateProgress);
progressContainer.addEventListener('click', setProgress);


}  // createPlayer



 jQuery('#togglePlaylist').click(function() {
   //  $('.box').slideToggle("fast");

     var hint = document.getElementById('playlist_holder');
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


 function applyPlayerSettings(response) {

    //console.log('SES',response.result.player[0]);

    if(response.result.player[0].aw_player_stop == "1") jQuery( "#stopButton" ).addClass('hide');
    if(response.result.player[0].aw_player_volume_button == "1") jQuery( "#volumeButton" ).addClass('hide');
    if(response.result.player[0].aw_player_rewind == "0") jQuery( "#fastBackward" ).addClass('hide');
    if(response.result.player[0].aw_player_fast_forward == "0") jQuery( "#fastForward" ).addClass('hide');
    if(response.result.player[0].aw_player_progressbar == "1") jQuery( "#cursorId" ).css('display', 'inline-grid');

    if(response.result.player[0].aw_player_download_button == "1") jQuery( ".downloadSong" ).hide();
    if(response.result.player[0].aw_player_current_time == "1") jQuery( "#time-current" ).hide();
    if(response.result.player[0].aw_player_duration == "1") jQuery( "#time-total" ).hide();

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


/*
  !async function main() {
    "use strict";
  const BASE_URL = getBaseURL();

console.log(songs);

  // load lrc file
 // const res = await fetch(BASE_URL + "acdc-thunderstrike.lrc");
  const res = await fetch(songs[songIndex].lyrics_url );
  const lrc = await res.text();

  const lyrics = parseLyric(lrc);
 
  audio.ontimeupdate = () => {
    const time = audio.currentTime;
    const index = syncLyric(lyrics, time);

    if (index == null) return;

    lyricsDiv.innerHTML = lyrics[index].text;
  };


}();
*/