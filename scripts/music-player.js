const playlistSongs = document.getElementById("playlist-songs");
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");
const nextButton = document.getElementById("next");
const previousButton = document.getElementById("previous");
const playingSong = document.getElementById("player-song-title");
const songArtist = document.getElementById("player-song-artist");

const allSongs = [
  {
    id: 0,
    title: "Falling Down",
    artist: "Anton Strolz",
    duration: "3:17",
    src: "music/Falling Down.mp3",
  },
  {
    id: 1,
    title: "My Shadow",
    artist: "Anton Strolz",
    duration: "3:34",
    src: "music/My Shadow.mp3",
  },
  {
    id: 2,
    title: "Not Myself",
    artist: "Anton Strolz",
    duration: "3:51",
    src: "music/Not Myself.mp3",
  },
  {
    id: 3,
    title: "My Own Lane",
    artist: "Anton Strolz",
    duration: "3:06",
    src: "music/MyOwnLane.mp3",
  },
  {
    id: 4,
    title: "United States of Hollywood",
    artist: "Anton Strolz",
    duration: "3:25",
    src: "music/USOH.mp3",
  },
];

const audio = new Audio();

const userData = {
    songs: allSongs,
    currentSong: null,
    songCurrentTime: 0,
};

const playSong = (id, start=true) => {
  const song = userData.songs.find((song) => song.id === id);
  audio.src = song.src;
  audio.title = song.title;

  if (userData.currentSong === null || start) {
    audio.currentTime = 0
  } else {
    audio.currentTime = userData.songCurrentTime;
  }
  playButton.classList.add("playing")
  setPlayerDisplay();
  userData.currentSong = song;

  highlightCurrentSong();
  setPlayButtonAccessibleText();
  audio.play();
}

const pauseSong = () => {
  userData.songCurrentTime = audio.currentTime;
  playButton.classList.remove("playing");
  audio.pause();
}

const getCurrentSongIndex = () => userData.songs.indexOf(userData.currentSong);

const getNextSong = () => {
  const nextIndex = getCurrentSongIndex() + 1;
  return userData.songs[nextIndex];
};

const getPreviousSong = () => {
  const prevIndex = getCurrentSongIndex() - 1;
  return userData.songs[prevIndex];
}

const playPreviousSong = () => {
if (userData.currentSong === null) return;  
  const previousSong = getPreviousSong();
  if (previousSong) {
    userData.currentSong = previousSong;   
    setPlayerDisplay();
    playSong(previousSong.id);
  } else {
    playSong(userData.songs[0].id);
  }
};

const playNextSong = () => {
  if (userData.currentSong === null) {
    playSong(userData.songs[0].id);
    return;
  }

  const nextSong = getNextSong();

  if (!nextSong) {
    userData.currentSong = null;
    userData.songCurrentTime = 0;
    setPlayerDisplay();
    highlightCurrentSong();
    setPlayButtonAccessibleText();
    pauseSong();
    return;
  }
  userData.currentSong = nextSong;   
  setPlayerDisplay();
  playSong(nextSong.id);
};

const setPlayerDisplay = () => {
  userData.currentSong?.title
  ? playingSong.textContent = userData.currentSong.title
  : playingSong.textContent = "";

   userData.currentSong?.artist
  ? songArtist.textContent = userData.currentSong.artist
  : songArtist.textContent = "";
}

const setPlayButtonAccessibleText = () => {
  if(userData.currentSong === null) {
  playButton?.setAttribute(`aria-label`, `Play`)
  } else {
  playButton?.setAttribute(`aria-label`, `Play ${userData.currentSong.title}`)
  }
}

const highlightCurrentSong = () => {
  const current = document.querySelector('.playlist-song[aria-current="true"]');
  if (current) {
    current.removeAttribute("aria-current");
  }
  const songToHighlight = document.getElementById(`song-${userData.currentSong?.id}`);
  songToHighlight?.setAttribute("aria-current", true);
};

playButton.addEventListener("click", () => {
  if(userData.currentSong === null) {
    userData.currentSong = userData.songs[0];   
    setPlayerDisplay();   
    playSong(0);
  } else {
    playSong(userData.currentSong.id, false);
  }
})

const songs = document.querySelectorAll(".playlist-song");

songs.forEach((song) => {
  const id = song.getAttribute("id").slice(5);
  const songBtn = song.querySelector("button");
  songBtn.addEventListener("click", () => {
    userData.currentSong = userData.songs[id];   
    setPlayerDisplay();   
    playSong(Number(id));
  })
})

pauseButton.addEventListener("click", pauseSong);
nextButton.addEventListener("click", playNextSong);
previousButton.addEventListener("click", playPreviousSong);

audio.addEventListener("ended", playNextSong);
