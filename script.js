window.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('movie-trailer');
    const fallback = video.querySelector('.fallback-msg');
  
    // If the video fails to load
    video.addEventListener('error', () => {
      fallback.style.display = 'block';
    });
  
    // If the video is loaded and can play
    video.addEventListener('loadeddata', () => {
      fallback.style.display = 'none';
    });
  });