'use strict';

const form = document.getElementById('contact-form');
const items = document.getElementsByClassName('section-content__field');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  e.stopPropagation();

  let counter = 0;

  for (let i = 0; i < items.length; i++) {
    if (items[i].value.length === 0) {
      items[i].classList.add('section-content__field--invalid');

      items[i].addEventListener('input', function(b) {
        if (b.target.value !== '') {
          b.target.classList.remove('section-content__field--invalid');
          b.target.classList.add('section-content__field--valid');
        } else {
          b.target.classList.add('section-content__field--invalid');
          b.target.classList.remove('section-content__field--valid');
        }
      });
      counter++;
    }
  }

  if (counter === 0) {
    for (let i = 0; i < items.length; i++) {
      items[i].value = '';
    }
  }
});
