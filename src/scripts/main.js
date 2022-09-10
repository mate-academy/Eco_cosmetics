'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page_body-with-menu');
  } else {
    document.body.classList.remove('page_body-with-menu');
  }
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#shipping') {
    document.body.classList.add('page_body-with-shipping');
  } else {
    document.body.classList.remove('page_body-with-shipping');
  }
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#products') {
    document.body.classList.add('page_body-with-products');
  } else {
    document.body.classList.remove('page_body-with-products');
  }
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#payment') {
    document.body.classList.add('page_body-with-payment');
  } else {
    document.body.classList.remove('page_body-with-payment');
  }
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#confirmation') {
    document.body.classList.add('page_body-with-confirmation');
  } else {
    document.body.classList.remove('page_body-with-confirmation');
  }
});

const form = document.querySelector('#form');

form.addEventListener('submit', event => {
  event.preventDefault();
  event.target.reset();
});
