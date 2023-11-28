'use strict';

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
