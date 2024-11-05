'use strict';

var form = document.getElementById("form");
function handleForm(event) { event.preventDefault(); }
form.addEventListener('submit', handleForm);

document.querySelector('form').onsubmit = e => {
  e.target.reset();
  return false;
};
