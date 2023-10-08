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

document.addEventListener('DOMContentLoaded', function() {
  const inputElements = document.querySelectorAll('.contact__input');

  inputElements.forEach(function(inputElement) {
    inputElement.addEventListener('blur', function() {
      if (this.value.trim() !== '') {
        // eslint-disable-next-line no-undef
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

  const form = document.querySelector('.contact__form');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = form.querySelector('[placeholder="Your Name"]').value;
    const email = form.querySelector('[placeholder="E-Mail"]').value;
    const phone = form.querySelector('[placeholder="Phone Number"]').value;
    const message = form.querySelector('[placeholder="Your Message"]').value;

    // Очистить состояния ошибок у всех полей ввода
    inputElements.forEach(function(inputElement) {
      inputElement.classList.remove('completed', 'error');
    });

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
