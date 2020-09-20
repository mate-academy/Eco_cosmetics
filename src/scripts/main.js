'use strict';

const shopBtnRight = document.querySelector('.shop__slider-button--right ');
const shopBtnLeft = document.querySelector('.shop__slider-button--left');
const shop = document.querySelectorAll('.shop__tabs .shop__galery');

shop.forEach(item => (item.style.overflowX = 'hidden'));

shopBtnRight.addEventListener('click', event => {
  shop.forEach(item => {
    item.scrollLeft += document.querySelector('.shop__item--image ').width;
  });
});

shopBtnLeft.addEventListener('click', event => {
  shop.forEach(item => {
    item.scrollLeft -= document.querySelector('.shop__item--image ').width;
  });
});

const contactForm = document.querySelector('.contacts__form');

contactForm.addEventListener('submit', event => {
  event.preventDefault();

  [...document.querySelectorAll('.contacts__form-input')].map(item => {
    item.value = '';

    return item;
  });
  document.querySelector('.contacts__form-textarea').value = '';
});
