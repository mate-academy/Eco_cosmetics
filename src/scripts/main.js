'use strict';

const page = document.querySelector('.page');
const toggle = document.querySelector('.nav__toggle');
const list = document.querySelector('.nav__list');
const lines = document.querySelectorAll('.nav__toggle-line');
const firstLine = document.querySelector('.line--1');
const secondLine = document.querySelector('.line--2');
const thirdLine = document.querySelector('.line--3');
const links = document.querySelectorAll('.nav__link');

function toOpenMenu() {
  list.classList.toggle('nav__list--open');
  toggle.classList.toggle('nav__toggle--active');
  lines.forEach(line => line.classList.toggle('nav__toggle-line--active'));
  firstLine.classList.toggle('line--1--active');
  secondLine.classList.toggle('line--2--active');
  thirdLine.classList.toggle('line--3--active');
  page.classList.toggle('page__non-scroll');
  links.forEach(link => link.classList.toggle('nav__link--open'));
};

list.addEventListener('click', event => {
  const target = event.target;

  if (!target.classList.contains('nav__link')) {
    return;
  }

  return toOpenMenu();
});

function checkMediaQuery() {
  if (window.innerWidth > 768) {
    list.classList.remove('nav__list--open');
    toggle.classList.remove('nav__toggle--active');
    lines.forEach(line => line.classList.remove('nav__toggle-line--active'));
    firstLine.classList.remove('line--1--active');
    secondLine.classList.remove('line--2--active');
    thirdLine.classList.remove('line--3--active');
    page.classList.remove('page__non-scroll');
    links.forEach(link => link.classList.remove('nav__link--open'));
  }
}

toggle.addEventListener('click', toOpenMenu);
window.addEventListener('resize', checkMediaQuery);
