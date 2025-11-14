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

// Smooth scroll to event sections
function scrollToEvent(eventId) {
    const element = document.getElementById(eventId);
    if (element) {
        element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Star rating functionality
document.addEventListener('DOMContentLoaded', function() {
    const stars = document.querySelectorAll('.star-btn');
    const feedbackMessage = document.getElementById('feedbackMessage');

    stars.forEach(star => {
        star.addEventListener('click', function() {
            const rating = parseInt(this.getAttribute('data-rating'));
            
            // Remove active class from all stars
            stars.forEach(s => s.classList.remove('active'));
            
            // Add active class to clicked star and all previous stars
            for (let i = 0; i < rating; i++) {
                stars[i].classList.add('active');
            }
            
            // Display message based on rating
            if (rating >= 1 && rating <= 3) {
                feedbackMessage.textContent = "Hope you enjoy upcoming events! 🌟";
                feedbackMessage.className = 'feedback-message show low-rating';
            } else if (rating >= 4 && rating <= 5) {
                feedbackMessage.textContent = "I'm glad you enjoyed it too! 🎉";
                feedbackMessage.className = 'feedback-message show high-rating';
            }
        });
        
        // Add hover effect
        star.addEventListener('mouseenter', function() {
            const rating = parseInt(this.getAttribute('data-rating'));
            stars.forEach((s, index) => {
                if (index < rating) {
                    s.classList.add('hover');
                } else {
                    s.classList.remove('hover');
                }
            });
        });
    });

    // Remove hover effect when mouse leaves star container
    const starRating = document.querySelector('.star-rating');
    if (starRating) {
        starRating.addEventListener('mouseleave', function() {
            stars.forEach(s => s.classList.remove('hover'));
        });
    }
});