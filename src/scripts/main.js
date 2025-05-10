'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#Hydrophilic-oil') {
    document.body.classList.add('page__body--with-card');
  } else {
    document.body.classList.remove('page__body--with-card');
  }
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#ubtan') {
    document.body.classList.add('page__body--with-card');
  } else {
    document.body.classList.remove('page__body--with-card');
  }
});

const form = document.getElementById('form');

form.onsubmit = function() {
  document.getElementById('form').reset();

  return false;
};
