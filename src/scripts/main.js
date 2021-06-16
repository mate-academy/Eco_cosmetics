'use strict';

const menu = document.querySelector('.menu');
const mobileNav = document.querySelector('.mobile-nav');

menu.addEventListener('click', () => {
  mobileNav.classList.toggle('mobile-nav--active');
  menu.classList.toggle('menu--active');
});
