'use strict';

const list = document.querySelector('.catalog');
const next = document.querySelector('.sliders__right');
const prev = document.querySelector('.sliders__left');
const card = document.querySelector('.card');
const cardWidth = card.offsetWidth;

let position = 0;

next.addEventListener('click', () => {
  position += 1;
  list.style.transform = `translateX(${(-position * cardWidth)}px)`;
});

prev.addEventListener('click', () => {
  position -= 1;
  list.style.transform = `translateX(${-position * cardWidth}px)`;
});
