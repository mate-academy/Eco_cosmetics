'use strict';

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
