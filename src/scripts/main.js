'use strict';

const form = document.querySelector('form');

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#hydrophilic-oil') {
    document.body.classList.add('page__body--with-oil');
  } else {
    document.body.classList.remove('page__body--with-oil');
  }
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#ubtan') {
    document.body.classList.add('page__body--with-ubtan');
  } else {
    document.body.classList.remove('page__body--with-ubtan');
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  e.target.reset();
});

