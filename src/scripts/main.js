'use strict';

function toggleScroll() {
  const body = document.body;
  const menuComputedStyle = window.getComputedStyle(menu);
  const productComputedStyle = window.getComputedStyle(product);

  if (menuComputedStyle.opacity === '1'
  || productComputedStyle.opacity === '1') {
    body.classList.add('no-scroll');
  } else {
    body.classList.remove('no-scroll');
  }
}

const menu = document.getElementById('menu');
const product = document.getElementById('product');

function checkScreenWidth() {
  const screenWidth = window.innerWidth
  || document.documentElement.clientWidth;

  if (screenWidth > 1280) {
    menu.style.display = 'none';
    product.style.display = 'none';
  } else {
    menu.style.display = 'block';
    product.style.display = 'block';
  }
}

window.addEventListener('DOMContentLoaded', () => {
  checkScreenWidth();
  window.addEventListener('resize', checkScreenWidth);
});

menu.addEventListener('transitionend', toggleScroll);
product.addEventListener('transitionend', toggleScroll);
