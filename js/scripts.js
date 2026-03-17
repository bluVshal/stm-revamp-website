// Navigation toggle for mobile
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.navbar')) {
            navMenu?.classList.remove('active');
            document.querySelectorAll('.has-dropdown').forEach(d => d.classList.remove('open'));
        }
    });

    // Mobile dropdown toggle
    document.querySelectorAll('.has-dropdown > a').forEach(function(link) {
        link.addEventListener('click', function(e) {
            if (window.innerWidth <= 968) {
                e.preventDefault();
                this.parentElement.classList.toggle('open');
            }
        });
    });

    // Initialize carousel if on home page
    if (document.querySelector('.hero-carousel')) {
        initCarousel();
    }

    // Initialize news slider if on home page
    if (document.querySelector('.news-slider')) {
        initNewsSlider();
    }
});

// Carousel functionality
let currentSlideIndex = 0;
let carouselInterval;

function initCarousel() {
    // Auto-advance carousel every 5 seconds
    carouselInterval = setInterval(() => {
        changeSlide(1);
    }, 5000);

    // Pause carousel on hover
    const carousel = document.querySelector('.hero-carousel');
    carousel.addEventListener('mouseenter', () => {
        clearInterval(carouselInterval);
    });

    carousel.addEventListener('mouseleave', () => {
        carouselInterval = setInterval(() => {
            changeSlide(1);
        }, 5000);
    });
}

function changeSlide(direction) {
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.indicator');
    
    // Remove active class from current slide and indicator
    slides[currentSlideIndex].classList.remove('active');
    indicators[currentSlideIndex].classList.remove('active');
    
    // Calculate new slide index
    currentSlideIndex += direction;
    
    // Wrap around if needed
    if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
    } else if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1;
    }
    
    // Add active class to new slide and indicator
    slides[currentSlideIndex].classList.add('active');
    indicators[currentSlideIndex].classList.add('active');
}

function currentSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.indicator');
    
    // Remove active class from all slides and indicators
    slides[currentSlideIndex].classList.remove('active');
    indicators[currentSlideIndex].classList.remove('active');
    
    // Set new slide index
    currentSlideIndex = index;
    
    // Add active class to new slide and indicator
    slides[currentSlideIndex].classList.add('active');
    indicators[currentSlideIndex].classList.add('active');
    
    // Reset interval
    clearInterval(carouselInterval);
    carouselInterval = setInterval(() => {
        changeSlide(1);
    }, 5000);
}

// News Slider functionality
let newsPosition = 0;

function initNewsSlider() {
    // Calculate initial settings
    updateNewsSlider();
}

function slideNews(direction) {
    const track = document.querySelector('.news-track');
    const cards = document.querySelectorAll('.news-card');
    const containerWidth = document.querySelector('.news-slider').offsetWidth;
    const cardWidth = cards[0].offsetWidth;
    const gap = 30;
    const cardTotalWidth = cardWidth + gap;
    
    // Calculate visible cards
    const visibleCards = Math.floor(containerWidth / cardTotalWidth);
    const maxPosition = Math.max(0, cards.length - visibleCards);
    
    // Update position
    newsPosition += direction;
    
    // Boundary checks
    if (newsPosition < 0) {
        newsPosition = 0;
    } else if (newsPosition > maxPosition) {
        newsPosition = maxPosition;
    }
    
    // Apply transform
    const translateX = -newsPosition * cardTotalWidth;
    track.style.transform = `translateX(${translateX}px)`;
}

function updateNewsSlider() {
    const track = document.querySelector('.news-track');
    if (track) {
        track.style.transform = 'translateX(0)';
        newsPosition = 0;
    }
}

// Reset news slider on window resize
let resizeTimer;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        updateNewsSlider();
    }, 250);
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Add scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.news-card, .article-card, .event-card, .past-event-card, .team-event-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Accordion functionality
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.accordions > li > a').forEach(function (toggle) {
        toggle.addEventListener('click', function (e) {
            e.preventDefault();
            var parent = this.parentElement;

            if (parent.classList.contains('active')) {
                parent.classList.remove('active');
            } else {
                // Close other accordions in the same list
                parent.parentElement.querySelectorAll(':scope > li.active').forEach(function (sibling) {
                    sibling.classList.remove('active');
                });
                parent.classList.add('active');
            }
        });
    });
});



/**************************************************** */

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const waveHeight = window.innerHeight / 16;

  sections.forEach((section, index) => {
    const width = section.offsetWidth;
    const height = section.offsetHeight;
    const nextSection = section.nextElementSibling;

    section.style.zIndex = sections.length - index;

    if (nextSection?.tagName === "SECTION") {
      nextSection.style.marginTop = `-${waveHeight}px`;
    }

    if (!section.classList.contains("wave-divider-bottom")) return;

    let wavePathData = "M0 " + (height - waveHeight / 2) + " ";
    for (let x = 0; x <= width; x++) {
      const y =
        waveHeight / 2 +
        (waveHeight / 2) *
          Math.sin((x / width) * ((width * 2) / height) * Math.PI);
      wavePathData += `L${x} ${height - y} `;
    }
    wavePathData += `L${width} 0 L0 0 Z`;

    section.style.clipPath = `path('${wavePathData}')`;
  });
});

window.addEventListener("resize", function () {
  this.document.dispatchEvent(new Event("DOMContentLoaded"));
});


/******************************************************** */

// Toggle open-positions slide down
document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('toggle-positions-btn');
    const openPositions = document.getElementById('open-positions');

    if (toggleBtn && openPositions) {
        toggleBtn.addEventListener('click', function () {
            if (openPositions.style.maxHeight && openPositions.style.maxHeight !== '0px') {
                openPositions.style.maxHeight = '0px';
            } else {
                openPositions.style.maxHeight = openPositions.scrollHeight + 'px';
            }
        });
    }
});

let map;
async function initMap() {
    const { Map, RenderingType } = (await google.maps.importLibrary('maps'));
    map = new Map(document.getElementById('map'), {
        center: { lat:-20.243261 , lng:57.487916 },
        zoom: 16,
        renderingType: RenderingType.VECTOR,
    });
}
initMap();
