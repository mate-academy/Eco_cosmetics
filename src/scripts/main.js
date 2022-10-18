'use strict';

const forms = document.querySelectorAll('.form__field');

const formField = document.querySelector('.form, .form__shipping');

formField.addEventListener('submit', (event) => {
  event.preventDefault();

  forms.forEach((form) => {
    form.value = '';
  });
});
