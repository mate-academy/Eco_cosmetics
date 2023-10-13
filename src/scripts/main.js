'use strict';

// eslint-disable-next-line no-unused-vars, no-undef
const swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  centeredSlides: false,
  grabCursor: true,
  loop: true,
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

const form = document.querySelector('.form');
const inputs = document.querySelectorAll('.form__input');
const textarea = document.querySelector('.form__input--textarea');

function handler(event) {
  event.preventDefault();

  inputs.forEach(input => {
    input.value = '';
  });
}

form.addEventListener('submit', handler);

function autoResize() {
  this.style.height = '';
  this.style.height = this.scrollHeight + 'px';
}

textarea.addEventListener('input', autoResize, false);
