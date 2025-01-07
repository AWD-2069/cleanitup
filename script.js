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

function carousel() {
  return {
    currentIndex: 0, // Track the index of the current image
    images: [
      'https://via.placeholder.com/600x300?text=Slide+1',
      'https://via.placeholder.com/600x300?text=Slide+2',
      'https://via.placeholder.com/600x300?text=Slide+3',
    ],
    interval: null,
    startAutoPlay() {
        this.interval = setInterval(() => {
            this.next();
        }, 3000); // Change every 3 seconds
    },
    stopAutoPlay() {
        clearInterval(this.interval);
    },
    // Method to go to the next image
    next() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    // Method to go to the previous image
    prev() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
    init() {
        this.startAutoPlay();
    }
  };
}
