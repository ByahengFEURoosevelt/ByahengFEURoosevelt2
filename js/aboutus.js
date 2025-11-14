// Loading screen
window.addEventListener('load', function() {
    const loadingScreen = document.querySelector('.loading-screen');
    
    // Hide loading screen after page loads
    setTimeout(function() {
        loadingScreen.classList.add('hidden');
        
        // Remove from DOM after transition
        setTimeout(function() {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 1500); // Show loading screen for 1.5 seconds minimum
});

// Fade-in animations for images and sections
document.addEventListener('DOMContentLoaded', function() {
    
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-visible');
            }
        });
    }, observerOptions);

    // Animate cartoon images
    const cartoonImage1 = document.querySelector('.cartoonimage1');
    const cartoonImage2 = document.querySelector('.cartoonimage2');
    if (cartoonImage1) observer.observe(cartoonImage1);
    if (cartoonImage2) observer.observe(cartoonImage2);

    // Animate actual images
    const actualImage1 = document.querySelector('.actualimage1');
    const actualImage2 = document.querySelector('.actualimage2');
    if (actualImage1) observer.observe(actualImage1);
    if (actualImage2) observer.observe(actualImage2);

    // Animate info boards
    const infoboard1 = document.querySelector('.infoboard1');
    const infoboard2 = document.querySelector('.infoboard2');
    if (infoboard1) observer.observe(infoboard1);
    if (infoboard2) observer.observe(infoboard2);
});