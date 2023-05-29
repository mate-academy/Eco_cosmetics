'use strict';

const greyColor = '#828282';
const greenColor = '#344f10';
const redColor = '#EB5757';
const fieldHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--field-height'));

const minNameLength = 2;
const minMessageLength = 10;

const nameField = document.getElementById('name');
const inputEmail = document.getElementById('email');
const inputPhone = document.getElementById('phone');
const messageField = document.getElementById('message');
const submitButton = document.getElementById('send-button');

function paintElementValidation(element, isTrue) {
  if (element.value.length === 0) {
    element.style['border-bottom-color'] = greyColor;
  } else {
    paintElementValidationPart(element, isTrue);
  }
}

function paintElementValidationPart(element, isTrue) {
  if (isTrue) {
    element.style.color = greenColor;
    element.style['border-bottom-color'] = greenColor;
  } else {
    element.style.color = redColor;
    element.style['border-bottom-color'] = redColor;
  }
}

const regexpEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

function validateStringByRegexp(element, regexp) {
  return element.value.match(regexp);
}

function validateStringByLength(element, minValue) {
  return element.value.length >= minValue;
}

function validateEmailField(element, regexp) {
  return element.value.match(regexp);
}

function validatePhoneField(element) {
  return element.value.length === 14;
}

nameField.addEventListener('focusout', e => {
  paintElementValidation(e.target, validateStringByLength(e.target, minNameLength));
});

nameField.addEventListener('keyup', e => {
  const textLength = nameField.value.length;
  const maxValue = 32;

  if (textLength > maxValue) {
    nameField.value = nameField.value.slice(0, maxValue);
  }
});

inputEmail.addEventListener('focusout', e => {
  paintElementValidation(e.target, validateEmailField(e.target, regexpEmail));
});

inputPhone.addEventListener('input', e => {
  const x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);

  e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
});

inputPhone.addEventListener('focusout', e => {
  paintElementValidation(e.target, validatePhoneField(e.target, e.target.value === 14));
});

messageField.addEventListener('input', event => {
  event.target.style.height = 'auto';

  const scHeight = Math.min(Math.max(event.target.scrollHeight), fieldHeight * 3);

  event.target.style.height = `${scHeight}px`;
});

messageField.addEventListener('keyup', e => {
  const textLength = messageField.value.length;
  const maxValue = 300;

  if (textLength > maxValue) {
    messageField.value = messageField.value.slice(0, maxValue);
  }
});

messageField.addEventListener('focusout', e => {
  paintElementValidation(e.target, validateStringByLength(e.target, minMessageLength));
});

function submitValidation(element) {
  element.style.color = redColor;
  element.style['border-bottom-color'] = redColor;
  element.classList.add('form__input--error');

  setTimeout(() => {
    element.style.color = greenColor;
    element.style['border-bottom-color'] = greenColor;
    element.classList.remove('form__input--error');
  }, '1000');
}

submitButton.addEventListener('click', e => {
  e.preventDefault();

  if (!validateStringByLength(nameField, minNameLength)) {
    submitValidation(nameField);
  }

  if (!validateStringByRegexp(inputEmail, regexpEmail)) {
    submitValidation(inputEmail);
  }

  if (!validatePhoneField(inputPhone)) {
    submitValidation(inputPhone);
  }

  if (!validateStringByLength(messageField, minMessageLength)) {
    submitValidation(messageField);
  }

  if (validateStringByLength(nameField, minNameLength)
  && validateStringByRegexp(inputEmail, regexpEmail)
  && validatePhoneField(inputPhone)
  && validateStringByLength(messageField, minMessageLength)) {
    nameField.value = '';
    inputEmail.value = '';
    inputPhone.value = '';
    messageField.value = '';
  }
});
