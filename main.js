const emailNav = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const hamMenuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartIcon =document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');


emailNav.addEventListener('click', toggleDesktopMenu);
hamMenuIcon.addEventListener('click', toggleMobileMenu);
shoppingCartIcon.addEventListener('click', toggleCarritoAside);


function toggleDesktopMenu () {
  const isAsideClosed = aside.classList.contains('inactive');
  if (!isAsideClosed){
    aside.classList.add('inactive')
  }
  desktopMenu.classList.toggle('inactive');
}
function toggleMobileMenu() {
  const isAsideClosed = aside.classList.contains('inactive');
  if (!isAsideClosed){
    aside.classList.add('inactive')
  }
  mobileMenu.classList.toggle('inactive');
}
function toggleCarritoAside() {
  const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
  const isMobileMenuClosed = mobileMenu.classList.
  contains('inactive');

  if (!isMobileMenuClosed){
    mobileMenu.classList.add('inactive');
  }
  if (!isDesktopMenuClosed) {
    desktopMenu.classList.add('inactive');
  }
      aside.classList.toggle('inactive');

}