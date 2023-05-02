'use strict';

window.addEventListener('hashchange', () => {
  if ((window.location.hash === '#menu')
  || (window.location.hash === '#product')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
});

const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  form.reset();
});
