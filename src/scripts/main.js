'use strict';

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
        this.classList.remove('completed');
        this.classList.remove('error');
      }
    });
  });
});

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
  const form = document.querySelector('.contact__form');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

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
      .then(response => response.json())
      .then(data => {
        // eslint-disable-next-line no-console
        console.log('Данные успешно отправлены', data);

        form.reset();
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.error('Ошибка при отправке данных:', error);

        form.reset();
      });
  });
});
