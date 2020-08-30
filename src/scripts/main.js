'use strict';

const buttonRight = document.querySelector('.shop__slider-button--right ');
const buttonLeft = document.querySelector('.shop__slider-button--left');
const shop = document.querySelectorAll('.shop__tabs .shop__galery');

shop.forEach(item => (item.style.overflowX = 'hidden'));
// document.querySelector('.shop__galery ').style.overflowX = 'hidden';

buttonRight.addEventListener('click', event => {
  shop.forEach(item => {
    item.scrollLeft += document.querySelector('.shop__item--image ').width;
  });
});

buttonLeft.addEventListener('click', event => {
  shop.forEach(item => {
    item.scrollLeft -= document.querySelector('.shop__item--image ').width;
  });
});
