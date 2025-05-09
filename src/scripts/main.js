'use strict';

const menuToggle = document.querySelector('.header__menu-toggle');
const menuScreen = document.querySelector('.header__menu');
const sectionProducts = document.querySelector('#products');
const btnAllProducts = document.querySelector('.shop__btn');
const menuLinks = document.querySelectorAll('.header__menu-link');
const textarea = document.querySelector('.contact-us__textarea');
const placeholder = document.querySelector('.contact-us__placeholder');
const closeProducts = document.querySelector('.products__close-btn');

menuToggle.addEventListener('click', (e) => {
  e.preventDefault();

  if (menuScreen.classList.contains('header__menu--is-active')) {
    menuScreen.classList.add('header__menu--closing');

    menuScreen.addEventListener(
      'animationend',
      () => {
        menuScreen.classList.remove('header__menu--is-active');
        menuScreen.classList.remove('header__menu--closing');

        document.body.style.overflow = '';
      },
      { once: true },
    );

    menuToggle.classList.remove('header__menu-toggle--active');
  } else {
    menuScreen.classList.add('header__menu--is-active');
    menuToggle.classList.add('header__menu-toggle--active');

    document.body.style.overflow = 'hidden';
  }
});

btnAllProducts.addEventListener('click', () => {
  sectionProducts.classList.toggle('products--active');
});

menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (menuScreen.classList.contains('header__menu--is-active')) {
      menuScreen.classList.add('header__menu--closing');

      menuScreen.addEventListener(
        'animationend',
        () => {
          menuScreen.classList.remove('header__menu--is-active');
          menuScreen.classList.remove('header__menu--closing');

          document.body.style.overflow = '';
        },
        { once: true },
      );

      menuToggle.classList.remove('header__menu-toggle--active');
    }
  });
});

textarea.addEventListener('input', () => {
  placeholder.style.opacity = textarea.value.trim() !== '' ? '0' : '1';
});

closeProducts.addEventListener('click', (event) => {
  sectionProducts.classList.remove('products--active');
});
