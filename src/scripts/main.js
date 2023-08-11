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

const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.reset();
});

function handleFormSubmit(event) {
  event.preventDefault(); // Перешкоджаємо відправці форми

  // Отримуємо значення з інпутів
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const numberInput = document.getElementById('number');

  // Регулярні вирази для перевірки валідності даних
  const nameRegex = /^[A-Z][a-z]* [A-Z][a-z]*$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const numberRegex = /^\+\d+ \d+$/;

  // Перевірка ім'я
  if (nameRegex.test(nameInput.value)) {
    nameInput.style.backgroundColor = '#344f10';
    // Зелений колір для правильного вводу
    document.getElementById('nameError').textContent = '';
    // Видаляємо повідомлення про помилку
  } else {
    nameInput.style.backgroundColor = '#Eb5757';

    // Червоний колір для неправильного вводу
    document.getElementById('nameError').textContent
      = 'Введіть ім\'я та прізвище у форматі: Ім\'я Прізвище';
    // Повідомлення про помилку
  }

  // Перевірка електронної пошти
  if (emailRegex.test(emailInput.value)) {
    emailInput.style.backgroundColor = '#344f10';
    document.getElementById('emailError').textContent = '';
  } else {
    emailInput.style.backgroundColor = '#Eb5757';

    document.getElementById('emailError').textContent
      = 'Введіть дійсну адресу електронної пошти у форматі: mail@пошта.домен';
  }

  // Перевірка номера телефону
  if (numberRegex.test(numberInput.value)) {
    numberInput.style.backgroundColor = '#344f10';
    document.getElementById('numberError').textContent = '';
  } else {
    numberInput.style.backgroundColor = '#Eb5757';

    document.getElementById('numberError').textContent
      = 'Введіть номер телефону у форматі: +код країни телефонний номер';
  }
}

handleFormSubmit();
