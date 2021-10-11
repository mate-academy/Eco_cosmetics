'use strict';

const list = document.querySelector('.catalog');
const next = document.querySelector('.sliders__right');
const prev = document.querySelector('.sliders__left');
const card = document.querySelector('.card');
const cardWidth = card.offsetWidth;
const getprop = window.getComputedStyle(list, null).getPropertyValue('gap');
const prop = getprop.split('px');
const numProp = +prop[0];

let position = 0;

function move(shift) {
  const count = list.children.length;

  position += shift;
  next.disabled = position >= count - 3;
  prev.disabled = position <= 0;
  position = position % count;

  if (getprop === 'normal') {
    list.style.transform = `translateX(${(-position * cardWidth)}px)`;
  }

  list.style.transform = `translateX(${(-position * (cardWidth + numProp))}px)`;
}

next.addEventListener('click', () => {
  move(1);
});

prev.addEventListener('click', () => {
  move(-1);
});
