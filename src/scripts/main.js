'use strict';

const form = document.querySelector('form');

window.addEventListener('hashchange', () => {
  window.location.hash === '#menu'
    ? document.body.classList.add('page__body--with-menu')
    : document.body.classList.remove('page__body--with-menu');
});

window.addEventListener('hashchange', () => {
  window.location.hash === '#hydrophilic-oil'
    ? document.body.classList.add('page__body--with-oil')
    : document.body.classList.remove('page__body--with-oil');
});

window.addEventListener('hashchange', () => {
  window.location.hash === '#ubtan'
    ? document.body.classList.add('page__body--with-ubtan')
    : document.body.classList.remove('page__body--with-ubtan');
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  e.target.reset();
});
