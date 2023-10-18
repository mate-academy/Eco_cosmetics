'use strict';

const body = document.querySelector('body');
const menu = document.querySelector('.menu');
const menuCloser = document.querySelector('.menu__closer');
const menuOpener = document.querySelector('.menu__opener');

menuOpener.addEventListener('click', (event) => {
  menu.classList.add('menu--open');
  body.classList.add('menu-open');
  event.preventDefault();
}, 1000);

menuCloser.addEventListener('click', (event) => {
  menu.classList.remove('menu--open');
  body.classList.remove('menu-open');
  event.preventDefault();
}, 1000);
