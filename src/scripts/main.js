'use strict';

const body = document.querySelector('body');
const menu = document.querySelector('.menu');
const menuCloser = document.querySelector('.menu__closer');
const menuOpener = document.querySelector('.menu__opener');

menuOpener.addEventListener('click', (event) => {
  menu.classList.add('menu--open');
  body.classList.add('menu-open');
  event.preventDefault();
}, 1000);

menuCloser.addEventListener('click', (event) => {
  menu.classList.remove('menu--open');
  body.classList.remove('menu-open');
  event.preventDefault();
}, 1000);

document.addEventListener('DOMContentLoaded', function() {
  const menuItems = document.querySelectorAll('.shop__menu-item');
  const carouselItems = document.querySelectorAll('.shop__item');

  menuItems.forEach(function(item) {
    item.addEventListener('mousemove', function() {
      const category = item.getAttribute('data-category');

      setActiveMenuItem(item);
      showCarouselItem(category);
    });
  });

  menuItems.forEach(function(item) {
    item.addEventListener('click', function() {
      const category = item.getAttribute('data-category');

      setActiveMenuItem(item);
      showCarouselItem(category);
    });
  });

  function setActiveMenuItem(selectedItem) {
    menuItems.forEach(function(item) {
      item.classList.remove('active');
    });
    selectedItem.classList.add('active');
  }

  function showCarouselItem(category) {
    carouselItems.forEach(function(item) {
      item.style.display = 'none';
    });

    const selectedCarouselItems
      = document.querySelectorAll('.shop__item--' + category);

    if (selectedCarouselItems.length > 0) {
      selectedCarouselItems.forEach(function(item) {
        item.style.display = 'block';
      });
    }
  }
});

// function handleFormSubmit(event) {
//   event.preventDefault();

//   const nameInput = document.getElementById('name');
//   const emailInput = document.getElementById('email');
//   const numberInput = document.getElementById('number');
//   const textarea = document.getElementById('textarea');

//   console.log('Ім\'я: ' + nameInput.value);
//   console.log('Email:' + emailInput.value);
//   console.log('Номер телефона:' + numberInput.value);
//   console.log('Повідомлення:' + textarea.value);

//   document.querySelector('.contact-us__form').reset();
// }

// function handleFormNumber(event) {
//   event.preventDefault();

//   const nameInput = document.getElementById('name');
//   const phoneNumberInput = document.getElementById('number');

//   const nameRegex = /^[A-Z][a-z]*$/;
//   const numberRegex = /^\+\d{1,3}\d{9}$/;

//   // Check name format
//   if (!nameRegex.test(nameInput.value)) {
//     alert('Name should start with an uppercase letter
// and contain only English alphabet characters.');

//     return false;
//   }

//   // Check phone number format
//   if (!numberRegex.test(phoneNumberInput.value)) {
//     alert('Phone number should start with a plus sign,
// followed by the country code and a 9-digit number.');

//     return false;
//   }

//   alert('Form submitted successfully!');

//   // Uncomment the following line to submit the form:
//   // event.target.submit();
//   return true;
// }
