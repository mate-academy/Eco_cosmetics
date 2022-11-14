'use strict';

const wordsArray = ['face', 'body', 'hair', 'candles'];

// eslint-disable-next-line no-new, no-undef
new Swiper('.swiper-container', {
  pagination: {
    el: '.slider__list',
    clickable: true,
    renderBullet: function(index, className) {
      return '<span class="' + className + '">'
      + wordsArray[index] + '</span>';
    },
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
  speed: 500,
});

const list = document.querySelector('.slider__list');

list.addEventListener('mouseover', (event) => {
  const link = event.target.closest('.slider__item');

  link.classList.add('slider__item-hover');
});

const form = document.querySelector('.contacts__form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.reset();
});

const body = document.querySelector('.page__body');

function scrollChange() {
  const hash = window.location.hash;

  if ((hash === '#menu')) {
    body.style.overflow = 'hidden';
  } else {
    body.style.overflow = '';
  }
}

window.onhashchange = scrollChange;

scrollChange();
