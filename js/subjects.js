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
