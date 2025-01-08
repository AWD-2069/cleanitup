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

document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide');
  let currentIndex = 0;
  
  const changeSlide = () => {
      slides[currentIndex].classList.remove('active');
      currentIndex = (currentIndex + 1) % slides.length;
      slides[currentIndex].classList.add('active');
  };
  
  setInterval(changeSlide, 3000); // Change slide every 3 seconds
  });
