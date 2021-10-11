'use strict';

const menu = document.querySelector('.menu');
const mobileNav = document.querySelector('.mobile-nav');
const mobileNavList = document.querySelector('.mobile-nav__list');

menu.addEventListener('click', () => {
  mobileNav.classList.toggle('mobile-nav--active');
  menu.classList.toggle('menu--active');
});

mobileNavList.addEventListener('click', () => {
  mobileNav.classList.toggle('mobile-nav--active');
  menu.classList.toggle('menu--active');
});

const list = document.querySelector('.shop__wrapper-list');
const prev = document.querySelector('.shop__back');
const next = document.querySelector('.shop__forvard');

let position = 0;

move(0);

function move(shift) {
  const count = list.children.length;

  position += shift;

  position = (position + count) % count;

  list.style.transform = `translateX(${-position * 100}%)`;
}

next.addEventListener('click', () => {
  move(1);
});

prev.addEventListener('click', () => {
  move(-1);
});
