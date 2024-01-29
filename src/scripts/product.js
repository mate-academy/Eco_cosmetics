'use strict';

const openMenuButton = document.getElementById('openMenu');
const closeMenuButton = document.getElementById('closeMenu');
const navItems = document.querySelectorAll('.nav__link');

openMenuButton.addEventListener('click', () => {
  document.documentElement.style.overflowY = 'hidden';
});

closeMenuButton.addEventListener('click', () => {
  document.documentElement.style.overflowY = 'auto';
});

navItems.forEach((item) => {
  item.addEventListener('click', () => {
    document.documentElement.style.overflowY = 'auto';
  });
});
