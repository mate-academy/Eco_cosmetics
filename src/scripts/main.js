'use strict';

const toggler = document.querySelector('#menu-toggler');
const page = document.querySelector('.page');
const menuIcon = document.querySelector('.header__menu-icon');
const menu = document.querySelector('.menu');
// const menuNavLink = document.querySelector('.menu__nav-link');

const toggleMenu = () => {
  page.classList.toggle('page--fixed');
  menuIcon.classList.toggle('header__menu-icon--active');
  menu.classList.toggle('menu--active');
};

toggler.addEventListener('click', toggleMenu);
menu.addEventListener('click', toggleMenu);
