'use strict';

const icon = document.getElementById('header-burger');
const item1 = document.getElementById('item1');
const item2 = document.getElementById('item2');
const item3 = document.getElementById('item3');

icon.addEventListener('click', () => {
  document.getElementById('menu-container').classList.toggle('menu-opened');
});

item1.addEventListener('click', () => {
  document.getElementById('menu-container').classList.toggle('menu-opened');
});

item2.addEventListener('click', () => {
  document.getElementById('menu-container').classList.toggle('menu-opened');
});

item3.addEventListener('click', () => {
  document.getElementById('menu-container').classList.toggle('menu-opened');
});

const card = document.getElementById('card');
const truck = document.getElementById('truck');

card.addEventListener('click', (e) => {
  e.preventDefault();

  card.classList.add('checkout__method--active');
  truck.classList.remove('checkout__method--active');
});

truck.addEventListener('click', (e) => {
  e.preventDefault();

  truck.classList.add('checkout__method--active');
  card.classList.remove('checkout__method--active');
});
