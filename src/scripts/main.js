'use strict';

const form = document.querySelector('.contact__form');
const shippingForm = document.querySelector('.shipping__form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.reset();
});

shippingForm.addEventListener('submit', (event) => {
  event.preventDefault();
  shippingForm.reset();
  window.location.hash = '#payment';
});

const shopMenu = document.querySelector('.shop__menu');
const shopLinks = document.getElementsByClassName('shop__link');

shopMenu.addEventListener('click', (e) => {
  for (const item of [...shopLinks]) {
    item.classList.remove('shop__link--active');
  };

  e.target.classList.add('shop__link--active');
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu'
    || window.location.hash === '#shipping'
    || window.location.hash === '#payment'
    || window.location.hash === '#confirmation') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
