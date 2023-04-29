'use strict';

const formReload = document.querySelector('.contact-us__form');

formReload.addEventListener('submit', (e) => {
  e.preventDefault();
  formReload.reset();
});

const links = document.querySelectorAll('a');

links.forEach(link => {
  if (link.getAttribute('href').startsWith('http')) {
    link.setAttribute('target', '_blank');
  }
});
