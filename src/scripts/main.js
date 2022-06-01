/* eslint-disable no-unused-vars */
'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

// eslint-disable-next-line no-undef
const swiper = new Swiper('.swiper', {

  direction: 'horizontal',
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function(index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  },
});

function hideFunction() {
  const x = document.getElementsByClassName('content-001');

  x.style.display = 'none';
}

const form = document.querySelector('.contact__form-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  form.reset();
});
