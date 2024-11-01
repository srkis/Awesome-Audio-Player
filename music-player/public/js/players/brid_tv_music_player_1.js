
	//create a audio Element
//let track = document.createElement('audio');
let track = document.querySelector('#audio')
let Playing_song = false;
let player_autoplay;
let songDuration;
let song_index = 0;

let adsLoaded = false;
let adContainer;
let adDisplayContainer;
let adsLoader;
let adsManager;
let adOverlay;
let countdownTimer;
let adTagType;
let adTagUrl;
let mainDiv;
let skipButton;




jQuery(document).ready(function($){

  var params = {};
  var playerType = $("#player_type").val();
  params.action = 'awesome_player_get_playlist_by_id_frontend';
  params.playerType = playerType;
  

 jQuery.ajax({
    type: 'GET',
    dataType : "json",
     url: getBaseURL()+"wp_player/wp-admin/admin-ajax.php", 
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
    console.log("songs:", songs);

    player_autoplay = response.result.player[0].aw_player_autoplay;

    adTagType = response.result.player[0].aw_ad_tag_url_type;
    adTagUrl = response.result.player[0].aw_ad_tag_url;


		$('#first_img').attr('src', songs[0].trackImg);

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


           css_class = i == 0 ? "current-image" : "";
      html += '<div id="gallery_img"  class="thumbnail '+css_class+'">'+
      			'<img data-index = "'+i+'" data-artist="'+songs[i].artistName+'" data-song="'+songs[i].songName+'" src="'+songs[i].trackImg+'" value="'+songs[i].song_url+'">'+
      			'</div>';

        j++;
            
    }


    html = html.replace("undefined", ""); 


    $("#songs_img").append(html);   


    createPlayer(songs);

 	//image_gallery();

   }
 }); 

/*Slider*/

}); //Document ready




 function createPlayer(songs) {

 

	let previous = document.querySelector('#pre');
	let play = document.querySelector('#play');
	let next = document.querySelector('#next');
	let title = document.querySelector('#title');
	let recent_volume = document.querySelector('#volume');
	let volume_show = document.querySelector('#volume_show');
	let slider = document.querySelector('#duration_slider');
	let show_duration = document.querySelector('#show_duration');
	let track_image = document.querySelector('#track_image');
	let thumbnail_image = document.querySelectorAll(".image_gallery .thumbnail img");
	let auto_play = document.querySelector('#auto');
	let present = document.querySelector('#present');
	let total = document.querySelector('#total');
	let artist = document.querySelector('#artist');
	let mute_sound = document.querySelector("#volume_icon");
	let volumeBtnDiv = document.querySelector("#volume_button");
	mainDiv = document.getElementById('main_div');
	adContainer = document.getElementById('ad-container');
	skipButton = document.getElementById('skipAd');
	let equalizers = document.getElementById('equalizers');

	var thumbnails = jQuery('div.thumbnail');
    var currentItem = thumbnails.filter('.current-image');
	let timer;
	let loop = 0;
	let index_no = 0;

	 //  audioElement = document.getElementById('audio-element');
    initializeIMA();
    track.addEventListener('play', function(event) {
        loadAds(event);
    });

    
	

// function load the track
function load_track(index_no) {
	clearInterval(timer);
	reset_slider();

	
	jQuery('#first_img').attr('src', songs[index_no].trackImg);
	

	// console.log(prev_index);
	// console.log(index_no);

	// 	thumbnail_image[prev_index].classList.remove("current-image");

	// if(prev_index > 0) {
	
	// 	thumbnail_image[index_no].classList.add("current-image");
	// }


	track.src = songs[index_no].song_url;
	title.innerHTML = songs[index_no].songName;
	track_image.src = songs[index_no].trackImg;
	artist.innerHTML = songs[index_no].artistName;
	track.load();

	timer = setInterval(range_slider, 300);

	total.innerHTML = songs.length;
	present.innerHTML = index_no + 1;

	//playsong();
  
  }

	track.onloadedmetadata = function() {
  		songDuration = track.duration;
  		
	};


	  mute_sound.onclick = function() {
	  
    	if( volume.value > 0 ) {
    		track.volume = 0;
            recent_volume.value = 0;
         	volumeBtnDiv.querySelector('i.fa').classList.remove('fa-volume-up')
	        volumeBtnDiv.querySelector('i.fa').classList.add('fa-volume-off')

    	}	else{
	    	track.volume = 0.7;
	    	recent_volume.value = 70;
	    	volumeBtnDiv.querySelector('i.fa').classList.add('fa-volume-up')
		    volumeBtnDiv.querySelector('i.fa').classList.remove('fa-volume-off')
    	}	
  }


	auto_play.onclick = function() {

		auto_play.classList.toggle("mystyle");

	if (loop == 1) {
		loop = 0;
		auto_play.style.background = "rgba(255,255,255,0.2)";
	} else {
		loop = 1;
		auto_play.style.background = "#DA3D3E";
	}
}


	track.onended = function(event) {

			// adOverlay.style.display = "inline";
			// adContainer.style.display = "inline";
			// initializeIMA();
			
		if(auto_play.className.includes('mystyle')){
			return;
		}

		var nextItem = currentItem.next();
	    currentItem.removeClass('current-image');
	    console.log("nextItem", nextItem);
	    if ( nextItem.length ) {
	        currentItem = nextItem.addClass('current-image');
	    } else {
	        // If you want it to loop around
	         console.log("currentItem", currentItem);

	        currentItem = thumbnails.first().addClass('current-image');
	    }

	    //index_no +=1;		

		if (index_no < songs.length - 1) {
			index_no += 1;
			load_track(index_no);

			playsong();
		} else {
			index_no = 0;
			load_track(index_no);
			playsong();
		}
    };



	// checking.. the song is playing or not
   play.onclick = function(){

   	if(adTagType == "video") {
		adContainer.style.display = "inline";
	}

   	if (Playing_song == false) {
		playsong();
	}else{
		pausesong();
	}
 }


// reset song slider
function reset_slider() {
	//slider.value = 0;
}




next.onclick = function() {

    var nextItem = currentItem.next();
    currentItem.removeClass('current-image');
    if ( nextItem.length ) {
        currentItem = nextItem.addClass('current-image');
    } else {
        // If you want it to loop around
        currentItem = thumbnails.first().addClass('current-image');
    }
    //index_no +=1;

	if (index_no < songs.length - 1) {
		index_no += 1;
		load_track(index_no);

		playsong();
	} else {
		index_no = 0;
		load_track(index_no);
		playsong();

	}
}


pre.onclick = function() {

	var prevItem = currentItem.prev();
    currentItem.removeClass('current-image');

      if ( prevItem.length ) {
        currentItem = prevItem.addClass('current-image');
    } else {
        // If you want it to loop around
        currentItem = thumbnails.last().addClass('current-image');
    }

	
     if(index_no <= 0) {
	 	index_no = songs.length - 1;
	 	//index_no -= 1;
	 	load_track(index_no);
	 	playsong();
	 }else{

	 	  index_no -= 1;
	 	load_track(index_no);
	 	playsong();
	 }

}

recent_volume.onchange = function () {
	  volume_show.style.display = "flex"; 
	  volume_show.style.visibility = "visible";
      volume_show.style.opacity = 1;
      volume_show.innerHTML = recent_volume.value+'%';
	  track.volume = recent_volume.value / 100;
}

document.getElementById('volume').addEventListener("mouseout", function(){ 
      volume_show.style.display = "";
      volume_show.style.visibility = "hidden";
      volume_show.style.opacity = 0;
     
}); 


// change slider position
slider.onchange = function(){
	slider_position = track.duration * (slider.value / 100);
	track.currentTime = slider_position;
}


 track.addEventListener('playing', playingSong);

  track.onplaying = function() {
    equalizers.classList.add('change');
};

 skipButton.addEventListener('click', () => {
 	 adsManager.skip();
 	//playsong();
 
});

 // /onContentResumeRequested


// play song
function playsong() {
	track.play();
	Playing_song = true;
	equalizers.classList.add('change');
	play.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
}

//pause song
function pausesong() {

if(adTagType == "video") {
		adContainer.style.display = "none";
	}
    
    equalizers.classList.remove('change');
	track.pause();
	Playing_song = false;
	play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
}


function range_slider() {
	let position = 0;

        document.getElementById("totalTime").innerText = fancyTimeFormat(track.duration);
        document.getElementById("currentTime").innerText = fancyTimeFormat(track.currentTime * (100 / track.duration));
	
	// update slider position
	if (!isNaN(track.duration)) {
		position = track.currentTime * (100 / track.duration);
		//console.log(fancyTimeFormat(position));
		slider.value = position;
	}


	// function will run when the song is over
	if (track.ended) {
		play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';


		if (loop == 1) {
			//index_no += 1;
			load_track(index_no);
			playsong();
		}
	}
}


function playingSong () {
	console.log("playingSong")
		if(adTagType == "video") {
		adContainer.style.display = "none";
	}
}

	//Page load play song
if (player_autoplay == 1) {
   load_track(index_no);
}


function image_gallery() {

  document.querySelectorAll(".image_gallery .thumbnail img").forEach(img =>
  img.addEventListener("click", function(e) {

    var index_no = img.dataset.index;
    song_index = index_no;
  	load_track(index_no);
  
    document.querySelector(".current-image").classList.remove("current-image");
    document.querySelector(".current img").src = e.target.src;
    e.target.parentElement.classList.add("current-image");
  }),
);

document.querySelector(".image_gallery").addEventListener("wheel", function(e) {
  if (e.wheelDelta < 0) {
    document.querySelector(".image_gallery").scrollLeft += 60;
  } else {
    document.querySelector(".image_gallery").scrollLeft -= 60;
  }

});


}

image_gallery();

	

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


/*Google IMA*/


function initializeIMA() {
    console.log("initializing IMA");
    //console.log( adTagType);
 	//console.log( adTagUrl);
    // audio = document.getElementById('audio-progress-bar');
    
     adOverlay = document.getElementById('ad-overlay');
    if(adTagType == "audio") {
    	
    	adOverlay.addEventListener('click', adContainerClick);
		adDisplayContainer = new google.ima.AdDisplayContainer(adContainer, adOverlay);
    }else{
       adOverlay.style.display = "none";
      
       adDisplayContainer = new google.ima.AdDisplayContainer(adContainer, track);

    }
  
       
    adsLoader = new google.ima.AdsLoader(adDisplayContainer);

    adsLoader.addEventListener(
        google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,
        onAdsManagerLoaded,
        false);
    adsLoader.addEventListener(
        google.ima.AdErrorEvent.Type.AD_ERROR,
        onAdError,
        false);

    // Let the AdsLoader know when the audio has ended
    track.addEventListener('ended', function() {
        adsLoader.contentComplete();
    });

    var adsRequest = new google.ima.AdsRequest();
    //https://pubads.g.doubleclick.net/gampad/ads?iu=/21760922134/TestAudio&description_url=[placeholder]&tfcd=0&npa=0&ad_type=audio&sz=1x1&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=
   // adsRequest.adTagUrl = 'https://pubads.g.doubleclick.net/gampad/ads?iu=/6062/conwayt_audio_test/generic_test_creatives&description_url=http%3A%2F%2Fgoogle.com&tfcd=0&npa=0&ad_type=audio&sz=1x1&ciu_szs=300x250%2C320x50%2C728x90&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=';
  //  adsRequest.adTagUrl = 'https://pubads.g.doubleclick.net/gampad/ads?iu=/21775744923/external/single_preroll_skippable&sz=640x480&ciu_szs=300x250%2C728x90&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=';
    adsRequest.adTagUrl = adTagUrl;

    // Pass the request to the adsLoader to request ads
    adsLoader.requestAds(adsRequest);

}


function loadAds(event) {
    // Prevent this function from running on if there are already ads loaded
    if (adsLoaded) {
        return;
    }
    adsLoaded = true;

    // Prevent triggering immediate playback when ads are loading
    event.preventDefault();

    console.log("loading ads");
    // Initialize the container. Must be done via a user action on mobile devices.
    track.load();
    adDisplayContainer.initialize();
    // var audioDisplayContainer = document.getElementById('audio-progress-bar');
	
	if(adTagType == "audio") {
	   var width = adOverlay.clientWidth;
   	   var height = adOverlay.clientHeight;
	}else{
	   var width = mainDiv.clientWidth;
       var height = mainDiv.clientHeight;
	}
   

    try {
        adsManager.init(width, height, google.ima.ViewMode.NORMAL);
        adsManager.start();
    } catch (adError) {
        // Play the audio without ads, if an error occurs
        console.log("AdsManager could not be started");
        track.play();
    }
}

function onAdsManagerLoaded(adsManagerLoadedEvent) {
    // Instantiate the AdsManager from the adsLoader response and pass it the audio element
    adsManager = adsManagerLoadedEvent.getAdsManager(
        track);
    adsManager.addEventListener(
        google.ima.AdErrorEvent.Type.AD_ERROR,
        onAdError);
    adsManager.addEventListener(
        google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED,
        onContentPauseRequested);
    adsManager.addEventListener(
        google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED,
        onContentResumeRequested);
    adsManager.addEventListener(
        google.ima.AdEvent.Type.LOADED,
        onAdLoaded);
    adsManager.addEventListener(
        google.ima.AdEvent.Type.STARTED,
        onAdEvent);
}

function onAdError(adErrorEvent) {
    // Handle the error logging.
    console.log(adErrorEvent.getError());
    if (adsManager) {
        adsManager.destroy();
    }
}

function onContentPauseRequested() {
    track.pause();
    if(adTagType == "audio") {
       adOverlay.style.display = "inline";
    }

}

function onContentResumeRequested() {
    track.play();
    if(adTagType == "audio") {
       adOverlay.style.display = "none";
    }else{
    	adContainer.style.display = "none";
    }
  
    if (countdownTimer) {
    clearInterval(countdownTimer);
  }
}

function adContainerClick(event) {
    console.log("ad container clicked");
}

function onAdLoaded(adEvent) {
    var ad = adEvent.getAd();
    if (!ad.isLinear()) {
        track.play();
    }
}

function onAdEvent(adEvent) {
    switch (adEvent.type) {
        case google.ima.AdEvent.Type.STARTED:
            // Get the ad from the event.
            var ad = adEvent.getAd();
            let currentAd = ad;
            let adProgressData = adEvent.getAdData();
            var start = Date.now();
            let number = 5;
            
            var countdownValueSpan = document.getElementById('ad-countdown-value')
            countdownTimer = setInterval(function() {
                var timeRemaining = adsManager.getRemainingTime();
                countdownValueSpan.innerText = Math.floor(timeRemaining);

                var skipTime = timeRemaining - 5;
                var elapsedTime = Date.now() - start;
                number--;

       updateSkippable(
        number,
        currentAd.getSkipTimeOffset()
      );

        }, 1000);

     break;

     case google.ima.AdEvent.Type.AD_PROGRESS:
      // See https://developers.google.com/interactive-media-ads/docs/sdks/html5/client-side/reference/js/google.ima.AdProgressData
      break;

    }
}


/**
   * Called when there may be a change in the skippable state.
   * @param {number} currentTime The current time of the
   * currently playing ad.
   * @param {number} skipTimeOffset The number of seconds of playback
   * before the ad becomes skippable. -1 is returned for non skippable
   * ads or if this is unavailable.
   */
  function updateSkippable(currentTime, skipTimeOffset) {
    const isAdSkippable = skipTimeOffset !== -1;
    const isSkipCurrentlyAllowed = adsManager.getAdSkippableState();
    const timeTillSkipInSeconds = Math.ceil(skipTimeOffset - currentTime);
    updateSkipUI(
        isAdSkippable, isSkipCurrentlyAllowed, currentTime);
  }


/**
 * Updates the skip button UI.
 * @param {boolean} isAdSkippable if the current ad is a skippable ad.
 * @param {boolean} isSkipCurrentlyAllowed if the ad can be skipped now.
 * @param {number} timeTillSkipInSeconds time until the ad can be skipped in
 * seconds.
 */
function updateSkipUI(isAdSkippable, isSkipCurrentlyAllowed, timeTillSkipInSeconds) {


  if (isAdSkippable) {
    skipButton.classList.remove('hidden');
    if (isSkipCurrentlyAllowed) {
      skipButton.textContent = 'Skip ad';
      skipButton.disabled = false;
    } else {
      skipButton.textContent = `Skip in ${timeTillSkipInSeconds} seconds`;
      skipButton.disabled = true;
    }
  } else {
    skipButton.classList.add('hidden');
  }
}


