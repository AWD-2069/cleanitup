// Toggle the mobile menu visibility
document.getElementById('menu-button').addEventListener('click', () => {
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.remove('hidden');
  } else {
      mobileMenu.classList.add('hidden');
  }
});

// Hide the mobile menu when a link is clicked
const menuLinks = document.querySelectorAll('#mobile-menu a');
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
      const mobileMenu = document.getElementById('mobile-menu');
      mobileMenu.classList.add('hidden');
  });
});

// Slideshow JavaScript
const slideshow = document.getElementById('slideshow');
const slides = slideshow.querySelectorAll('div[data-index]');
let currentIndex = 0;

function showNextSlide() {
    slides[currentIndex].classList.remove('opacity-100');
    slides[currentIndex].classList.add('opacity-0');
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.remove('opacity-0');
    slides[currentIndex].classList.add('opacity-100');
}

// Set interval for the slideshow
setInterval(showNextSlide, 3000); // Change every 5 seconds
