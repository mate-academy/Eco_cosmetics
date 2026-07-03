'use strict';

export const initMenu = () => {
  const button = document.querySelector('[data-menu-button]');
  const menu = document.querySelector('[data-menu]');

  if (!button || !menu) {
    return;
  }

  const closeMenu = () => {
    menu.classList.remove('header__nav--open');
    button.setAttribute('aria-expanded', 'false');
  };

  button.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('header__nav--open');

    button.setAttribute('aria-expanded', String(isOpen));
  });

  menu.addEventListener('click', (event) => {
    if (event.target.matches('a')) {
      closeMenu();
    }
  });
};
