'use strict';

const userName = document.getElementById('name');
const email = document.getElementById('email');

const form = document.getElementById('form');

const messages = document.getElementById('error');

// show error function
function showError(input, message) {
  const inputControl = input;

  inputControl.className = 'form__input error';

  messages.textContent = message;
}

// shoe success function
function showSuccess(input) {
  const inputControl = input;

  inputControl.className = 'form__input success';
  messages.textContent = '';
}

const isEmailValid = (input) => {
  // eslint-disable-next-line
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return regex.test(input);
};

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (userName.value === '') {
    showError(userName, 'UserName is required');
  } else if (userName.value.length < 3 || userName.value.length > 15) {
    showError(userName, 'UserName must be at least 3 chsaracters');
  } else if (userName.value.length > 15) {
    showError(userName, 'UserName must be less than 15 characters');
  } else {
    showSuccess(userName);
  }

  if (email.value === '') {
    showError(email, 'Email is required');
  } else if (!isEmailValid(email.value)) {
    showError(email, 'Email is not valid');
  } else {
    showSuccess(email);
  }
});

userName.addEventListener('focus', () => {
  userName.classList.remove('error');
  userName.classList.remove('success');
  messages.textContent = '';
});

email.addEventListener('focus', () => {
  email.classList.remove('error');
  email.classList.remove('success');
  messages.textContent = '';
});
