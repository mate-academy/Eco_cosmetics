'use strict';

const nav = document.querySelector('nav');

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
    nav.classList.add('nav--visible');
  } else {
    document.body.classList.remove('page__body--with-menu');
    nav.classList.remove('nav--visible');
  }
});

const formInputs = document.querySelectorAll('.form__input');

document.querySelector('.form').addEventListener('submit', (event) => {
  event.preventDefault();

  for (const input of formInputs) {
    input.value = '';
  }
}, false);
