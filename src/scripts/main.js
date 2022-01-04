'use strict';

const form = document.querySelector('.form');
const inputs = document.querySelectorAll('.contact-us__input');
const textarea = document.querySelector('.text-area');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  inputs.forEach((elem) => {
    elem.value = '';
  });

  textarea.value = '';
});
