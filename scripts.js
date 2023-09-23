const tracks = [
    {
        trackName: "Forever and a Day",
        bandName: "Blackbriar",
        cover: "src/covers/blackbriar_forever_and_a_day.jfif",
        trackPath: "src/tracks/Blackbriar - Forever and a Day.mp3"
    },
    {
        trackName: "Lilith Be Gone",
        bandName: "Blackbriar",
        cover: "src/covers/blackbriar_the_cause_of_shipwreck.jfif",
        trackPath: "src/tracks/Blackbriar - Lilith Be Gone.mp3"
    }
]

let currentTrack = 0;
let playing = false

let trackName = document.querySelector("p.audio_player__track_name")
let bandName = document.querySelector("p.audio_player__band_name")
let albumCover = document.querySelector("img.audio_player__album_cover")
let audio = document.querySelector(".audio_player__audio")
let fullTime = document.querySelector('p.audio_player__full_time')
let currentTime = document.querySelector('p.audio_player__current_time')
let topPanel = document.querySelector('.audio_player__track_controls')

function refreshPlayer() {
    trackName.innerHTML = tracks[currentTrack].trackName;
    bandName.innerHTML = tracks[currentTrack].bandName;
    audio.src = tracks[currentTrack].trackPath;
    albumCover.src = tracks[currentTrack].cover
    audio.onloadedmetadata = function() {
        fullTime.innerHTML = `${Math.floor(audio.duration/60)}:${Math.floor(audio.duration%60)}`
        progressBar.max = audio.duration
      };

}

refreshPlayer()

function playAudio() {
    audio.play();
    setInterval(refreshTime, 500)
}

function pauseAudio() {
    audio.pause();
}

function togglePlay() {
    if (playing) {
        pauseAudio()
        playing = false
        playButton.classList.remove('pause')
        topPanel.classList.remove('pause')
    } else {
        playAudio()
        playing = true
        playButton.classList.add('pause')
        topPanel.classList.add('pause')
    }
}

function nextTrack() {
    currentTrack = currentTrack === (tracks.length - 1) ? 0 : currentTrack + 1
    refreshPlayer()
    if (playing) {
        playAudio()
    }
}

function previousTrack() {
    currentTrack = currentTrack === 0 ? tracks.length - 1 : currentTrack - 1
    refreshPlayer()
    if (playing) {
        playAudio()
    }
}

let progressBar = document.querySelector('.audio_player__progress_bar')

function refreshTime() {
    currentTime.innerHTML = `${Math.floor(audio.played.end(0)/60)}:${Math.floor(audio.played.end(0)%60)}`
    progressBar.value = audio.played.end(0)
}

let playButton = document.querySelector(".audio_player__play")
playButton.addEventListener('click', togglePlay)

let nextButton = document.querySelector(".audio_player__next")
nextButton.addEventListener('click', nextTrack)

let previousButton = document.querySelector(".audio_player__previous")
previousButton.addEventListener('click', previousTrack)