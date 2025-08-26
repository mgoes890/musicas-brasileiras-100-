const music = document.getElementById("music");
const playButton = document.getElementById("musicButton");
const nextButton = document.getElementById("nextButton");
const prevButton = document.getElementById("prevButton");
const trackName = document.getElementById("trackName");

// 🎵 Playlist
const playlist = [
  { src: "musica1.mp3", name: "Música 1 - Alegria" },
  { src: "musica2.mp3", name: "Música 2 - Tranquilidade" },
  { src: "musica3.mp3", name: "Música 3 - Energia" }
];

let currentTrack = 0;

// Carrega a música atual
function loadTrack(index) {
  music.src = playlist[index].src;
  trackName.textContent = "🎶 Tocando agora: " + playlist[index].name;
}

// Toca ou pausa a música
playButton.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    playButton.textContent = "⏸";
    playButton.classList.add("playing");
  } else {
    music.pause();
    playButton.textContent = "🎵";
    playButton.classList.remove("playing");
    trackName.textContent = "⏸ Música pausada";
  }
});

// Próxima música
nextButton.addEventListener("click", () => {
  currentTrack = (currentTrack + 1) % playlist.length;
  loadTrack(currentTrack);
  music.play();
  playButton.textContent = "⏸";
  playButton.classList.add("playing");
});

// Música anterior
prevButton.addEventListener("click", () => {
  currentTrack = (currentTrack - 1 + playlist.length) % playlist.length;
  loadTrack(currentTrack);
  music.play();
  playButton.textContent = "⏸";
  playButton.classList.add("playing");
});

// Quando a música acabar, passa automaticamente para a próxima
music.addEventListener("ended", () => {
  currentTrack = (currentTrack + 1) % playlist.length;
  loadTrack(currentTrack);
  music.play();
});

// Inicia com a primeira música carregada
loadTrack(currentTrack);
