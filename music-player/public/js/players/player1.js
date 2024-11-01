	var responseVar;
jQuery(document).ready(function($) {

	var params = {};
	var html;
	var playlistSongs;
	var css_class; 

  var playerType = $("#player_type").val();
  params.action = 'awesome_player_get_playlist_by_id_frontend';
  params.playerType = playerType;

//console.log('playerType:', playerType);return;
    // params.action = 'awesome_player_get_playlist';
    // params.playerId = 4;

	  jQuery.ajax({
    type: 'GET',
    dataType : "json",
       url: "/wp_player/wp-admin/admin-ajax.php", 
      data:params,  // this is the function in your functions.php that will be triggered - moze da se stavi u root od plugin-a (nba-live.php). Ja sam stavio u class-nba-live u define_public_hooks a metoda je u clas-nba-live-public

    success: function( response ){
					responseVar = response;
					 
		var songs = JSON.parse(response.result.playlist[0].aw_playlist);
    var song_artist_name = songs[0].artistName + ' - ' + songs[0].songName;

    console.log("songs", songs);

    for(var i = 0; i < songs.length; i++ ){ 

    	css_class = i == 0 ? "current-image" : "";

    	html += '<div class="playlist-card">'+
            '<img data-index = "'+i+'" src="'+songs[i].trackImg+'" class="playlist-card-img '+css_class+' " alt="">'+
          	  '<p class="playlist-card-name">'+songs[i].songName+'</p>'+
        		'</div>';

        playlistSongs +='<div class="queue active">'+
                '<div class="queue-cover">'+
          	 	 '<img data-index = "'+i+'" src="'+songs[i].trackImg+'" alt="">'+
            	'<i class="fas fa-pause"></i>'+
		        '</div>'+
				        '<p class="name">'+songs[i].songName+'</p>'+
				    '</div>';
    		}

		html = html.replace("undefined", ""); 
		playlistSongs = playlistSongs.replace("undefined", ""); 
		$("#playlistGroup").append(html);     
		$("#playlistSongs").append(playlistSongs);     

		startPlayer(responseVar);
  
    },
  
    error: function (request, status, error) {
    //alert(request.responseText);
    // console.log('request',request);
    // console.log('status:', status);
  }
  
  });






function startPlayer(responseVar) {


jQuery('#carouselImg img:first').addClass('active');

 //console.log('first:',first.prevObject);
	

	let songs = JSON.parse(responseVar.result.playlist[0].aw_playlist);

	  for(var i = 0; i < songs.length; i++){
	  	var imgClass = 'active';
	  	imgClass = (i == 0 ) ? '' : '';

	  		jQuery('#carouselImg').prepend('<img class="'+imgClass+'" id="songImg" src="'+songs[i].trackImg+'" />')
	  }

	

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


	jQuery('.trigger, .slider').click(function() {
	  jQuery('.slider').toggleClass('close');
	});


	//navigations - toggling music player

	const musicPlayerSection = document.querySelector('.music-player-section');
	const homeSection = document.querySelector('.home-section'); 


	let clickCount = 1;

	musicPlayerSection.addEventListener('click', () => {
		if(clickCount >= 2 ) {
			musicPlayerSection.classList.add('active');
			clickCount = 1;
			return;
		}

		clickCount++;
		setTimeout(() => {
			clickCount = 1;
		}, 250)
	});


	//back from music player 

	const backToHomeBtn = document.querySelector('.back-btn');

	backToHomeBtn.addEventListener('click', () => {
		musicPlayerSection.classList.remove('active');
		// jQuery('.active').fadeOut(500);
		
		//musicPlayerSection.classList.add('hide');
		//homeSection.classList.add('active');
	});


	//Access playlist

	const playlistSection = document.querySelector('.playlist');
	const navBtn = document.querySelector('.music-player-section .nav-btn');

	navBtn.addEventListener('click', () => {
		playlistSection.classList.add('active');
	});

	//back from playlist to music player

	const backToMusicPlayer = document.querySelector('.playlist .back-btn');

	backToMusicPlayer.addEventListener('click', () => {
		playlistSection.classList.remove('active');
	});

	//End of navigation

	//Music

	const music = document.querySelector('#audio-source');
	const seekBar = document.querySelector('.music-seek-bar');
	const songName = document.querySelector('.current-song-name');
	const artistName = document.querySelector('.artist-name');
	const coverImage = document.querySelector('.cover');
	const currentMusicTime = document.querySelector('.current-time');
	const musicDuration = document.querySelector('.duration');

//Select all buttons here

	const forwardBtn = document.querySelector('.forward-btn');
	const backwarddBtn = document.querySelector('.backward-btn');
	const playBtn = document.querySelector('.play-btn');
	const pausedBtn = document.querySelector('.pause-btn');
	const repeatdBtn = document.querySelector('.redo-btn');
	const volumeBtn = document.querySelector('.volume-btn');
	const volumeSliderBtn = document.querySelector('.volume-slider');


	//Playbtn click event

	playBtn.addEventListener('click', () => {
		music.play();
		playBtn.classList.remove('active');
		pausedBtn.classList.add('active');
	});


	//pauseBtn click event
	pausedBtn.addEventListener('click', () => {
		music.pause();
		pausedBtn.classList.remove('active');
		playBtn.classList.add('active');
	});

	//function for setting up music

	const setMusic = (i) => {
		seekBar.value = 0;
		let song = songs[i];
		currentMusic = i;

		music.src = song.song_url;
		songName.innerHTML = song.songName;
		artistName.innerHTML = song.artistName;
		coverImage.src = song.trackImg;

		setTimeout(() => {
			seekBar.max = music.duration;
			musicDuration.innerHTML = formatTime(music.duration);
		}, 300);

		currentMusicTime.innerHTML = '00 : 00';
	}

	setMusic(1);


	//Format duration in 00 : 00 format

	const formatTime = (time) => {
		let min = Math.floor(time / 60);
		if(min < 10) {
			min = `0` + min;
		}

		let sec = Math.floor(time % 60);
		if(sec < 10 ) {
			sec = `0` + sec;
		}

		return `${min} : ${sec}`;
	}


	//seekbar events

	setInterval(() => {
		seekBar.value = music.currentTime;
		currentMusicTime.innerHTML = formatTime(music.currentTime);
		if(Math.floor(music.currentTime) == Math.floor(seekBar.max)){
			if(repeatdBtn.className.includes('active')){
				setMusic(currentMusic);
				playBtn.click();
			}else{
				forwardBtn.click();
			}
		}
	}, 500)

	seekBar.addEventListener('change', () => {
		music.currentTime = seekBar.value;
	});


	//Forward btn
	forwardBtn.addEventListener('click', () => {
		if(currentMusic >= songs.length - 1) {
			currentMusic = 0;
		}else{
			currentMusic++;
		}
		setMusic(currentMusic);
		playBtn.click();
	});

	//backward brn 

	backwarddBtn.addEventListener('click', () => {
		if(currentMusic <= 0 ) {
			currentMusic = songs.length - 1;
		}else{
			currentMusic--;
		}

		setMusic(currentMusic);
		playBtn.click();
	});


	  document.querySelectorAll(".playlists-group .playlist-card img").forEach(img =>
  	img.addEventListener("click", function(e) {

    var index_no = img.dataset.index;

  	setMusic(index_no);
  	playBtn.click();
  
    document.querySelector(".current-image").classList.remove("current-image");
    //document.querySelector(".current img").src = e.target.src;
    e.target.parentElement.classList.add("current-image");
  }),
);


	  document.querySelectorAll(".queue .queue-cover img").forEach(img =>
  	img.addEventListener("click", function(e) {

    var index_no = img.dataset.index;

  	setMusic(index_no);
  	playBtn.click();
  
    document.querySelector(".current-image").classList.remove("current-image");
    //document.querySelector(".current img").src = e.target.src;
    e.target.parentElement.classList.add("current-image");
  }),
);



	//repeat btn 

	repeatdBtn.addEventListener('click', () => {
		repeatdBtn.classList.toggle('active');
	});


	//volume section

	volumeBtn.addEventListener('click', () => {
		volumeBtn.classList.toggle('active');
		volumeSliderBtn.classList.toggle('active');
	});

	volumeSliderBtn.addEventListener('input', () => {
		music.volume = volumeSliderBtn.value;
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

      return baseLocalUrl + "/wp_player/";
    }
    else {

      return baseURL + "/wp_player/";
      }

    }



}); //window




