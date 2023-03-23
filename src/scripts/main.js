'use strict';

const formReload = document.querySelector('.contact-us__form');

formReload.addEventListener('submit', (e) => {
  e.preventDefault();
  formReload.reset();
});
