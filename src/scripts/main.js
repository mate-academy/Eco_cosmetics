'use strict';

const items = document.querySelectorAll('.shop__item');
const shopCard = document.querySelectorAll('.shop__cards');
const form = document.getElementById('form');
const btnForm = document.querySelector('.button__link--contacts');

btnForm.addEventListener('click', () => {
  form.reset();
});

items.forEach((item, index) => {
  item.addEventListener('click', () => {
    items.forEach(activeItem => {
      activeItem.classList.remove('shop__item--active');
    });
    item.classList.add('shop__item--active');

    shopCard.forEach(card => {
      card.classList.add('hidden');
    });

    shopCard[index].classList.remove('hidden');
  });
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
