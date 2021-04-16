'use strict';

// Burger-Menu
const burgerToggler = document.querySelector('.burger-toggler');
const nav = document.querySelector('.nav');
const button = document.querySelector('#toggler');

button.addEventListener('click', () => {
  burgerToggler.classList.toggle('burger-toggler--active');
  nav.classList.toggle('nav--active');
});

// Add <br> to title
const newTitleText = 'Brand of<br>eco-cosmetics and magic candles';
const mediaQuery = window.matchMedia('(min-width: 800px)');

if (mediaQuery.matches) {
  document.querySelector('.header__title').innerHTML = newTitleText;
}

// Changing store section

// First section
const faceLabel = document.querySelector('#store-sections-label-1');
const faceSection = document.querySelector(
  '.section-shop__grid-container--face'
);

// Second section
const bodyLabel = document.querySelector('#store-sections-label-2');
const bodySection = document.querySelector(
  '.section-shop__grid-container--body'
);

// Third section
const hairLabel = document.querySelector('#store-sections-label-3');
const hairSection = document.querySelector(
  '.section-shop__grid-container--hair'
);

// Fourth section
const candleLabel = document.querySelector('#store-sections-label-4');
const candleSection = document.querySelector(
  '.section-shop__grid-container--candles'
);

faceLabel.addEventListener('click', () => {
  faceSection.classList.add('section-shop__grid-container--active');
  bodySection.classList.remove('section-shop__grid-container--active');
  hairSection.classList.remove('section-shop__grid-container--active');
  candleSection.classList.remove('section-shop__grid-container--active');
});

bodyLabel.addEventListener('click', () => {
  faceSection.classList.remove('section-shop__grid-container--active');
  bodySection.classList.add('section-shop__grid-container--active');
  hairSection.classList.remove('section-shop__grid-container--active');
  candleSection.classList.remove('section-shop__grid-container--active');
});

hairLabel.addEventListener('click', () => {
  faceSection.classList.remove('section-shop__grid-container--active');
  bodySection.classList.remove('section-shop__grid-container--active');
  hairSection.classList.add('section-shop__grid-container--active');
  candleSection.classList.remove('section-shop__grid-container--active');
});

candleLabel.addEventListener('click', () => {
  faceSection.classList.remove('section-shop__grid-container--active');
  bodySection.classList.remove('section-shop__grid-container--active');
  hairSection.classList.remove('section-shop__grid-container--active');
  candleSection.classList.add('section-shop__grid-container--active');
});
