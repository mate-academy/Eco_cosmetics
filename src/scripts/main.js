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

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  form.reset();
});

const textarea = document.querySelector('textarea');
const limitCols = 35;
const limitRows = 3;

textarea.addEventListener('keyup', (e) => {
  const lines = e.target.value.split('\n');

  for (let i = 0; i < lines.length; i++) {
    if (lines[i].length < limitCols) {
      continue;
    }

    lines[i] = lines[i].substring(0, limitCols);
    lines[i + 1] = `${lines[i].substring(limitCols + 1)}${lines[i + 1] || ''}`;
  }

  textarea.value = lines.slice(0, limitRows).join('\n');
});
