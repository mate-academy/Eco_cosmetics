'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page--with-menu');
  } else {
    document.body.classList.remove('page--with-menu');
  }
});

const sliderWrapper = document.querySelector('.slider__wrapper');

for (let i = 1; i <= 4; i++) {
  const point = document.querySelector(`.slider__point--${i}`);
  const translate = 25 * i - 25;

  point.addEventListener('click', () => {
    sliderWrapper.style.transform = `translateX(-${translate}%)`;
  });
}

const form = document.querySelector('.form');

function stopRefreshing(event) {
  event.preventDefault();
  form.reset();
}

form.addEventListener('submit', stopRefreshing);

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#shop-page') {
    document.body.classList.add('page--with-shop');
  } else {
    document.body.classList.remove('page--with-shop');
  }
});
