'use strict';

const form = document.getElementById('myform');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.reset();
});
