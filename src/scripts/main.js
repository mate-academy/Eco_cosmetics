'use strict';

document.querySelector('.nav__list').addEventListener(
  'click',
  (e) => {
    document.querySelector('.nav__toggle--check').checked = false;
  },
);
