'use strict';

const userName = document.querySelector('.name');
const email = document.querySelector('.email');
const phone = document.querySelector('.phone');
const textarea = document.querySelector('.message');
const form = document.querySelector('.form');

function showError(input) {
  const inputControl = input;

  inputControl.className = 'form__input error';
}

const isEmailValid = (input) => {
  // eslint-disable-next-line
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return regex.test(input);
};

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (userName.value === '') {
    showError(userName);
  }

  if (!isEmailValid(email.value)) {
    showError(email);
  }

  if (userName.value && email.value) {
    userName.value = '';
    email.value = '';
    phone.value = '';
    textarea.value = '';
  }
});

userName.addEventListener('focus', () => {
  userName.classList.remove('error');
  userName.classList.remove('success');
});

email.addEventListener('focus', () => {
  email.classList.remove('error');
  email.classList.remove('success');
});

// --------- menu burger ---------

const toggleBurger = document.querySelector('.burger');
const closeBtn = document.querySelector('.burger-menu__close');
const burgerMenu = document.querySelector('.burger-menu');

toggleBurger.addEventListener('click', function() {
  burgerMenu.classList.toggle('show-burger');
});

closeBtn.addEventListener('click', function() {
  burgerMenu.classList.remove('show-burger');
});

// ----- tabs ------

const tubs = document.querySelectorAll('.shop-tabs__item');
const productCard = document.querySelectorAll('.product-card');

tubs.forEach(tab => {
  tab.addEventListener('click', () => {
    const currentTab = tab.getAttribute('data-tab');

    tubs.forEach(item => {
      item.classList.contains(currentTab)
        ? item.classList.add('is-active')
        : item.classList.remove('is-active');
    });

    productCard.forEach(product => {
      product.classList.contains(currentTab)
        ? product.classList.add('is-active')
        : product.classList.remove('is-active');
    });
  });
});

// ---- all products btn -----

const btns = document.querySelectorAll('.btn');
const productCard2 = document.querySelectorAll('.product-card');

btns.forEach(btn => {
  btn.addEventListener('click', () => {
    productCard2.forEach(card => {
      card.classList.add('is-active');
    });
  });
});
