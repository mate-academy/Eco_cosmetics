'use strict';

const burgerMenu = document.querySelector('.burger-menu');
const navButton = document.querySelector('.header__burger-btn');
const togglerButton = document.querySelector('.header__burger-toggler');
const fixedBody = document.querySelector('body');

navButton.addEventListener('click', () => {
  togglerButton.classList.toggle('header__burger-toggler--active');
  burgerMenu.classList.toggle('burger-menu--show');
  fixedBody.classList.toggle('fixed');
});
