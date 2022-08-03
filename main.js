const emailNav = document.querySelector('.navbar-email')
const menuDesktop = document.querySelector('.inactive');

emailNav.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu () {
  menuDesktop.classList.toggle('inactive')
}