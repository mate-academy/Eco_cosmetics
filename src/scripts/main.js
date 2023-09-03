'use strict';

const div = document.querySelector('.tab__img');
const height = document.querySelector(':root');

calcWidth();
window.addEventListener('resize', calcWidth);

function calcWidth() {
  height.style.setProperty('--height', div.clientWidth + 'px');
}
