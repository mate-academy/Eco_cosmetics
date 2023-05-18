'use strict';

const menu = document.querySelector('.menu');
const menuOpener = document.querySelector('.icon--burger');
const cross = document.querySelector('.icon--cross');
const menuLinks = document.querySelectorAll('.menu__link');

const openMenu = () => {
  menu.classList.add('menu--open');
  document.body.classList.add('page__body--with-menu');
};

const closeMenu = () => {
  menu.classList.remove('menu--open');
  document.body.classList.remove('page__body--with-menu');
};

menuOpener.addEventListener('click', openMenu);
cross.addEventListener('click', closeMenu);

menuLinks.forEach(item => item.addEventListener('click', closeMenu));
