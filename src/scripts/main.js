'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.getElementById('consultationForm');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  document.getElementsByName('name')[0].value = '';
  document.getElementsByName('email')[0].value = '';
  document.getElementsByName('phone')[0].value = '';
  document.getElementsByName('message')[0].value = '';
});
