'use strict';

const toggler = document.querySelector('.header__icon');
const navList = document.querySelector('.nav__list');
const nav = document.querySelector('.nav');
const body = document.querySelector('.page__content');

toggler.addEventListener('click', () => {
  nav.classList.toggle('nav__shown');
  toggler.classList.toggle('header__icon--closer');
  body.classList.toggle('header__hidden');
});

navList.addEventListener('click', () => {
  nav.classList.remove('nav__shown');
  toggler.classList.remove('header__icon--closer');
  body.classList.remove('header__hidden');
});
