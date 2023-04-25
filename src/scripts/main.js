'use strict';

window.addEventListener('hashchange', () => {
  if ((window.location.hash === '#menu')
  || (window.location.hash === '#card')) {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.querySelector('.contact__form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.reset();
});
