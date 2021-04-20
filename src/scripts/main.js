'use strict';

const page = document.querySelector('.page');
const toggler = document.querySelector('.header__menu-toggler');
const menu = document.querySelector('.header__nav');

const toggleMenu = () => {
  toggler.classList.toggle('header__menu-toggler--active');
  menu.classList.toggle('header__nav--active');
  page.classList.toggle('page--fixed');
};

toggler.addEventListener('click', toggleMenu);
menu.addEventListener('click', toggleMenu);
