'use strict';

const mobileMenu = document.getElementById('mobileMenu');
const burgerBtn = document.getElementById('burgerBtn');
const menuCloseBtn = document.getElementById('menuCloseBtn');
const menuLinks = document.querySelectorAll('.mobile-menu__link');

function openMenu() {
  mobileMenu.classList.add('mobile-menu--open');
  burgerBtn.classList.add('header__burger--active');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  mobileMenu.classList.remove('mobile-menu--open');
  burgerBtn.classList.remove('header__burger--active');
  document.body.style.overflow = '';
}

burgerBtn.addEventListener('click', openMenu);
menuCloseBtn.addEventListener('click', closeMenu);
menuLinks.forEach(link => link.addEventListener('click', closeMenu));

function handleSubmit(event) {
  event.preventDefault();
  event.target.reset();
}
