'use strict';

export const sliderDots = [...document.querySelectorAll('.slider__dots-item')];

export function dotClick(dot, index) {
  const sliderItems = [...document.querySelectorAll('.slider__item')];
  const sliderScroll = document.querySelector('.slider__scroll');
  let width = 0;

  sliderDots.forEach(item => item.classList.remove('slider__dots-item--active'));
  dot.classList.add('slider__dots-item--active');

  if (sliderScroll.offsetWidth < 536) {
    width = sliderItems[index].offsetWidth * index;
  } else {
    width = sliderItems[index].offsetWidth * index + (index * 20);
  }

  sliderScroll.style.transform='translateX(-' + width + 'px)';
}

sliderDots.forEach((dot, index) => dot.addEventListener('click', (e) => {
  dotClick(e.target, index);
}));
