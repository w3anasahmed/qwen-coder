// Smooth scroll enhancement for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const navHeight = document.querySelector('nav').offsetHeight;
            const sectionPosition = targetSection.offsetTop - navHeight;
            
            window.scrollTo({
                top: sectionPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Add animation on scroll for content boxes
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

// Observe all content boxes and cards
document.querySelectorAll('.content-box, .concept-card, .application-card, .real-life-example, .practice-problem').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Add interactive highlighting for practice problem solutions
document.querySelectorAll('.practice-problem details').forEach(detail => {
    detail.addEventListener('toggle', () => {
        if (detail.open) {
            detail.style.background = '#e8f5e9';
        } else {
            detail.style.background = 'white';
        }
    });
});

// Add copy functionality for formulas (if needed in future)
// Currently just adding a console log for demonstration
console.log('🧮 Calculus Tutorial loaded successfully!');
console.log('💡 Tip: Click on practice problems to reveal solutions');

// Active navigation highlighting based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.topic-section');
    const navLinks = document.querySelectorAll('nav a');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionBottom = sectionTop + section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.style.borderBottomColor = 'transparent';
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.style.borderBottomColor = '#764ba2';
            link.style.background = '#667eea';
            link.style.color = 'white';
        } else {
            link.style.background = 'transparent';
            link.style.color = '#2c3e50';
        }
    });
});

// Add tooltip effect for formula boxes
document.querySelectorAll('.formula-box').forEach(box => {
    box.title = 'Click to focus on this formula';
    box.style.cursor = 'pointer';
    
    box.addEventListener('click', () => {
        box.style.transform = 'scale(1.02)';
        setTimeout(() => {
            box.style.transform = 'scale(1)';
        }, 200);
    });
});

// Easter egg: Konami code for fun math fact
let konamiCode = [];
const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.keyCode);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        alert('🎉 Fun Fact: Did you know? The word "calculus" comes from the Latin word for "pebble", because ancient mathematicians used pebbles for counting!');
        konamiCode = [];
    }
});
