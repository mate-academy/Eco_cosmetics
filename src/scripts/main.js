'use strict';

if (window.location.hash === '#menu') {
  document.body.classList.add('page__body--menu');
}

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--menu');
  } else {
    document.body.classList.remove('page__body--menu');
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.shop__card');

  cards.forEach(card => {
    card.addEventListener('click', function() {
      const target = this.getAttribute('data-target');
      const label = document.querySelector(`.shop__label[data-target="${target}"]`);

      if (label) {
        label.click();
      }
    });
  });
});

const form = document.querySelector('.contacts__form');
const inputs = document.querySelectorAll('.contacts__input');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  inputs.forEach(input => {
    input.value = '';
  });
});
