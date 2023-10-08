'use strict';

// eslint-disable-next-line no-unused-vars
function scrollToAnchor() {
  const targetElement = document.getElementById('shop');

  targetElement.scrollIntoView({ behavior: 'smooth' });
}

// eslint-disable-next-line no-unused-vars
function scrollAuthor() {
  const targetElement = document.getElementById('contact');

  targetElement.scrollIntoView({ behavior: 'smooth' });
}

function handleFormSubmission(event) {
  event.preventDefault();

  const form = document.querySelector('.contact__form');
  const inputElements = document.querySelectorAll('.contact__input');

  const name = form.querySelector('[placeholder="Your Name"]').value;
  const email = form.querySelector('[placeholder="E-Mail"]').value;
  const phone = form.querySelector('[placeholder="Phone Number"]').value;
  const message = form.querySelector('[placeholder="Your Message"]').value;

  // eslint-disable-next-line no-undef
  fetch('https://mate.academy/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name, email, phone, message,
    }),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      return response.json();
    })
    .then(data => {
      // eslint-disable-next-line no-console
      console.log('Данные успешно отправлены', data);

      inputElements.forEach(function(inputElement) {
        inputElement.classList.remove('completed', 'error');
        inputElement.value = '';
      });

      form.reset();
    })
    .catch(error => {
      // eslint-disable-next-line no-console
      console.error('Ошибка при отправке данных:', error);

      inputElements.forEach(function(inputElement) {
        inputElement.classList.remove('completed', 'error');
        inputElement.value = '';
      });
    });
}

function validateInput(inputElement) {
  const value = inputElement.value.trim();
  const type = inputElement.type;

  if (type === 'email') {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailRegex.test(value);
  } else if (type === 'tel') {
    return value.length >= 6;
  } else {
    return value.length >= 6;
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const inputElements = document.querySelectorAll('.contact__input');

  inputElements.forEach(function(inputElement) {
    inputElement.addEventListener('blur', function() {
      if (this.value.trim() !== '') {
        if (validateInput(this)) {
          this.classList.add('completed');
          this.classList.remove('error');
        } else {
          this.classList.add('error');
          this.classList.remove('completed');
        }
      } else {
        this.classList.remove('completed', 'error');
      }
    });
  });

  const form = document.querySelector('.contact__form');

  form.addEventListener('submit', handleFormSubmission);
});
