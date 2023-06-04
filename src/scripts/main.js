/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
'use strict';

window.addEventListener('hashchange', () => {
  const arrowRight = document.querySelector('#button1');
  const arrowLeft = document.querySelector('#button2');

  if (window.location.hash === '#menu'
    || window.location.hash === '#card'
    || window.location.hash === '#shop'
    || window.location.hash === '#contact-us'
    || window.location.hash === '#about-brand') {
    arrowRight.classList.add('swiper-button-next--with-menu');
    arrowLeft.classList.add('swiper-button-prev--with-menu');
  } else {
    arrowRight.classList.remove('swiper-button-next--with-menu');
    arrowLeft.classList.remove('swiper-button-prev--with-menu');
  }

  if (window.location.hash === '#confirmation'
    || window.location.hash === '#shipping'
    || window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.querySelector('.form');

const inputs = document.querySelectorAll('.form-field');

function handler(event) {
  event.preventDefault();

  inputs.forEach(input => {
    input.value = '';
  });
}

form.addEventListener('submit', handler);

const bodyLink = document.querySelector('a[href="#body"]');
const faceLink = document.querySelector('a[href="#face"]');
const hairLink = document.querySelector('a[href="#hair"]');
const candlesLink = document.querySelector('a[href="#candles"]');

const cardPhoto1 = document.querySelector('#photo-1');
const cardPhoto2 = document.querySelector('#photo-2');
const cardPhoto3 = document.querySelector('#photo-3');

const swiper1 = document.querySelector('#swiper-1');
const swiper2 = document.querySelector('#swiper-2');
const swiper3 = document.querySelector('#swiper-3');

const nameFirst = document.querySelector('.shop__card__description-name--1');
const priceFirst = document.querySelector('.shop__card__description-price--1');
const nameSecond = document.querySelector('.shop__card__description-name--2');
const priceSecond = document.querySelector('.shop__card__description-price--2');
const nameThird = document.querySelector('.shop__card__description-name--3');
const priceThird = document.querySelector('.shop__card__description-price--3');

bodyLink.addEventListener('click', function(event) {
  event.preventDefault();

  nameFirst.textContent = 'body oil';
  priceFirst.textContent = '200 UAH';

  nameSecond.textContent = 'organic soap';
  priceSecond.textContent = '250 UAH';

  nameThird.textContent = 'bath soak';
  priceThird.textContent = '200 UAH';

  cardPhoto1.classList = [];
  cardPhoto1.classList.add('shop__card-photo', 'shop__card-photo--body-oil');

  cardPhoto2.classList = [];
  cardPhoto2.classList.add('shop__card-photo', 'shop__card-photo--org-soap');

  cardPhoto3.classList = [];

  cardPhoto3.classList.add('shop__card-photo',
    'shop__card-photo--3',
    'shop__card-photo--bath-soak');

  swiper1.classList = [];

  swiper1.classList.add('swiper-slide', 'swiper__card-photo',
    'swiper__card-photo--body-oil');

  swiper2.classList = [];

  swiper2.classList.add('swiper-slide', 'swiper__card-photo',
    'swiper__card-photo--org-soap');

  swiper3.classList = [];

  swiper3.classList.add('swiper-slide', 'swiper__card-photo',
    'swiper__card-photo--bath-soak');
});

hairLink.addEventListener('click', (event) => {
  event.preventDefault();

  nameFirst.textContent = 'organic shampoo';
  priceFirst.textContent = '150 UAH';

  nameSecond.textContent = 'lavender shampoo';
  priceSecond.textContent = '200 UAH';

  nameThird.textContent = 'eco shampoo';
  priceThird.textContent = '250 UAH';

  cardPhoto1.classList = [];
  cardPhoto1.classList.add('shop__card-photo', 'shop__card-photo--org-shampoo');

  cardPhoto2.classList = [];
  cardPhoto2.classList.add('shop__card-photo', 'shop__card-photo--lav-shampoo');

  cardPhoto3.classList = [];

  cardPhoto3.classList.add('shop__card-photo', 'shop__card-photo--3',
    'shop__card-photo--eco-shampoo');

  swiper1.classList = [];

  swiper1.classList.add('swiper-slide', 'swiper__card-photo',
    'swiper__card-photo--org-shampoo');

  swiper2.classList = [];

  swiper2.classList.add('swiper-slide', 'swiper__card-photo',
    'swiper__card-photo--lav-shampoo');

  swiper3.classList = [];

  swiper3.classList.add('swiper-slide', 'swiper__card-photo',
    'swiper__card-photo--eco-shampoo');
});

candlesLink.addEventListener('click', (event) => {
  event.preventDefault();

  nameFirst.textContent = 'jasmine absolute candle';
  priceFirst.textContent = '170 UAH';

  nameSecond.textContent = 'orange hint candle';
  priceSecond.textContent = '250 UAH';

  nameThird.textContent = 'rosemary candle';
  priceThird.textContent = '200 UAH';

  cardPhoto1.classList = [];
  cardPhoto1.classList.add('shop__card-photo', 'shop__card-photo--jasmine-abs');

  cardPhoto2.classList = [];

  cardPhoto2.classList.add('shop__card-photo',
    'shop__card-photo--orange-candle');

  cardPhoto3.classList = [];

  cardPhoto3.classList.add('shop__card-photo', 'shop__card-photo--3',
    'shop__card-photo--rosemary-candle');

  swiper1.classList = [];

  swiper1.classList.add('swiper-slide', 'swiper__card-photo',
    'swiper__card-photo--jasmine-abs');

  swiper2.classList = [];

  swiper2.classList.add('swiper-slide', 'swiper__card-photo',
    'swiper__card-photo--orange-candle');

  swiper3.classList = [];

  swiper3.classList.add('swiper-slide', 'swiper__card-photo',
    'swiper__card-photo--rosemary-candle');
});

faceLink.addEventListener('click', (event) => {
  event.preventDefault();
  nameFirst.textContent = 'face cream';
  priceFirst.textContent = '300 UAH';

  nameSecond.textContent = 'organic lip balm';
  priceSecond.textContent = '250 UAH';

  nameThird.textContent = `Lavish Face Cream Deeply`
    + `Moisturizing Non Comedogenic`;
  priceThird.textContent = '400 UAH';

  cardPhoto1.classList = [];
  cardPhoto1.classList.add('shop__card-photo', 'shop__card-photo--face-cream');

  cardPhoto2.classList = [];
  cardPhoto2.classList.add('shop__card-photo', 'shop__card-photo--lip-balm');

  cardPhoto3.classList = [];

  cardPhoto3.classList.add('shop__card-photo', 'shop__card-photo--3',
    'shop__card-photo--moisturizing');

  swiper1.classList = [];

  swiper1.classList.add('swiper-slide', 'swiper__card-photo',
    'swiper__card-photo--face-cream');

  swiper2.classList = [];

  swiper2.classList.add('swiper-slide', 'swiper__card-photo',
    'swiper__card-photo--lip-balm');

  swiper3.classList = [];

  swiper3.classList.add('swiper-slide', 'swiper__card-photo',
    'swiper__card-photo--moisturizing');
});

const swiper = new Swiper('.mySwiper', {
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
  },
  mousewheel: true,
  keyboard: true,
});
