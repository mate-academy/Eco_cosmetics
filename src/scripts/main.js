'use strict';
import 'intersection-observer';

const header = document.querySelector('.header');
const elements = document.querySelectorAll('.animation-wrapper');
const menu = document.querySelector('.icon-menu');

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    header.classList.add('scroll');
    menu.classList.add('menu-fixed');
  } else {
    header.classList.remove('scroll');
    menu.classList.remove('menu-fixed');
  }
});

function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      const target = change.target;
      const blockLeft = target.querySelector('.animation-left');
      const blockRight = target.querySelector('.animation-right');
      const blockTop = target.querySelector('.animation-top');

      if (blockLeft) {
        blockLeft.classList.add('show-left');
      }
      else if (blockRight) {
        blockRight.classList.add('show-right');
      }
      else if (blockTop) {
        blockTop.classList.add('show-top');
      }
    }
  });
}

const options = {
  threshold: 0.3,
};

const observer = new IntersectionObserver(onEntry, options);

for (const elm of elements) {
  observer.observe(elm);
}
