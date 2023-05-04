'use strict';

window.addEventListener('hashchange', () => {
  if ((window.location.hash === '#menu')
  || (window.location.hash === '#product')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
});

const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.reset();
});
