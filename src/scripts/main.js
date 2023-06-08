'use strict';

window.addEventListener('hashchange', () => {
  window.location.hash === '#menu'
    ? document.body.classList.add('page__body--with-menu')
    : document.body.classList.remove('page__body--with-menu');
});

const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  form.reset();
});
