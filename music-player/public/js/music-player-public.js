
jQuery(document).ready(function() {

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

	music.src = song.path;
	songName.innerHTML = song.name;
	artistName.innerHTML = song.artist;
	coverImage.src = song.cover;

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



}); //window


