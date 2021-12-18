'use strict';

const body = document.querySelector('.page__body');
const menu = document.querySelector('#menu');
const onOpen = document.querySelector('.header__button-open');
const onClose = document.querySelector('.menu__button-close');
const menuLinks = document.querySelectorAll('.menu__link');

onOpen.addEventListener('click', () => {
  menu.classList.add('menu--opened');
  body.classList.add('page__body--with-menu');
});

onClose.addEventListener('click', () => {
  menu.classList.remove('menu--opened');
  body.classList.remove('page__body--with-menu');
});

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('menu--opened');
    body.classList.remove('page__body--with-menu');
  });
});
