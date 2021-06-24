'use strict';

const menu = document.querySelector('.menu');
const mobileNav = document.querySelector('.mobile-nav');
const mobileNavList = document.querySelector('.mobile-nav__list');

menu.addEventListener('click', () => {
  mobileNav.classList.toggle('mobile-nav--active');
  menu.classList.toggle('menu--active');
});

mobileNavList.addEventListener('click', () => {
  mobileNav.classList.toggle('mobile-nav--active');
  menu.classList.toggle('menu--active');
});
