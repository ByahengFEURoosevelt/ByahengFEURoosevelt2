// video-autoplay.js
document.addEventListener('DOMContentLoaded', function() {
    const video = document.querySelector('.vlogfeur video');
    
    if (!video) return; // Exit if no video found
    
    // Set video attributes for better control
    video.setAttribute('muted', 'true');
    video.setAttribute('playsinline', 'true');
    video.controls = true;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                video.play().catch(error => {
                    console.log('Autoplay prevented:', error);
                    video.currentTime = 0;
                });
            } else {
                video.pause();
                video.currentTime = 0;
            }
        });
    }, {
        threshold: 0.5,
        rootMargin: '0px 0px -50px 0px'
    });
    
    observer.observe(document.querySelector('.vlogfeur'));
    
    // Manual play button for mobile
    const playButton = document.createElement('button');
    playButton.textContent = 'Click to Play Video';
    playButton.style.cssText = `
        display: block;
        margin: 10px auto;
        padding: 10px 20px;
        background: var(--primary-color);
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-family: var(--main-textfont-heads);
    `;
    
    playButton.addEventListener('click', function() {
        video.play();
        playButton.style.display = 'none';
    });
    
    video.parentNode.insertBefore(playButton, video);
    
    video.addEventListener('play', function() {
        playButton.style.display = 'none';
    });
    
    video.addEventListener('ended', function() {
        playButton.style.display = 'block';
        playButton.textContent = 'Replay Video';
    });
    
    video.addEventListener('pause', function() {
        if (video.currentTime > 0 && !video.ended) {
            playButton.style.display = 'block';
            playButton.textContent = 'Resume Video';
        }
    });
});