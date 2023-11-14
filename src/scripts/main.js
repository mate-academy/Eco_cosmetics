'use strict';

const form = document.getElementById('contact-form');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  e.stopPropagation();
});
