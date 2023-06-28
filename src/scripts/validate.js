'use strict';

const form = document.querySelector('.contact__form');
// const validateBtn = form.querySelector('.contact__btn');
const listLength = form.querySelectorAll('.form__field').length;
const stopList = ['email'];

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

  const arrayElement = [];
  const arrayActive = [];

  for (let i = 0; i < listLength; i++) {
    const elemName = form.children[i].name;
    const elemValue = form.children[i].value;

    if (!stopList.includes(elemName)) {
      arrayElement.push({
        position: i,
        name: elemName,
        active: elemValue.length > 2,
      });
    } else {
      arrayElement.push({
        position: i,
        name: elemName,
        active: emailValid(elemValue),
      });
    }
  };

  for (let i = 0; i < arrayElement.length; i++) {
    if (arrayElement[i].active) {
      form.children[i].classList.add('form__field--active');
      arrayActive.push(i);
    } else {
      form.children[i].classList.add('form__field--unactive');
    }
  }

  if (arrayActive.length === arrayElement.length) {
    form.reset();
    removeData(form, listLength);
  }
});

formCart.addEventListener('submit', function(event) {
  event.preventDefault();
  removeData(formCart, listLengthCart);

  const arrayElement = [];
  const arrayActive = [];

  for (let i = 0; i < listLengthCart; i++) {
    const elemName = formCart.children[i].name;
    const elemValue = formCart.children[i].value;

    if (!stopList.includes(elemName)) {
      arrayElement.push({
        position: i,
        name: elemName,
        active: elemValue.length > 2,
      });
    } else {
      arrayElement.push({
        position: i,
        name: elemName,
        active: emailValid(elemValue),
      });
    }
  };

  for (let i = 0; i < arrayElement.length; i++) {
    if (arrayElement[i].active) {
      formCart.children[i].classList.add('form__field--active');
      arrayActive.push(i);
    } else {
      formCart.children[i].classList.add('form__field--unactive');
    }
  }

  if (arrayActive.length === arrayElement.length) {
    formCart.reset();
    removeData(formCart, listLengthCart);

    window.location.href = domain();
  }
});
