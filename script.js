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
