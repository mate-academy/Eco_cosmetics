'use strict';

const burger = document.querySelector('.burger-menu');
const mobileNav = document.querySelector('.mobile-nav');
const mobileList = document.querySelector('.mobile-nav__list');

burger.addEventListener('click', () => {
  mobileNav.classList.toggle('mobile-nav--active');
  burger.classList.toggle('burger-menu--active');
});

mobileList.addEventListener('click', () => {
  mobileNav.classList.remove('mobile-nav--active');
  burger.classList.remove('burger-menu--active');
});
