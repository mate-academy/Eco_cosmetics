'use strict';

const html = document.querySelector('html');
const burgerItem = document.querySelector('.burger');
const menu = document.querySelector('.header__nav');
const closeItem = document.querySelector('.close-burger');
const navList = document.querySelector('.nav__list');

burgerItem.addEventListener('click', () => {
  menu.classList.add('header__nav--active');
  html.style.overflow = 'hidden';
});

closeItem.addEventListener('click', () => {
  menu.classList.remove('header__nav--active');
  html.style.overflow = 'scroll';
});

navList.addEventListener('click', () => {
  menu.classList.remove('header__nav--active');
  html.style.overflow = 'scroll';
});
