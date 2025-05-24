











// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Header background on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(26, 26, 26, 0.98)';
    } else {
        header.style.background = 'rgba(26, 26, 26, 0.95)';
    }
});

// Hero video play/pause
const heroVideo = document.getElementById('hero-video');
const playBtn = document.getElementById('play-btn');

playBtn.addEventListener('click', () => {
    if (heroVideo.paused) {
        heroVideo.play();
        playBtn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        heroVideo.pause();
        playBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
});

// Portfolio video hover effects
const portfolioVideos = document.querySelectorAll('[id^="project-video-"]');
const hoverSigns = document.querySelectorAll('.hover-sign');

portfolioVideos.forEach((video, index) => {
    const portfolioItem = video.closest('.portfolio-item');
    const hoverSign = portfolioItem.querySelector('.hover-sign');
    
    portfolioItem.addEventListener('mouseenter', () => {
        video.play();
        hoverSign.classList.add('active');
    });
    
    portfolioItem.addEventListener('mouseleave', () => {
        video.pause();
        hoverSign.classList.remove('active');
    });
});

// Skills tabs functionality
const tabButtons = document.querySelectorAll('.tab-btn');
const tabPanes = document.querySelectorAll('.tab-pane');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetTab = button.getAttribute('data-tab');
        
        // Remove active class from all buttons and panes
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabPanes.forEach(pane => pane.classList.remove('active'));
        
        // Add active class to clicked button and corresponding pane
        button.classList.add('active');
        document.getElementById(targetTab).classList.add('active');
    });
});

// Portfolio filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filterValue = button.getAttribute('data-filter');
        
        // Remove active class from all filter buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Filter portfolio items
        portfolioItems.forEach(item => {
            if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                item.style.display = 'block';
                setTimeout(() => {
                    item.style.transform = 'scale(1)';
                    item.style.opacity = '1';
                }, 100);
            } else {
                item.style.transform = 'scale(0.8)';
                item.style.opacity = '0';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
    });
});

// Animate skill bars when in view
const animateSkillBars = () => {
    const skillBars = document.querySelectorAll('.progress');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progress = entry.target;
                const width = progress.style.width;
                progress.style.width = '0%';
                setTimeout(() => {
                    progress.style.width = width;
                }, 500);
            }
        });
    });
    
    skillBars.forEach(bar => observer.observe(bar));
};

// Initialize skill bar animation
animateSkillBars();

// Contact form handling




const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    emailjs.sendForm('ooGijwizYzmlHs7a', 'template_x6obkjm', this)
      .then(function() {
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
      }, function(error) {
        alert('Oops! Something went wrong.');
      });
});












// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.service-card, .portfolio-item, .about-content');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElement = document.querySelector('.hero');
    const speed = scrolled * 0.5;
    
    if (parallaxElement) {
        parallaxElement.style.transform = `translateY(${speed}px)`;
    }
});
