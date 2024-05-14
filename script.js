// Define your songs as an array of objects with title, source (URL), image URL, start, and end times.
const songs = [
    {
      title: "Baatein Ye kabhi na tu (Ajit singt)",
      src: "songs/Baatein Ye Kabhi Na Tu Bhulna-(SongsPK).mp3",
      image: "https://cdn.pixabay.com/photo/2017/01/18/17/14/girl-1990347_1280.jpg",
      start: 0,
      end: 120,
    },
    {
      title: "Chaleya (Music world) (Ajit singt)",
      src: "songs/Chaleya(PagalWorld.com.se).mp3",
      image: "https://cdn.pixabay.com/photo/2016/11/18/19/55/guitar-1836655_1280.jpg",
      start: 0,
      end: 120,
    },
    {
      title: "Maan meri ja (King)",
      src: "songs/Maan Meri Jaan(PagalWorld.com.se).mp3",
      image: "https://cdn.pixabay.com/photo/2017/11/02/20/31/guitars-2912447_640.jpg",
      start: 0,
      end: 120,
    },
    {
        title: "Malang sajna (Ajit singt)",
        src: "songs/Malang Sajna(PagalWorld.com.se).mp3",
        image: "https://cdn.pixabay.com/photo/2015/01/20/13/13/samsung-605439_960_720.jpg",
        start: 0,
        end: 120,
      },
      {
        title: "Sun hariye jind jaaniye (Ajit singh, pritam)",
        src: "songs/Sun Hariye Jind Jaaniye-(SongsPK).mp3",
        image: "https://cdn.pixabay.com/photo/2014/03/22/22/17/phone-292994_1280.jpg",
        start: 0,
        end: 120,
      },
      {
        title: "Khairiyat (Ajit singh, Pritam)",
        src: "songs/On-and-On(PaglaSongs).mp3",
        image: "https://cdn.pixabay.com/photo/2016/01/10/21/05/mic-1132528_1280.jpg",
        start: 0,
        end: 120,
      },
      {
        title: "Tu hai to muje fir aur kya chahiye (Ajit singh)",
        src: "songs/Tu Hai To Mujhe Phir Aur Kya Chahiye(PagalWorld.com.se).mp3",
        image: "https://cdn.pixabay.com/photo/2015/05/31/15/07/coffee-792113_1280.jpg",
        start: 0,
        end: 120,
      },
      {
        title: "Humdard (Ajit singh)",
        src: "songs/On-and-On(PaglaSongs).mp3",
        image: "https://cdn.pixabay.com/photo/2018/02/16/02/03/pocket-watch-3156771_1280.jpg",
        start: 0,
        end: 120,
      },
      {
        title: "Hawayein (Ajit singh, Pritam)",
        src: "songs/On-and-On(PaglaSongs).mp3",
        image: "https://images.unsplash.com/photo-1614149162883-504ce4d13909?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bXVzaWMlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        start: 0,
        end: 120,
      },
      {
        title: "Hawayein (Ajit singh, Pritam)",
        src: "songs/On-and-On(PaglaSongs).mp3",
        image: "https://images.unsplash.com/photo-1614149162883-504ce4d13909?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bXVzaWMlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        start: 0,
        end: 120,
      },
      {
        title: "Hawayein (Ajit singh, Pritam)",
        src: "songs/On-and-On(PaglaSongs).mp3",
        image: "https://images.unsplash.com/photo-1614149162883-504ce4d13909?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bXVzaWMlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        start: 0,
        end: 120,
      },
      {
        title: "Hawayein (Ajit singt, Pritam)",
        src: "songs/On-and-On(PaglaSongs).mp3",
        image: "https://images.unsplash.com/photo-1614149162883-504ce4d13909?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bXVzaWMlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        start: 0,
        end: 120,
      },
  ];
  
  const playlist = document.getElementById("playlist");
  const audio = document.getElementById("audio");
  const songImage = document.getElementById("song-image");
  const songTitle = document.getElementById("song-title");
  const playPauseButton = document.getElementById("play-pause-button");
  const prevButton = document.getElementById("prev-button");
  const nextButton = document.getElementById("next-button");
  const progressBar = document.getElementById("progress-bar");
  const progressContainer = document.getElementById("progress-container");
  const timer = document.getElementById("timer");
  const searchInput = document.getElementById("search");

  let currentSongIndex = 0;

  // Function to create playlist items
  function createPlaylist() {
      for (let i = 0; i < songs.length; i++) {
          const song = songs[i];

          // Create a list item for the song
          const listItem = document.createElement("p");
          listItem.textContent = song.title;
          listItem.setAttribute("data-src", song.src);
          listItem.setAttribute("data-image", song.image);
          listItem.setAttribute("data-start", song.start);
          listItem.setAttribute("data-end", song.end);

          // Add a click event listener to play the song when clicked
          listItem.addEventListener("click", () => {
              currentSongIndex = i;
              playSongWithTimes(song.src, song.image, song.start, song.end);
          });

          // Append the list item to the playlist
          playlist.appendChild(listItem);
      }
  }

  // Function to play a song with specified start and end times
  function playSongWithTimes(songSrc, songImageSrc, startTime, endTime) {
      audio.src = songSrc;
      audio.currentTime = startTime;
      audio.play();

      songImage.src = songImageSrc;
      songTitle.textContent = songs[currentSongIndex].title;
    //   document.body.style.backgroundImage = `url('${songImageSrc}')`;
    //   document.body.style.backgroundSize = "cover";
    //   document.body.style.backgroundRepeat = "no-repeat";
    //   document.body.style.backgroundPosition = "center";

      playPauseButton.textContent = "Pause";

      // Clear previous event listeners
      audio.removeEventListener("timeupdate", updateProgressBar);

      // Update the progress bar while the audio is playing
      audio.addEventListener("timeupdate", () => {
          const currentTime = audio.currentTime;
          if (currentTime >= endTime) {
              audio.pause();
              playPauseButton.textContent = "Play";
              playNextSong(); // Automatically play the next song
          } else {
              updateProgressBar(currentTime, startTime, endTime);
          }
      });

      // Update the timer
      updateTimer(startTime, endTime);
  }

  // Function to toggle play/pause
  function togglePlayPause() {
      if (audio.paused) {
          audio.play();
          playPauseButton.textContent = "Pause";
      } else {
          audio.pause();
          playPauseButton.textContent = "Play";
      }
  }

  // Function to play the next song
  function playNextSong() {
      currentSongIndex = (currentSongIndex + 1) % songs.length;
      const nextSong = songs[currentSongIndex];
      playSongWithTimes(nextSong.src, nextSong.image, nextSong.start, nextSong.end);
  }

  // Function to play the previous song
  function playPrevSong() {
      currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
      const prevSong = songs[currentSongIndex];
      playSongWithTimes(prevSong.src, prevSong.image, prevSong.start, prevSong.end);
  }

  // Function to update the custom progress bar and timer
  function updateProgressBar(currentTime, startTime, endTime) {
      const progressPercentage =
          ((currentTime - startTime) / (endTime - startTime)) * 100;
      progressBar.style.width = progressPercentage + "%";

      // Update the timer
      updateTimer(currentTime, endTime);
  }

  // Function to update the timer
  function updateTimer(currentTime, endTime) {
      const currentMinutes = Math.floor(currentTime / 60);
      const currentSeconds = Math.floor(currentTime % 60);
      const endMinutes = Math.floor(endTime / 60);
      const endSeconds = Math.floor(endTime % 60);
      const timerText = `${currentMinutes}:${currentSeconds < 10 ? "0" : ""
          }${currentSeconds} / ${endMinutes}:${endSeconds < 10 ? "0" : ""
          }${endSeconds}`;
      timer.textContent = timerText;
  }

  // Initialize the playlist and add event listeners
  createPlaylist();
  playSongWithTimes(
      songs[currentSongIndex].src,
      songs[currentSongIndex].image,
      songs[currentSongIndex].start,
      songs[currentSongIndex].end
  );

  // Add event listeners to custom controls
  playPauseButton.addEventListener("click", togglePlayPause);
  nextButton.addEventListener("click", playNextSong);
  prevButton.addEventListener("click", playPrevSong);

  // Add an event listener to seek to a specific position when clicking on the progress bar
  progressContainer.addEventListener("click", (e) => {
      const clickX = e.clientX - progressContainer.getBoundingClientRect().left;
      const percentage = (clickX / progressContainer.offsetWidth) * 100;
      progressBar.style.width = percentage + "%";
      const newTime =
          (percentage / 100) *
          (songs[currentSongIndex].end - songs[currentSongIndex].start) +
          songs[currentSongIndex].start;
      audio.currentTime = newTime;
  });

  searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase();
    const playlistItems = playlist.getElementsByTagName("p");
    for (const item of playlistItems) {
      const songTitle = item.textContent.toLowerCase();
      if (songTitle.includes(searchTerm)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    }
  });