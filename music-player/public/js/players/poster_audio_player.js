let track = document.querySelector('#audio')
let Playing_song = false;
let player_autoplay;
let songDuration;
let song_index = 0;

let mainDiv;

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

    let songs = JSON.parse(response.result.playlist[0].aw_playlist);
    var song_artist_name = songs[0].artistName + ' - ' + songs[0].songName;
    console.log("player:", response.result.player);

    player_autoplay = response.result.player[0].aw_player_autoplay;

    document.getElementById("main").style.backgroundImage = "url(" + songs[0].trackImg + ")";

    createPlayer(songs);


   }
 }); 


}); //Document ready


 function createPlayer(songs) {


	let previous = document.querySelector('#pre');
	let play = document.querySelector('#play');
	let next = document.querySelector('#next');
	let title = document.querySelector('#title');
	let recent_volume = document.querySelector('#volumeSlider');
	let volume_show = document.querySelector('#volume_show');
	let progress = document.querySelector('.progress-level')
	let progressContainer = document.querySelector('.seekbar')
	let track_image = document.querySelector('#track_image');
	let thumbnail_image = document.querySelectorAll(".image_gallery .thumbnail img");
	let auto_play = document.querySelector('#auto');
	let present = document.querySelector('#present');
	let total = document.querySelector('#total');
	let artist = document.querySelector('#artist');
	let mute_sound = document.querySelector("#volume");
	let currTimeDiv = document.getElementById('currentTime');
    let durationDiv = document.getElementById('duration');
	mainDiv = document.getElementById('main');
	
	let timer;
	let loop = 0;
	let index_no = 0;


// function load the track
function load_track(index_no) {

	track.src = songs[index_no].song_url;
	title.innerHTML = songs[index_no].songName;
	//track_image.src = songs[index_no].trackImg;
	artist.innerHTML = songs[index_no].artistName;
	track.load();

	//timer = setInterval(range_slider, 300);

	//total.innerHTML = songs.length;
	//present.innerHTML = index_no + 1;

	//playsong();
  
  }


  function updateProgress(e){
    const {duration, currentTime} = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    console.log(progressPercent);
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
  const duration = track.duration;

  track.currentTime = (clickX / width ) * duration;
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


    track.addEventListener('timeupdate', updateProgress);
    progressContainer.addEventListener('click', setProgress);

	track.onloadedmetadata = function() {
  		songDuration = track.duration;
  		
	};

	//mute sound function
	mute_sound.onclick = function() {
		track.volume = 0;
		recent_volume.value = 0;
	}


	track.onended = function(event) {

		if (index_no < songs.length - 1) {
			index_no += 1;
			 document.getElementById("main").style.backgroundImage = "url(" + songs[index_no].trackImg + ")";
			load_track(index_no);

			playsong();
		} else {
			index_no = 0;
			 document.getElementById("main").style.backgroundImage = "url(" + songs[index_no].trackImg + ")";
			load_track(index_no);
			playsong();
		}
    };



	// checking.. the song is playing or not
   play.onclick = function(){

   	if (Playing_song == false) {
		playsong();
	}else{
		pausesong();
	}
 }


next.onclick = function() {

	if (index_no < songs.length - 1) {
		index_no += 1;
		 document.getElementById("main").style.backgroundImage = "url(" + songs[index_no].trackImg + ")";
		load_track(index_no);

		playsong();
	} else {
		index_no = 0;
		document.getElementById("main").style.backgroundImage = "url(" + songs[index_no].trackImg + ")";
		load_track(index_no);
		playsong();

	}
}


pre.onclick = function() {

	
     if(index_no <= 0) {
	 	index_no = songs.length - 1;
	 	//index_no -= 1;
	 	document.getElementById("main").style.backgroundImage = "url(" + songs[index_no].trackImg + ")";
	 	load_track(index_no);
	 	playsong();
	 }else{

	 	  index_no -= 1;
	 	  document.getElementById("main").style.backgroundImage = "url(" + songs[index_no].trackImg + ")";
	 	load_track(index_no);
	 	playsong();
	 }

}

recent_volume.onchange = function () {
	  track.volume = recent_volume.value / 100;
}


// track.addEventListener('playing', playingSong);

// play song
function playsong() {
	track.play();
	Playing_song = true;
	play.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
}

//pause song
function pausesong() {

	track.pause();
	Playing_song = false;
	play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
}

	//Page load play song
if (player_autoplay == 1) {
   load_track(index_no);
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