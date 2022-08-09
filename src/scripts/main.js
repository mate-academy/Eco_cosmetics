'use strict';

const body = document.querySelector('.page__body');
const form = document.querySelector('.contact__form');

function scrollChange() {
  const hash = window.location.hash;

  if ((hash === '#menu') || (hash === '#card') || (hash === '#menu-card')) {
    body.style.overflow = 'hidden';
  } else {
    body.style.overflow = '';
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.reset();
});

window.onhashchange = scrollChange;

scrollChange();
