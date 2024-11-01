const musicContainer = document.querySelector('.music-container')
const playBtn = document.querySelector('#play')
const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
const audio = document.querySelector('#audio')
const progress = document.querySelector('.progress')
const progressContainer = document.querySelector('.progress-container')
const title = document.querySelector('#title')
const cover = document.querySelector('#cover')
const volumeBtn = document.querySelector('#volume')

const currTimeDiv = document.getElementById('currentTime');
const durationDiv = document.getElementById('duration');
const mainWrapper  = document.querySelector('.main-wrapper ')

//const songs = ['hey', 'summer', 'ukulele'];

//Keep track of songs

let songIndex = 0;

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
    console.log("songs:", songs);
    

  //  player_autoplay = response.result.player[0].aw_player_autoplay;

	createPlayer(songs);
  }  //success

   }); //ajax

 		

   }); //dom ready
//Song Titles



function createPlayer(songs) {

//Initialy load song info DOM

loadSong(songs[songIndex]);

//Update song Details

function loadSong(song){

	console.log('song', song);

	title.innerText = song.artistName + ' - ' + song.songName;
	audio.src = song.song_url;
	cover.src = song.trackImg;

}

function playSong() {
	musicContainer.classList.add('play');
	playBtn.querySelector('i.fas').classList.remove('fa-play')
	playBtn.querySelector('i.fas').classList.add('fa-pause')

	audio.play();

}

function pauseSong(){
	musicContainer.classList.remove('play');
	playBtn.querySelector('i.fas').classList.add('fa-play')
	playBtn.querySelector('i.fas').classList.remove('fa-pause')

	audio.pause();
}


function prevSong(){

	songIndex--;

	if( songIndex < 0 ) {
		songIndex = songs.length - 1;
	}

	loadSong(songs[songIndex]);

	playSong();
}

function nextSong(){

	songIndex++;

	if( songIndex > songs.length - 1 ) {
		songIndex = 0;
	}

	loadSong(songs[songIndex]);

	playSong();

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

function muteSong(){
	volumeBtn.querySelector('i.fas').classList.remove('fa-volume-up')
	volumeBtn.querySelector('i.fas').classList.add('fa-volume-mute')
	volumeBtn.classList.remove('playing');
	audio.volume = 0;
}

function unmuteSong() {
	volumeBtn.querySelector('i.fas').classList.remove('fa-volume-mute')
	volumeBtn.querySelector('i.fas').classList.add('fa-volume-up')
	volumeBtn.classList.add('playing');
	audio.volume = 1;
}


//Event listeners
playBtn.addEventListener('click', () => {
	const isPlaying = musicContainer.classList.contains('play')

	if(isPlaying) {
	   pauseSong()
	}else{
	   playSong()
	}
})

volumeBtn.addEventListener('click', () => {

	let isMuted = volumeBtn.classList.contains('playing');

	if(isMuted) {

		muteSong();
	}else{
		unmuteSong();
	}

})

//Change song Events

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

audio.addEventListener('timeupdate', updateProgress);

progressContainer.addEventListener('click', setProgress);

audio.addEventListener('ended', nextSong);

} //createPlayer

document.addEventListener("DOMContentLoaded", (event) => {
 mainWrapper.classList.add('slide');
});


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
