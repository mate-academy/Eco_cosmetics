'use strict';

function scrollToSection(shop) {
  const section = document.getElementById(shop);

  if (section) {
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
}

document.querySelector('.button__shop').addEventListener('click', function() {
  scrollToSection('shop');
});

document.querySelector('.creators__text__contact-button').addEventListener(
  'click', function() {
    scrollToSection('contact-us');
  });

const dropdown = document.getElementById('myDropdown');
const triggerToOpen = document.querySelector('.dropdown__button');
const triggerToClose = dropdown.querySelector('.dropdown__button');
const menu = document.getElementById('myDropdown');
const links = document.getElementsByClassName('link');

triggerToOpen.addEventListener('click', (event) => {
  event.preventDefault();

  dropdown.classList.toggle('menu--active');
});

triggerToClose.addEventListener('click', (event) => {
  event.preventDefault();

  dropdown.classList.toggle('menu--active');
});

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', () => {
    menu.classList.remove('menu--active');
  });
}

const intro = document.getElementById('intro');

intro.classList.add('visible');

setTimeout(function() {
  intro.classList.remove('visible');
  intro.classList.add('non--visible');
}, 5000);

// work with buttons //
const buttons = document.querySelectorAll('.shop__buttons__button');

if (buttons.length > 0) {
  buttons[0].classList.add('__active');
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(b => b.classList.remove('__active'));
    button.classList.add('__active');
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const showMessage = function(text) {
    const messageContainer = document.createElement('div');

    messageContainer.textContent = text;
    messageContainer.style.fontFamily = 'Poppins';
    messageContainer.style.backgroundColor = '#e4dfd3';
    messageContainer.style.padding = '10px';
    messageContainer.style.border = '1px solid #344f10';
    messageContainer.style.position = 'fixed';
    messageContainer.style.top = '50%';
    messageContainer.style.textAlign = 'center';
    messageContainer.style.left = '50%';
    messageContainer.style.transform = 'translate(-50%, -50%)';
    document.body.appendChild(messageContainer);

    setTimeout(function() {
      document.body.removeChild(messageContainer);
    }, 5000);
  };

  const formButton = document.querySelector('.contact-us__form__button');

  formButton.addEventListener('click', function() {
    const name = document.querySelector('.input-name').value;
    const email = document.querySelector('.input-email').value;
    const phone = document.querySelector('.input-tel').value;

    if (name && email && phone) {
      showMessage(`Thank you,
        ${name}, we will contact you as soon as possible.`);
    } else {
      showMessage('Please, fill in all fields before submitting the form!');
    }
  });
});
