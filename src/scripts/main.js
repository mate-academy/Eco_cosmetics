'use strict';

const closeButton = document.querySelector('.menu__close-btn');
const openButton = document.querySelector('.menu__open-btn');
const nav = document.querySelector('.menu');

closeButton.addEventListener('click', () => {
  nav.classList.add('menu-close');
});

openButton.addEventListener('click', () => {
  nav.classList.remove('menu-close');
});

document.addEventListener('submit', function(event) {
  event.preventDefault();
  event.target.reset();
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('no-scroll');
  } else {
    document.body.classList.remove('no-scroll');
  }
});
