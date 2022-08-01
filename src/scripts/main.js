'use strict';
// document.getElementById('focus').focus();

document.querySelector('.contact-us__form').addEventListener('submit',
  function(event) {
    event.preventDefault();
    document.querySelector('.contact-us__form').reset();
  });
