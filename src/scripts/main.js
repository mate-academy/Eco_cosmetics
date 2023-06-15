'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.getElementById('input_form');

form.addEventListener('submit', function handleSubmit(event) {
  event.preventDefault();

  form.reset();
});

const phoneInput = document.getElementById('input_form-phone');

phoneInput.addEventListener('input', () => {
  phoneInput.setCustomValidity('');
  phoneInput.checkValidity();
});

phoneInput.addEventListener('invalid', () => {
  if (phoneInput.value === '') {
    phoneInput.setCustomValidity('Enter phone number!');
  } else {
    phoneInput.setCustomValidity('Enter number in format: 123-456-7890');
  }
});
