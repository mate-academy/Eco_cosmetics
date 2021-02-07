'use strict';

(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const moveContentDown = document.querySelector('.brand');
  const buttonHamburger = document.querySelector('.header__hamburger');

  menuBtnRef.addEventListener('click', () => {
    const expanded
            = menuBtnRef.getAttribute('aria-expanded') === 'true' || 'false';

    menuBtnRef.classList.toggle('header__menu-button--active');

    menuBtnRef.setAttribute('aria-expanded', !expanded);
    mobileMenuRef.classList.toggle('nav--menu-open');
  });

  buttonHamburger.addEventListener('click', (event) => {
    moveContentDown.classList.toggle('brand--active-header');
    buttonHamburger.classList.toggle('header__hamburger--close');
  });
})();
