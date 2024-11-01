let track = document.querySelector('#audio')
let Playing_song = false;
let player_autoplay;
let songDuration;
let song_index = 0;
let songs;
let volumeSlider = document.getElementById("volumeSlider");
let volumeBtn = document.getElementById("volumeBtn");
let currTimeDiv = document.getElementById('currentTime');
let durationDiv = document.getElementById('duration');

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

    songs = JSON.parse(response.result.playlist[0].aw_playlist);
    var song_artist_name = songs[0].artistName + ' - ' + songs[0].songName;

    player_autoplay = response.result.player[0].aw_player_autoplay;

    document.getElementById("leftSection").style.backgroundImage = "url(" +songs[0].trackImg+ ")";

       css_class = i == 0 ? "active-song" : "";

        for(var i = 0; i < songs.length; i++ ){ 

             switch( songs[i].purchaseDwnload ) {
                case "download_button": 
                    purchase = '<a class="playlist-icon download" href="'+songs[i].song_url+'" download="" title="Download" aria-label="Download"><svg width="15" height="15" fill="#999" viewBox="0 0 512 512"><path d="M288 32V0H224V32 274.7l-73.4-73.4L128 178.7 82.7 224l22.6 22.6 128 128L256 397.3l22.6-22.6 128-128L429.3 224 384 178.7l-22.6 22.6L288 274.7V32zM0 512H512V352H346.5l-45.3 45.3L256 442.5l-45.3-45.3L165.5 352H0V512zM432 408a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"></path></svg></a>';
                    break;

                case "purchase_button": 
                    purchase = '<a class="playlist-icon hap-link" href="https://www.amazon.com/s?k='+song_artist_name+'&i=digital-music" target="_blank" title="Purchase" aria-label="Purchase" rel="nofollow"><svg width="15" height="15" fill="#999" viewBox="0 0 576 512"><path d="M24 0H0V48H24 76.1l60.3 316.5 3.7 19.5H160 488h24V336H488 179.9l-9.1-48H496L576 32H122l-2.4-12.5L115.9 0H96 24zM176 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm336-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM316 180H256V140h60V80h40v60h60v40H356v60H316V180z"></path></svg></a>';
                    break;

                case "none": 
                    purchase = '';
                    break;

            } 

      css_class = i == 0 ? "active-song" : "";

      html += '<li class="list-item '+css_class+' " >'+
        '<div class="list-item-info">'+
          '<div class="info-title"><span class="playlist-number">'+ j +'. &nbsp;</span>'+songs[i].songName+'  &nbsp; -  &nbsp;</div>'+
          '<div class="info-subtitle">'+songs[i].artistName+'</div>'+
        '</div>'+
       
      '</li>'+
  '<span id="downloadBtn">'+purchase+'</span>';

      j++;

        }


    html = html.replace("undefined", ""); 


    $("#playlist").append(html);   
    //createPlayer(songs);

   jQuery('.js-audio').each(function (index, el) {
 		 initAudioPlayer(jQuery(this), index);
	});



   }
 }); 



     /*Search*/
 $("#search_song").keyup(function () {
  var filter = $(this).val().trim().toLowerCase();
  $('.list-item').each(function () {
    if ($(this).find("div").text().toLowerCase().includes(filter)) {
      $(this).show();
    } else {
      $(this).hide();
    }
  });
});



}); //Document ready








jQuery('.audio__slider').roundSlider({
  radius: 50,
  value: 0,
  startAngle: 90,
  width: 5,
  handleSize: '+6',
  handleShape: 'round',
  sliderType: 'min-range' 
});


jQuery('.audio__slider').on('drag, change', function (e) {
  let $this = jQuery(this);
  let $elem = $this.closest('.js-audio');
  updateAudio(e, $elem);
  $this.addClass('active');
});


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



function updateAudio(e, $elem) {
  let value = e.handle.value;
  var play = $elem.find('.play-pause'),
  circle = $elem.find('#seekbar'),

  getCircle = circle.get(0),
  totalLength = getCircle.getTotalLength(),
  currentTime = $elem.find('audio')[0].currentTime,
  maxduration = $elem.find('audio')[0].duration;
  var y = value * maxduration / 100;
  $elem.find('audio')[0].currentTime = y;

  currTimeDiv.innerText = formatSecondsAsTime(currentTime);

   if (isNaN(maxduration)){
   		durationDiv.innerText = '00:00';
  	} 
  else{
    durationDiv.innerText = formatSecondsAsTime(maxduration);
  }


}

function initAudioPlayer(player) {
  let audio = player.find('audio'),
  play = player.find('.play-pause'),
  circle = player.find('#seekbar'),
  getCircle = circle.get(0),
  totalLength = getCircle.getTotalLength();

   let links = document.querySelectorAll(".list-item");

  circle.attr({
    'stroke-dasharray': totalLength,
    'stroke-dashoffset': totalLength 
  });




  play.on('click', () => {
			playsong()
 
  });

  audio.on('timeupdate', () => {
    let currentTime = audio[0].currentTime,
    maxduration = audio[0].duration,
    calc = totalLength - currentTime / maxduration * totalLength;

    currTimeDiv.innerText = formatSecondsAsTime(currentTime);

    if (isNaN(maxduration)){
   		durationDiv.innerText = '00:00';
  	} 
  	else{
    	durationDiv.innerText = formatSecondsAsTime(maxduration);
 	 }

    circle.attr('stroke-dashoffset', calc);

    let value = Math.floor(currentTime / maxduration * 100);

    var slider = audio.closest('.js-audio').find('.audio__slider');
    jQuery(slider).roundSlider('setValue', value);
  });

  audio.on('ended', () => {
    player.removeClass('playing');

    circle.attr('stroke-dashoffset', totalLength);

    if (song_index < songs.length - 1) {
			song_index += 1;
			 document.getElementById("leftSection").style.backgroundImage = "url(" + songs[song_index].trackImg + ")";
			links[song_index].classList.add("active-song");
			load_song(song_index);

			playsong();
		} else {
			song_index = 0;
			 document.getElementById("leftSection").style.backgroundImage = "url(" + songs[song_index].trackImg + ")";
			links[song_index].classList.add("active-song");
			load_song(song_index);
			playsong();
		}

  });

    volumeBtn.onclick = function() {
    	if( volumeSlider.value > 0 ) {
    		  audio[0].volume = 0;
          volumeSlider.value = 0;
         	volumeBtn.querySelector('i.fas').classList.remove('fa-volume-up')
	        volumeBtn.querySelector('i.fas').classList.add('fa-volume-off')

    	}	else{
	    		audio[0].volume = 0.7;
	    		volumeSlider.value = 70;
	    		volumeBtn.querySelector('i.fas').classList.add('fa-volume-up')
		      volumeBtn.querySelector('i.fas').classList.remove('fa-volume-off')
    	}	

  }

   	volumeSlider.onchange = function () {
   	  audio[0].volume = volumeSlider.value / 100;
	}



  function playsong() {

	   if (audio[0].paused) {
      jQuery('audio').each((index, el) => {
        jQuery('audio')[index].pause();
      });
     jQuery('.js-audio').removeClass('playing');
      audio[0].play();
      player.removeClass('paused');
      player.addClass('playing');
    } else {
      audio[0].pause();
      player.removeClass('playing');
      player.addClass('paused');
    }

	}


	function load_song(song_index) {

		let x = document.getElementsByClassName("active-song");
              // If it exists, remove it.
    if(x.length > 0) { x[0].classList.remove("active-song"); }

	  audio[0].src = songs[song_index].song_url;
	  audio[0].load();
  }


  // Load the track on click
    Array.prototype.forEach.call(links, function(link, index) {
        link.addEventListener("click", function(e) {
            e.preventDefault();    
                    

            //  jQuery(this).addClass("active-song");
          

          //  jQuery(".list-item").addClass("active-song");

             song_index = index;
						 document.getElementById("leftSection").style.backgroundImage = "url(" + songs[song_index].trackImg + ")";
             load_song(index);

             let x = document.getElementsByClassName("active-song");
              // If it exists, remove it.
              if(x.length > 0) { x[0].classList.remove("active-song"); }

              link.classList.add('active-song');

             playsong();
        });
    });


 


}  //Init






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
    let circularLevel = document.getElementById('circularLevel');
    let circularHolder = document.getElementById('circularHolder');
	mainDiv = document.getElementById('main');
	
	let timer;
	let loop = 0;
	let index_no = 0;


// function load the track
function load_track(index_no) {

	track.src = songs[index_no].song_url;
	//title.innerHTML = songs[index_no].songName;
	//track_image.src = songs[index_no].trackImg;
	//artist.innerHTML = songs[index_no].artistName;
	track.load();

	//timer = setInterval(range_slider, 300);

	//total.innerHTML = songs.length;
	//present.innerHTML = index_no + 1;

	//playsong();
  
  }


  function updateProgress(e){
    const {duration, currentTime} = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    //progress.style.width = `${progressPercent}%`;
    //circularLevel.style.width = `${progressPercent}%`;

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
  //  progressContainer.addEventListener('click', setProgress);
    //circularHolder.addEventListener('click', setProgress);


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
 //   play.onclick = function(){

 //   	if (Playing_song == false) {
// 		playsong();
// 	}else{
// 		pausesong();
// 	}
 // }


// next.onclick = function() {

// 	if (index_no < songs.length - 1) {
// 		index_no += 1;
// 		 document.getElementById("main").style.backgroundImage = "url(" + songs[index_no].trackImg + ")";
// 		load_track(index_no);

// 		playsong();
// 	} else {
// 		index_no = 0;
// 		document.getElementById("main").style.backgroundImage = "url(" + songs[index_no].trackImg + ")";
// 		load_track(index_no);
// 		playsong();

// 	}
// }


// pre.onclick = function() {

	
//      if(index_no <= 0) {
// 	 	index_no = songs.length - 1;
// 	 	//index_no -= 1;
// 	 	document.getElementById("main").style.backgroundImage = "url(" + songs[index_no].trackImg + ")";
// 	 	load_track(index_no);
// 	 	playsong();
// 	 }else{

// 	 	  index_no -= 1;
// 	 	  document.getElementById("main").style.backgroundImage = "url(" + songs[index_no].trackImg + ")";
// 	 	load_track(index_no);
// 	 	playsong();
// 	 }

// }

recent_volume.onchange = function () {
	  track.volume = recent_volume.value / 100;
}


// track.addEventListener('playing', playingSong);

// play song
// function playsong() {
// 	track.play();
// 	Playing_song = true;
// 	play.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
// }

//pause song
// function pausesong() {

// 	track.pause();
// 	Playing_song = false;
// 	play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
// }

	//Page load play song
// if (player_autoplay == 1) {
//    load_track(index_no);
// }

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


