'use strict';

const options = document.querySelectorAll('.shop__option');
const shopItems = document.querySelectorAll('.shop__item');
const form = document.querySelector('#form');

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

form.addEventListener('submit', onSubmit, false);

options.forEach(option => {
  option.addEventListener('click', () => {
    const optionId = option.getAttribute('data-option');

    options.forEach(o => o.classList.remove('shop__option--active'));
    shopItems.forEach(item => item.classList.remove('shop__item--active'));

    option.classList.add('shop__option--active');

    // eslint-disable-next-line max-len
    const selectedShopItems = document.querySelectorAll(`.shop__item[data-option="${optionId}"]`);

    selectedShopItems.forEach(item => item.classList.add('shop__item--active'));
  });
});

function onSubmit(event) {
  event.preventDefault();
  form.reset();
};
