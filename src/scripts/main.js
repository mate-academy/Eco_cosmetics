'use strict';

const form = document.querySelector('#coact-us');

function submit(event) {
  event.preventDefault();
  form.reset();
}

form.addEventListener('submit', submit);
