const playPauseBtn = document.getElementById('playPauseBtn');
const previousBtn = document.getElementById('previousBtn');
const nextBtn = document.getElementById('nextBtn');
const audioTracks = document.querySelectorAll('.track');
let currentTrackIndex = 0;
let isPlaying = false;

playPauseBtn.addEventListener('click', () => {
  if (isPlaying) {
    pauseAudio();
  } else {
    playAudio();
  }
});

previousBtn.addEventListener('click', () => {
  currentTrackIndex =
    (currentTrackIndex - 1 + audioTracks.length) % audioTracks.length;
  playAudio();
});

nextBtn.addEventListener('click', () => {
  currentTrackIndex = (currentTrackIndex + 1) % audioTracks.length;
  playAudio();
});

function playAudio() {
  for (let i = 0; i < audioTracks.length; i++) {
    if (i === currentTrackIndex) {
      audioTracks[i].currentTime = 0;
      audioTracks[i].volume = 0.5;
      audioTracks[i].play();
    } else {
      audioTracks[i].pause();
    }
  }
  playPauseBtn.innerHTML =
    '<img src="assets/img/pausebtn.svg" alt="Play Button" />';
  isPlaying = true;
}

function pauseAudio() {
  for (let i = 0; i < audioTracks.length; i++) {
    audioTracks[i].pause();
  }
  playPauseBtn.innerHTML =
    '<img src="assets/img/botaoplay.svg" alt="Pause Button" />';
  isPlaying = false;
}
