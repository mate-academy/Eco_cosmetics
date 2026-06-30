import '../styles/main.scss';

'use strict';

const form = document.querySelector('.contact__form');

if (form) {
  form.addEventListener('submit', event => {
    event.preventDefault();
    form.reset();
  });
}