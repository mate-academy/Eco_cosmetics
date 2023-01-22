'use strict';

const form = document.querySelector('.contacts__form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  form.reset();
});

window.addEventListener('hashchange', () => {
  if ((window.location.hash === '#menu')
  || (window.location.hash === '#open-card')
  || (window.location.hash === '#menu-card')
  || (window.location.hash === '#open-card2')) {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
