'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const inputs = document.querySelectorAll('input');

const button = document.getElementById('button-send');

button.addEventListener('click', (ev) => {
  let shouldPreventDefault = false;

  for (const input of inputs) {
    if (input.value === '') {
      shouldPreventDefault = true;
    } else {
      shouldPreventDefault = false;
    }

    if (shouldPreventDefault) {
      ev.preventDefault();
    }
  }
});
