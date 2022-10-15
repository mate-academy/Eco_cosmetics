'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.reset();
});

const input = document.querySelector('input[name="phone"]');

input.addEventListener('invalid', function(event) {
  if (event.target.validity.patternMismatch) {
    event.target.setCustomValidity('Please match the requested 068-123-45-67');
  }
});

input.addEventListener('change', function(event) {
  event.target.setCustomValidity('');
});
