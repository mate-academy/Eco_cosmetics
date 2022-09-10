'use strict';

const form = document.querySelector('.form');
const inputs = document.querySelectorAll('.form__input');
const textarea = document.querySelector('.form__input--textarea');

function handler(event) {
  event.preventDefault();

  inputs.forEach(input => {
    input.value = '';
  });
}

form.addEventListener('submit', handler);

function autoResize() {
  this.style.height = '';
  this.style.height = this.scrollHeight + 'px';
}

textarea.addEventListener('input', autoResize, false);
