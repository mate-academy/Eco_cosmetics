'use strict';

const form = document.querySelector('.contact-us__form');
const inputs = document.querySelectorAll('.form-field');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // eslint-disable-next-line no-return-assign
  inputs.forEach(elem => elem.value = '');
});
