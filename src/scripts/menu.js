'use strict';

(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const mobileDropRef = document.querySelector('[data-lang]');
  const moveContentDown = document.querySelector('.brand');
  const buttonHamburger = document.querySelector('.header__hamburger');

  menuBtnRef.addEventListener('click', () => {
    const expanded
            = menuBtnRef.getAttribute('aria-expanded') === 'true' || 'false';

    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');
    mobileDropRef.classList.toggle('is-open');
  });

  buttonHamburger.addEventListener('click', (event) => {
    moveContentDown.classList.toggle('brand--active-header');
  });
})();
