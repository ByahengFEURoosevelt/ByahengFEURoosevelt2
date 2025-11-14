document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-bar a');
    
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 0 25px var(--secondary-color)';
            this.style.transform = 'scale(1.05)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.boxShadow = 'none';
            this.style.transform = 'scale(1)';
        });
    });
});