'use strict';

export const initContactForm = () => {
  const form = document.querySelector('[data-contact-form]');

  if (!form) {
    return;
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    form.reset();
  });
};
