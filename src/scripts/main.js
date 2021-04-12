'use strict';

const burgerToggler = document.querySelector('.burger-toggler');
const nav = document.querySelector('.nav');
const button = document.querySelector('#toggler');

button.addEventListener('click', () => {
  burgerToggler.classList.toggle('burger-toggler--active');
  nav.classList.toggle('nav--active');
});

const newTitleText = 'Brand of<br>eco-cosmetics and magic candles';
const mediaQuery = window.matchMedia('(min-width: 800px)');

if (mediaQuery.matches) {
  document.querySelector('.header__title').innerHTML = newTitleText;
}
