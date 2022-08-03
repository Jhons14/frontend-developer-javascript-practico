const emailNav = document.querySelector('.navbar-email');
const menuDesktop = document.querySelector('.inactive');
const hamMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

emailNav.addEventListener('click', toggleDesktopMenu);
hamMenu.addEventListener('click', toggleMobileMenu);

function toggleDesktopMenu () {
  menuDesktop.classList.toggle('inactive')
}
function toggleMobileMenu() {
  mobileMenu.classList.toggle('inactive');
}