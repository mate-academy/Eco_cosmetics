'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#cart-1') {
    document.body.classList.add('page__body--with-cart');
  } else {
    document.body.classList.remove('page__body--with-cart');
  }
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#cart-2') {
    document.body.classList.add('page__body--with-cart');
  } else {
    document.body.classList.remove('page__body--with-cart');
  }
});

const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.reset();
});
