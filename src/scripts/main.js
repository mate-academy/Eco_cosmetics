'use strict';

const form = document.querySelector('.contact-us__form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.reset();
});

window.addEventListener('hashchange', () => {
  if (
    window.location.hash === '#menu'
    || window.location.hash === '#shop-card'
    || window.location.hash === '#shipping'
    || window.location.hash === '#payment'
    || window.location.hash === '#confirm'
  ) {
    document.body.classList.add('page__body--with--menu');
  } else {
    document.body.classList.remove('page__body--with--menu');
  }
});
