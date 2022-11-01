'use strict';

const form = document.querySelector('.form');
const inputs = document.querySelectorAll('.form-field');
const textarea = document.querySelector('.form-field--textarea');
// const dropdownButton = document.querySelector('.dropdown__button');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  inputs.forEach(function(elem) {
    elem.value = '';
  });

  textarea.value = '';
});

const products = ['#hydrophilic-oil', '#face-cream', '#ubtan'];

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }

  if (products.includes(window.location.hash)) {
    document.body.classList.add('page__body--with-product');
  } else {
    document.body.classList.remove('page__body--with-product');
  }
});

const tabs = document.querySelector('.shop__tabs');
const shopTabs = document.querySelectorAll('.shop__tab');

tabs.addEventListener('click', (event) => {
  shopTabs.forEach((tab) => {
    if (tab === event.target.closest('li')) {
      tab.classList.add('shop__tab--active');
    } else {
      tab.classList.remove('shop__tab--active');
    }
  });
});

const phoneInput = document.querySelector('[name = tel]');
const allertMessage = document.querySelector('.allert');

phoneInput.addEventListener('focus', () => {
  allertMessage.style.display = 'block';
});

phoneInput.addEventListener('blur', () => {
  allertMessage.style.display = 'none';
});
