'use strict';

const { default: Swiper } = require('swiper');

const swiper = document.querySelector('.mySwiper');

// eslint-disable-next-line no-unused-vars
const mySwiper = new Swiper(swiper, {
  speed: 400,
  noSwiping: false,
  slidesPerView: 1,

  breakpoints: {
    744: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1280: {
      slidesPerView: 'auto',
      spaceBetween: 20,
      allowTouchMove: false,
    },
  },
});
