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

function submit(event) {
  event.preventDefault();
  form.reset();
}

form.addEventListener('submit', submit);
