'use strict';

const items = document.querySelectorAll('.shop__item');
const shopCard = document.querySelectorAll('.shop__cards');
const allInput = document.querySelectorAll('.contacts__field', '.form-field');
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  allInput.forEach(input => {
    input.style.borderColor = '#bdbdbd';
  });

  form.reset();

  return false;
});

const checkValidForm = (event) => {
  const target = event.target.value;

  if (target.length === 0) {
    event.target.style.borderColor = '#eb5757';
  } else {
    event.target.style.borderColor = '#344f10';
  }
};

allInput.forEach(input => {
  input.addEventListener('change', checkValidForm);
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
