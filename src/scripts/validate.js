'use strict';

const form = document.querySelector('.contact__form');
const listLength = form.querySelectorAll('.form__field').length;
const stopList = ['email', 'tel'];

const formCart = document.querySelector('.cart-content__form');
const listLengthCart = formCart.querySelectorAll('.form__field').length;

const removeData = (typeForm, list) => {
  for (let i = 0; i < list; i++) {
    typeForm.children[i].classList.remove('form__field--active');
    typeForm.children[i].classList.remove('form__field--unactive');
  };
};

const emailValid = (str) => {
  let result = false;

  if (str.length > 0) {
    const data = str.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/g);

    data <= 0 ? result = false : result = true;
  }

  return result;
};

const telValid = (str) => {
  let result = false;

  if (str.length > 0) {
    const data = str.match(/^[+0-9]{5,14}$/g);

    data <= 0 ? result = false : result = true;
  }

  return result;
};

const errorMessage = (inputName) => {
  if (inputName === 'name') {
    return `<li>Your name</li>`;
  }

  if (inputName === 'email') {
    return `<li>Email: <strong>example@domain.com</strong></li>`;
  }

  if (inputName === 'tel') {
    return `<li>Phone: <strong>+1 2222 333 4444</strong></li>`;
  }

  if (inputName === 'message') {
    return `<li>Message from 5 to 200 characters</li>`;
  }

  if (inputName === 'adress') {
    return `<li>Enter the address for delivery</li>`;
  }

  return false;
};

const arrElement = (inputForm, listForm) => {
  const arrayElement = [];

  for (let i = 0; i < listForm; i++) {
    const elemName = inputForm.children[i].name;
    const elemValue = inputForm.children[i].value;
    const messageError = errorMessage(elemName);

    if (!stopList.includes(elemName)) {
      arrayElement.push({
        position: i,
        name: elemName,
        active: elemValue.length > 2,
        message: messageError,
      });
    }

    if (elemName === 'email') {
      arrayElement.push({
        position: i,
        name: elemName,
        active: emailValid(elemValue),
        message: messageError,
      });
    }

    if (elemName === 'tel') {
      arrayElement.push({
        position: i,
        name: elemName,
        active: telValid(elemValue),
        message: messageError,
      });
    }
  };

  return arrayElement;
};

const domain = () => {
  const prot = window.location.protocol;
  const hostName = window.location.host;
  const patch = window.location.pathname;
  const pageData = `${prot}//${hostName}${patch}`;

  return pageData;
};

form.addEventListener('submit', function(event) {
  event.preventDefault();
  removeData(form, listLength);

  const arrayElement = arrElement(form, listLength);
  const arrayActive = [];
  let unActive = '';

  for (let i = 0; i < arrayElement.length; i++) {
    if (arrayElement[i].active) {
      form.children[i].classList.add('form__field--active');
      arrayActive.push(i);
    } else {
      form.children[i].classList.add('form__field--unactive');
    }
  }

  arrayElement.forEach(element => {
    if (element.active === false) {
      unActive += element.message;
    }
  });

  if (arrayActive.length === arrayElement.length) {
    form.reset();
    removeData(form, listLength);

    document.querySelector(
      '.error'
    ).classList.remove(
      'error--active'
    );
  } else {
    document.querySelector('.error__list').replaceChildren();
    document.querySelector('.error').classList.add('error--active');

    document.querySelector('.error__list').insertAdjacentHTML(
      'afterbegin', unActive);
  }
});

formCart.addEventListener('submit', function(event) {
  event.preventDefault();
  removeData(formCart, listLengthCart);

  const arrayElement = arrElement(formCart, listLengthCart);
  const arrayActive = [];
  let unActive = '';

  for (let i = 0; i < arrayElement.length; i++) {
    if (arrayElement[i].active) {
      formCart.children[i].classList.add('form__field--active');
      arrayActive.push(i);
    } else {
      formCart.children[i].classList.add('form__field--unactive');
    }
  }

  arrayElement.forEach(element => {
    if (element.active === false) {
      unActive += element.message;
    }
  });

  if (arrayActive.length === arrayElement.length) {
    formCart.reset();

    removeData(formCart, listLengthCart);

    window.location.href = domain();

    document.querySelector('.error').classList.remove(
      'error--active'
    );
  } else {
    document.querySelector('.error__list').replaceChildren();
    document.querySelector('.error').classList.add('error--active');

    document.querySelector('.error__list').insertAdjacentHTML(
      'afterbegin', unActive
    );
  }
});
