const playbtn = document.getElementById('play');
const prevbtn = document.getElementById('prev');
const nextbtn = document.getElementById('next');
const musicContainer = document.getElementById('music-container');

const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');

const title = document.getElementById('title');
const cover = document.getElementById('cover');
// Song titles
const songs = ['01-Asake-Start', '02-Asake-MMS-Ft-Wizkid', '03-Asake-Mood'];

// // Function to truncate a song title
// function truncateSongTitle(title) {
//     if (title.length > 6) {
//         return title.substring(0, 6) + '...'; // Keep first 6 characters and add ellipses
//     }
//     return title; // Return the title as-is if it's 6 characters or less
// }

// // Example usage: dynamically update song titles in the DOM
// songs.forEach((song, index) => {
//     // Dynamically create or select elements for each song title
//     const songTitleElement = document.createElement('div'); // Create a div for each song (modify as needed)
//     songTitleElement.textContent = truncateSongTitle(song); // Truncate and set the song title
//     songTitleElement.classList.add(`song-title-${index}`); // Add a unique class for styling or reference

//     // Append the song title to the body or another container
//     document.body.appendChild(songTitleElement);
// });



// Keep track of song
let songIndex = 1;

// Initially load song details into DOM
loadSong(songs[songIndex]);

// Update song details
function loadSong(song) {
    title.innerText = song;
    audio.src = `music/${song}.mp3`;
    cover.src = `img/${song}.jpg`;
}


// Play song
function playSong() {
    musicContainer.classList.add('play');
    playbtn.querySelector('i.fas').classList.remove('fa-play');
    playbtn.querySelector('i.fas').classList.add('fa-pause');

    audio.play();
}

// Pause song
function pauseSong() {
    musicContainer.classList.remove('play');
    playbtn.querySelector('i.fas').classList.add('fa-play');
    playbtn.querySelector('i.fas').classList.remove('fa-pause');

    audio.pause();
}

// Event listeners
playbtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play');

    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
});

// Change song
prevbtn.addEventListener('click', () => {
    songIndex--;

    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }

    loadSong(songs[songIndex]);

    playSong();
});

nextbtn.addEventListener('click', () => {
    songIndex++;

    if (songIndex > songs.length - 1) {
        songIndex = 0;
    }

    loadSong(songs[songIndex]);

    playSong();
});

// Time/song update
audio.addEventListener('timeupdate', (e) => {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
});

// Click on progress bar
progressContainer.addEventListener('click', (e) => {
    const width = progressContainer.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickX / width) * duration;
});

// Song ends
audio.addEventListener('ended', () => {
    songIndex++;

    if (songIndex > songs.length - 1) {
        songIndex = 0;
    }

    loadSong(songs[songIndex]);

    playSong();
});


