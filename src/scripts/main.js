'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('body--with-menu');
  } else {
    document.body.classList.remove('body--with-menu');
  }
});

const form = document.querySelector('.form');

form.addEventListener('submit', handleEvent);

function handleEvent(event) {
  event.preventDefault();
  form.reset();
}

const form1 = document.querySelector('.form1');

form1.addEventListener('submit', handleEvent);
