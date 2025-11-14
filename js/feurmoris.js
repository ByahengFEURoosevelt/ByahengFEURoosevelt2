// Loading Screen and Scroll Animation with Typewriter Effect

document.addEventListener('DOMContentLoaded', function() {
    
    // ===== LOADING SCREEN =====
    // Create loading screen element
    const loadingScreen = document.createElement('div');
    loadingScreen.className = 'loading-screen';
    loadingScreen.innerHTML = `
        <div class="loading-logo">
            <img src="images/feurmoris_logo.png" alt="FEUR MORIS Logo">
        </div>
    `;
    document.body.prepend(loadingScreen);

    // Hide main content initially
    document.body.style.overflow = 'hidden';

    // After 2.5 seconds, fade out loading screen
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 800); // Wait for fade out to complete
    }, 2500); // Logo shows for 2.5 seconds

    // ===== HERO LOGO ANIMATION =====
    // Animate hero logo on page load
    const heroLogo = document.querySelector('.hero img');
    if (heroLogo) {
        heroLogo.style.opacity = '0';
        heroLogo.style.transform = 'translateY(50px)';
        heroLogo.style.transition = 'opacity 1s ease, transform 1s ease';
        
        setTimeout(() => {
            heroLogo.style.opacity = '1';
            heroLogo.style.transform = 'translateY(0)';
        }, 3300); // Start after loading screen fades
    }

    // Typewriter effect function
    function typeWriter(element, speed = 5) {
        const text = element.textContent;
        element.textContent = '';
        element.style.opacity = '1';
        
        let i = 0;
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    // Elements with typewriter effect (paragraphs)
    const typewriterElements = document.querySelectorAll(`
        .text1wheader p,
        .text2 p,
        .descabt1 p,
        .descabt2 p,
        .instap p,
        .newsletter-content p,
        .p1 p,
        .p2 p,
        .p3 p,
        .para p,
        .contact-info p,
        .follow-section p
    `);

    // Elements with regular fade and slide animation
    const fadeElements = document.querySelectorAll(`
        .text1wheader h1,
        .about1 h1,
        .about1 h3,
        .img1abt,
        .img2abt,
        .instaheadcontent,
        .instaheader h1,
        .newsletter-content h1,
        .title,
        .imgstudent1,
        .imgstudent2,
        .professorimg,
        .professorinfo-title h3,
        .professorinfo-title .p1,
        .contact-title
    `);

    // Set initial state for typewriter elements
    typewriterElements.forEach(element => {
        element.style.opacity = '0';
        element.setAttribute('data-text', element.textContent);
    });

    // Set initial state for fade elements
    fadeElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(50px)';
        element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Check if it's a typewriter element
                if (entry.target.hasAttribute('data-text')) {
                    typeWriter(entry.target);
                    observer.unobserve(entry.target);
                } else {
                    // Regular fade and slide animation
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            }
        });
    }, observerOptions);

    // Observe all elements
    typewriterElements.forEach(element => observer.observe(element));
    fadeElements.forEach(element => observer.observe(element));

    // Add stagger effect
    const staggerGroups = document.querySelectorAll('.about-content, .studentcontent1, .studentcontent2, .studentcontent3');
    staggerGroups.forEach((group, index) => {
        group.style.transitionDelay = `${index * 0.1}s`;
    });
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});