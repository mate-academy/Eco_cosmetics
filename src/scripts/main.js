'use strict';

const burger = document.querySelector('.nav__burger');
const burgerWrapper = document.querySelector('.nav__burger-wrapper');
const navList = document.querySelector('.nav__list');

burgerWrapper.addEventListener('click', function() {
  burger.classList.toggle('nav__burger_close');
  navList.classList.toggle('nav__list_opened');
});
