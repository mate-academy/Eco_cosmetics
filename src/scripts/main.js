'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#shop') {
    document.body.classList.add('page__body--with-shop');
  } else {
    document.body.classList.remove('page__body--with-shop');
  }
});

const form = document.querySelector('.contact-us__form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  form.reset();

  window.location.href = '#go-to-top';
});
