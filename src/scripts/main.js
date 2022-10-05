'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#add') {
    document.body.classList.add('page__body--with-menu');
  } else if (window.location.hash === '#shipping') {
    document.body.classList.add('page__body--with-menu');
  } else if (window.location.hash === '#payment') {
    document.body.classList.add('page__body--with-menu');
  } else if (window.location.hash === '#confirmation') {
    document.body.classList.add('page__body--with-menu');
  } else if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.querySelector('.contacts__main-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  form.reset();
});

const formTwo = document.querySelector('.shipping__form');

formTwo.addEventListener('submit', (e) => {
  e.preventDefault();

  formTwo.reset();
});
