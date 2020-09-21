'use strict';

const html = document.querySelector('html');
const burgerItem = document.querySelector('.burger');
const menu = document.querySelector('.header__nav');
const closeItem = document.querySelector('.close-burger');
const navItem = document.querySelector('.nav__item');

burgerItem.addEventListener('click', () => {
  menu.classList.add('header__nav--active');
  html.style.overflow = 'hidden';
});

closeItem.addEventListener('click', () => {
  menu.classList.remove('header__nav--active');
  html.style.overflow = 'scroll';
});

navItem.addEventListener('click', () => {
  menu.classList.remove('header__nav--active');
  html.style.overflow = 'scroll';
});
