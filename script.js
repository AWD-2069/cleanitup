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

const carousel = document.getElementById('carousel');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentIndex = 0;
const totalImages = carousel.children.length;

function updateCarousel() {
    const offset = -currentIndex * carousel.children[0].clientWidth;
    carousel.style.transform = `translateX(${offset}px)`;
}

function showNextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel();
}

function showPrevImage() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateCarousel();
}

// Automatic sliding every 3 seconds
setInterval(showNextImage, 3000);

// Add event listeners for buttons
nextButton.addEventListener('click', showNextImage);
prevButton.addEventListener('click', showPrevImage);
