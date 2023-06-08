'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#card-oil') {
    document.body.classList.add('page__body--with-card-oil');
  } else {
    document.body.classList.remove('page__body--with-card-oil');
  }
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#card-ubtan') {
    document.body.classList.add('page__body--with-card-ubtan');
  } else {
    document.body.classList.remove('page__body--with-card-ubtan');
  }
});

document.querySelector('#consult').addEventListener('submit',
  function(event) {
    event.preventDefault();

    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
    document.getElementById('name').value = '';
    document.getElementById('tel').value = '';
  }
);
