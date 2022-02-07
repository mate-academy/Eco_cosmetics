'use strict';

function openMenu() {
  const menu = document.querySelector('.menu');
  const btnOpenMenu = document.querySelector('.burger-menu');

  function toggleMenu() {
    document.body.classList.toggle('page--with-menu');
    menu.classList.toggle('page__menu--open');
  }

  btnOpenMenu.addEventListener('click', toggleMenu);

  menu.addEventListener('click', (event) => {
    if (event.target.classList.contains('menu__link')) {
      toggleMenu();
    } else if (event.target.classList.contains('menu__closer')) {
      toggleMenu();
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  openMenu();
});
