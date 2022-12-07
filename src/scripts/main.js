'use strict';

document.querySelector('#payment_form').addEventListener('submit', function() {
  const choose = document.querySelector('#payment_form').reportValidity();

  if (choose === true) {
    document.getElementById('payment_form').reset();
  };

  return window.location.replace('#confirmation');
});

const green = document.querySelectorAll('.store__link');

// change active link in section store

green.forEach((links) => {
  links.addEventListener('click', function() {
    green.forEach(link => {
      link.classList.remove('store__active');
    });

    links.classList.add('store__active');
  });
});

// change border and text color according to condition (section contact-us)

const fieldName = document.querySelector('#contact-us_name');

fieldName.addEventListener('blur', function() {
  const fieldInvalid
    = fieldName.classList.contains('contact-us__field--invalid');

  if (fieldInvalid === false && fieldName.value) {
    fieldName.classList.add('contact-us__field--complete');
  }

  fieldName.classList.remove('contact-us__field--focus');
});

fieldName.addEventListener('focus', function() {
  fieldName.classList.add('contact-us__field--focus');
});

fieldName.addEventListener('input', () => {
  const fieldInvalid
    = fieldName.classList.contains('contact-us__field--invalid');
  const fieldComplete
    = fieldName.classList.contains('contact-us__field--complete');
  const message = document.getElementById('contact_name_message');

  if (fieldInvalid || !fieldName.value) {
    fieldName.classList.remove('contact-us__field--invalid');
    message.textContent = '';
  } else if (fieldComplete) {
    fieldName.classList.remove('contact-us__field--complete');
  }
});

const fieldEmail = document.querySelector('#contact-us_email');

fieldEmail.addEventListener('blur', function() {
  const fieldInvalid
    = fieldEmail.classList.contains('contact-us__field--invalid');

  if (fieldInvalid === false && fieldEmail.value) {
    fieldEmail.classList.add('contact-us__field--complete');
  }

  fieldEmail.classList.remove('contact-us__field--focus');
});

fieldEmail.addEventListener('focus', function() {
  fieldEmail.classList.add('contact-us__field--focus');
});

fieldEmail.addEventListener('input', () => {
  const fieldInvalid
    = fieldEmail.classList.contains('contact-us__field--invalid');
  const fieldComplete
    = fieldEmail.classList.contains('contact-us__field--complete');
  const message = document.getElementById('contact_email_message');

  if (fieldInvalid || !fieldEmail.value) {
    fieldEmail.classList.remove('contact-us__field--invalid');
    message.textContent = '';
  } else if (fieldComplete) {
    fieldEmail.classList.remove('contact-us__field--complete');
  }
});

const fieldPhone = document.querySelector('#contact-us_phone');

fieldPhone.addEventListener('blur', function() {
  const fieldInvalid
    = fieldPhone.classList.contains('contact-us__field--invalid');

  if (fieldInvalid === false && fieldPhone.value) {
    fieldPhone.classList.add('contact-us__field--complete');
  }

  fieldPhone.classList.remove('contact-us__field--focus');
});

fieldPhone.addEventListener('focus', function() {
  fieldPhone.classList.add('contact-us__field--focus');
});

fieldPhone.addEventListener('input', () => {
  const fieldInvalid
    = fieldPhone.classList.contains('contact-us__field--invalid');
  const fieldComplete
    = fieldPhone.classList.contains('contact-us__field--complete');
  const message = document.getElementById('contact_phone_message');

  if (fieldInvalid || !fieldPhone.value) {
    fieldPhone.classList.remove('contact-us__field--invalid');
    message.textContent = '';
  } else if (fieldComplete) {
    fieldPhone.classList.remove('contact-us__field--complete');
  }
});

const fieldMessage = document.querySelector('#contact-us_message');

fieldMessage.addEventListener('blur', function() {
  const fieldInvalid
    = fieldMessage.classList.contains('contact-us__field--invalid');

  if (fieldInvalid === false && fieldMessage.value) {
    fieldMessage.classList.add('contact-us__field--complete');
  }

  fieldMessage.classList.remove('contact-us__field--focus');
});

fieldMessage.addEventListener('focus', function() {
  fieldMessage.classList.add('contact-us__field--focus');
});

fieldMessage.addEventListener('input', () => {
  const fieldInvalid
    = fieldMessage.classList.contains('contact-us__field--invalid');
  const fieldComplete
    = fieldMessage.classList.contains('contact-us__field--complete');
  const message = document.getElementById('contact_message_message');

  if (fieldInvalid) {
    fieldMessage.classList.remove('contact-us__field--invalid');
    message.textContent = '';
  } else if (fieldComplete) {
    fieldMessage.classList.remove('contact-us__field--complete');
  }
});

// change border and text color according to condition (section shipping)

const pointName = document.querySelector('#name');

pointName.addEventListener('blur', function() {
  const fieldInvalid = pointName.classList.contains('shipping__point--invalid');

  if (fieldInvalid === false && pointName.value) {
    pointName.classList.add('shipping__point--complete');
  }

  pointName.classList.remove('shipping__point--focus');
});

pointName.addEventListener('focus', function() {
  pointName.classList.add('shipping__point--focus');
});

pointName.addEventListener('input', () => {
  const fieldInvalid
    = pointName.classList.contains('shipping__point--invalid');
  const fieldComplete
    = pointName.classList.contains('shipping__point--complete');
  const message = document.getElementById('name-message');

  if (fieldInvalid || !pointName.value) {
    pointName.classList.remove('shipping__point--invalid');
    message.textContent = '';
  } else if (fieldComplete) {
    pointName.classList.remove('shipping__point--complete');
  }
});

const pointEmail = document.querySelector('#email');

pointEmail.addEventListener('blur', function() {
  const fieldInvalid
    = pointEmail.classList.contains('shipping__point--invalid');

  if (fieldInvalid === false && pointEmail.value) {
    pointEmail.classList.add('shipping__point--complete');
  }

  pointEmail.classList.remove('shipping__point--focus');
});

pointEmail.addEventListener('focus', function() {
  pointEmail.classList.add('shipping__point--focus');
});

pointEmail.addEventListener('input', () => {
  const fieldInvalid
    = pointEmail.classList.contains('shipping__point--invalid');
  const fieldComplete
    = pointEmail.classList.contains('shipping__point--complete');
  const message = document.getElementById('email-message');

  if (fieldInvalid || !pointEmail.value) {
    pointEmail.classList.remove('shipping__point--invalid');
    message.textContent = '';
  } else if (fieldComplete) {
    pointEmail.classList.remove('shipping__point--complete');
  }
});

const pointCountry = document.querySelector('#country');

pointCountry.addEventListener('blur', function() {
  const fieldInvalid
    = pointCountry.classList.contains('shipping__point--invalid');

  if (fieldInvalid === false && pointCountry.value) {
    pointCountry.classList.add('shipping__point--complete');
  }

  pointCountry.classList.remove('shipping__point--focus');
});

pointCountry.addEventListener('focus', function() {
  pointCountry.classList.add('shipping__point--focus');
});

pointCountry.addEventListener('input', () => {
  const fieldInvalid
    = pointCountry.classList.contains('shipping__point--invalid');
  const fieldComplete
    = pointCountry.classList.contains('shipping__point--complete');
  const message = document.getElementById('country-message');

  if (fieldInvalid || !pointCountry.value) {
    pointCountry.classList.remove('shipping__point--invalid');
    message.textContent = '';
  } else if (fieldComplete) {
    pointCountry.classList.remove('shipping__point--complete');
  }
});

const pointCity = document.querySelector('#city');

pointCity.addEventListener('blur', function() {
  const fieldInvalid = pointCity.classList.contains('shipping__point--invalid');

  if (fieldInvalid === false && pointCity.value) {
    pointCity.classList.add('shipping__point--complete');
  }

  pointCity.classList.remove('shipping__point--focus');
});

pointCity.addEventListener('focus', function() {
  pointCity.classList.add('shipping__point--focus');
});

pointCity.addEventListener('input', () => {
  const fieldInvalid = pointCity.classList.contains('shipping__point--invalid');
  const fieldComplete
    = pointCity.classList.contains('shipping__point--complete');
  const message = document.getElementById('city-message');

  if (fieldInvalid || !pointCity.value) {
    pointCity.classList.remove('shipping__point--invalid');
    message.textContent = '';
  } else if (fieldComplete) {
    pointCity.classList.remove('shipping__point--complete');
  }
});

const pointCode = document.querySelector('#code');

pointCode.addEventListener('blur', function() {
  const fieldInvalid = pointCode.classList.contains('shipping__point--invalid');

  if (fieldInvalid === false && pointCode.value) {
    pointCode.classList.add('shipping__point--complete');
  }

  pointCode.classList.remove('shipping__point--focus');
});

pointCode.addEventListener('focus', function() {
  pointCode.classList.add('shipping__point--focus');
});

pointCode.addEventListener('input', () => {
  const fieldInvalid = pointCode.classList.contains('shipping__point--invalid');
  const fieldComplete
    = pointCode.classList.contains('shipping__point--complete');
  const message = document.getElementById('code-message');

  if (fieldInvalid || !pointCode.value) {
    pointCode.classList.remove('shipping__point--invalid');
    message.textContent = '';
  } else if (fieldComplete) {
    pointCode.classList.remove('shipping__point--complete');
  }
});

const pointAddress = document.querySelector('#address');

pointAddress.addEventListener('blur', function() {
  const fieldInvalid
    = pointAddress.classList.contains('shipping__point--invalid');

  if (fieldInvalid === false && pointAddress.value) {
    pointAddress.classList.add('shipping__point--complete');
  }

  pointAddress.classList.remove('shipping__point--focus');
});

pointAddress.addEventListener('focus', function() {
  pointAddress.classList.add('shipping__point--focus');
});

pointAddress.addEventListener('input', () => {
  const fieldInvalid
    = pointAddress.classList.contains('shipping__point--invalid');
  const fieldComplete
    = pointAddress.classList.contains('shipping__point--complete');
  const message = document.getElementById('address-message');

  if (fieldInvalid) {
    pointAddress.classList.remove('shipping__point--invalid');
    message.textContent = '';
  } else if (fieldComplete) {
    pointAddress.classList.remove('shipping__point--complete');
  }
});

// show error or submit the form in contact-us section

const itemName = document.querySelector('#contact-us_name');
const itemEmail = document.querySelector('#contact-us_email');
const itemPhone = document.querySelector('#contact-us_phone');
const itemMessage = document.querySelector('#contact-us_message');

const form = document.querySelector('#form_contact-us');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const doesNameValid = checkName();
  const doesEmailValid = checkEmail();
  const doesPhoneValid = checkPhone();
  const doesMessageValid = checkMessage();

  const isFormValid = doesNameValid
      && doesEmailValid
      && doesPhoneValid
      && doesMessageValid;

  if (isFormValid) {
    form.reset();

    document.querySelectorAll('.contact-us__field').forEach(field => {
      field.classList.remove('contact-us__field--complete');
    });
  }
});

const isRequired = (value) => value !== '';

const isNameValid = (name) => {
  const re = /^[a-zA-Z]+$/;

  return re.test(name);
};

const isEmailValid = (email) => {
  const re = /.*@.*\.\w{2,3}/;

  return re.test(email);
};

const isPhoneValid = (phone) => {
  const re = /^(\d+-)*(\d+)$/;

  return re.test(phone);
};

const invalidField = (input, message) => {
  const formField = input.parentElement;

  input.classList.remove('contact-us__field--complete');
  input.classList.add('contact-us__field--invalid');

  const error = formField.querySelector('.contact-us__message');

  error.textContent = message;
};

const checkName = () => {
  let valid = false;
  const name = itemName.value.trim();

  if (!isRequired(name)) {
    invalidField(itemName, 'Field cannot be blank');
  } else if (!isNameValid(name)) {
    invalidField(itemName, 'Enter your first name only please');
  } else {
    valid = true;
  }

  return valid;
};

const checkEmail = () => {
  let valid = false;
  const email = itemEmail.value.trim();

  if (!isRequired(email)) {
    invalidField(itemEmail, 'Field cannot be blank');
  } else if (!isEmailValid(email)) {
    invalidField(itemEmail, 'Please enter a valid e-mail address');
  } else {
    valid = true;
  }

  return valid;
};

const checkPhone = () => {
  let valid = false;
  const phone = itemPhone.value.trim();

  if (!isRequired(phone)) {
    invalidField(itemPhone, 'Field cannot be blank');
  } else if (!isPhoneValid(phone)) {
    invalidField(itemPhone, 'Phone number should contain digits only');
  } else {
    valid = true;
  }

  return valid;
};

const checkMessage = () => {
  let valid = false;
  const message = itemMessage.value.trim();

  if (!isRequired(message)) {
    invalidField(itemMessage, 'Type your message please');
  } else {
    valid = true;
  }

  return valid;
};

// show error or submit the form in shipping section

const Name = document.querySelector('#name');
const Email = document.querySelector('#email');
const Country = document.querySelector('#country');
const City = document.querySelector('#city');
const Code = document.querySelector('#code');
const Address = document.querySelector('#address');

const formShipping = document.querySelector('#form');

formShipping.addEventListener('submit', function(e) {
  e.preventDefault();

  const doesNameValid = confirmName();
  const doesEmailValid = confirmEmail();
  const doesCountryValid = confirmCountry();
  const doesCityValid = confirmCity();
  const doesCodeValid = confirmCode();
  const doesAddressValid = confirmAddress();

  const isFormValid = doesNameValid
      && doesEmailValid
      && doesCountryValid
      && doesCityValid
      && doesCodeValid
      && doesAddressValid;

  if (isFormValid) {
    formShipping.reset();

    document.querySelectorAll('.shipping__point').forEach(field => {
      field.classList.remove('shipping__point--complete');
    });
    window.location.replace('#payment');
  };
});

const Required = (value) => value !== '';

const validName = (name) => {
  const re = /^[a-zA-Z]+( [a-zA-Z]+){0,}$/;

  return re.test(name);
};

const validEmail = (email) => {
  const re = /.*@.*\.\w{2,3}/;

  return re.test(email);
};

const validCountry = (country) => {
  const re = /^[a-zA-Z]+( [a-zA-Z'-.]+){0,}$/;

  return re.test(country);
};

const validCity = (city) => {
  const re = /^[a-zA-Z]+( [a-zA-Z'-.]+){0,}$/;

  return re.test(city);
};

const validCode = (code) => {
  const re = /^[0-9]{3,7}$/;

  return re.test(code);
};

const invalidPoint = (input, message) => {
  const formPoint = input.parentElement;

  input.classList.remove('shipping__point--complete');
  input.classList.add('shipping__point--invalid');

  const wrong = formPoint.querySelector('.shipping__message');

  wrong.textContent = message;
};

const confirmName = () => {
  let valid = false;
  const name = Name.value.trim();

  if (!Required(name)) {
    invalidPoint(Name, 'Field cannot be blank');
  } else if (!validName(name)) {
    invalidPoint(Name, 'Enter your full name please');
  } else {
    valid = true;
  }

  return valid;
};

const confirmEmail = () => {
  let valid = false;
  const name = Email.value.trim();

  if (!Required(name)) {
    invalidPoint(Email, 'Field cannot be blank');
  } else if (!validEmail(name)) {
    invalidPoint(Email, 'E-mail address is not valid');
  } else {
    valid = true;
  }

  return valid;
};

const confirmCountry = () => {
  let valid = false;
  const name = Country.value.trim();

  if (!Required(name)) {
    invalidPoint(Country, 'Field cannot be blank');
  } else if (!validCountry(name)) {
    invalidPoint(Country, 'Please use latin alphabet');
  } else {
    valid = true;
  }

  return valid;
};

const confirmCity = () => {
  let valid = false;
  const name = City.value.trim();

  if (!Required(name)) {
    invalidPoint(City, 'Field cannot be blank');
  } else if (!validCity(name)) {
    invalidPoint(City, 'Please use latin alphabet');
  } else {
    valid = true;
  }

  return valid;
};

const confirmCode = () => {
  let valid = false;
  const name = Code.value.trim();

  if (!Required(name)) {
    invalidPoint(Code, 'Field cannot be blank');
  } else if (!validCode(name)) {
    invalidPoint(Code, 'Postal code must be 3 to 7 digits');
  } else {
    valid = true;
  }

  return valid;
};

const confirmAddress = () => {
  let valid = false;
  const name = Address.value.trim();

  if (!Required(name)) {
    invalidPoint(Address, 'Field cannot be blank');
  } else {
    valid = true;
  }

  return valid;
};

// disable page scrolling while positioned section is active

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else if (window.location.hash === '#products') {
    document.body.classList.add('page__body--with-menu');
  } else if (window.location.hash === '#oil') {
    document.body.classList.add('page__body--with-menu');
  } else if (window.location.hash === '#cream') {
    document.body.classList.add('page__body--with-menu');
  } else if (window.location.hash === '#ubtan') {
    document.body.classList.add('page__body--with-menu');
  } else if (window.location.hash === '#lavender') {
    document.body.classList.add('page__body--with-menu');
  } else if (window.location.hash === '#shipping') {
    document.body.classList.add('page__body--with-menu');
  } else if (window.location.hash === '#payment') {
    document.body.classList.add('page__body--with-menu');
  } else if (window.location.hash === '#confirmation') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
