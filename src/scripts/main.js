'use strict';

const navEl = document.querySelector('.burger-menu__navigation');
const toggle = document.getElementById('toggle');

navEl.addEventListener('click', disableNav);

function disableNav(event) {
  if (event.target.tagName !== 'A') {
    return;
  }

  toggle.checked = false;
}

const leftShopButton = document.querySelector('.sliders__slider--left');
const rightShopButton = document.querySelector('.sliders__slider--right');

const productContainer = document.querySelector('.products');
const products = [...document.querySelectorAll('.product')];

rightShopButton.addEventListener('click', () => {
  productContainer.append(products[0]);

  products.push(products.shift());
});

leftShopButton.addEventListener('click', () => {
  productContainer.prepend(products[products.length - 1]);

  products.unshift(products.pop());
});

const shopNavigationButtons
  = document.querySelectorAll('.shop__navigation-button');
let selectedButton
  = document.querySelector('.shop__navigation-button--active');

shopNavigationButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (button !== selectedButton) {
      button.classList.add('shop__navigation-button--active');
      selectedButton.classList.remove('shop__navigation-button--active');
      selectedButton = button;
    }
  });
});
