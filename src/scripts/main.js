'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page--with-menu');
  } else {
    document.body.classList.remove('page--with-menu');
  }
});

window.addEventListener('hashchange', () => {
  // eslint-disable-next-line
  if (window.location.hash === '#to-shop--oil' || window.location.hash === '#to-shop--ubtan') {
    document.body.classList.add('page--with-shop-card');
  } else {
    document.body.classList.remove('page--with-shop-card');
  }
});

const form = document.querySelector('.form');

// eslint-disable-next-line
form.addEventListener('submit', function (event) {
  event.preventDefault();

  form.reset();
});
