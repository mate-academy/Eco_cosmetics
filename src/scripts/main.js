'use strict';

const isTablet = window.innerWidth >= 768;
const isDesktop = window.innerWidth >= 1280;
const menu = document.querySelector('.menu');
const menuOpener = document.querySelector('.icon--burger');
const cross = document.querySelector('.icon--cross');
const cart = document.querySelector('.cart');
const cartOpener = document.querySelector('.icon--cart');
const cartCross = document.querySelector('.icon--cart-cross');
const menuLinks = document.querySelectorAll('.menu__link');
const form = document.querySelector('.contact-us__form');
const previousButton = document.querySelector('.shop__previous-button');
const nextButton = document.querySelector('.shop__next-button');
const shopTabRadios = document.querySelectorAll('.shop__tab-radio');
const allProducts = document.querySelectorAll('.shop__products');
const productsWrapper = document.querySelector('.shop__products-wrapper');
let products = document.querySelector('.shop__products--show');
const productsCount = products.querySelectorAll('.shop__card').length;
const translateXStep = 100 / productsCount;
const lastProduct = productsCount - (isTablet ? 2 : 1);
let activeProduct = 0;
let startX = 0;
let startY = 0;
let endX = 0;
let endY = 0;

const openMenu = () => {
  menu.classList.add('menu--open');
  document.body.classList.add('page__body--with-menu');
};

const closeMenu = () => {
  menu.classList.remove('menu--open');
  document.body.classList.remove('page__body--with-menu');
};

const closeCart = () => {
  cart.classList.remove('cart--open');
  document.body.classList.remove('page__body--with-menu');
};

const moveProducts = () => {
  if (activeProduct < 0) {
    activeProduct = 0;

    return;
  }

  if (activeProduct > lastProduct) {
    activeProduct = lastProduct;

    return;
  }

  products.style.transform = `
    translateX(-${translateXStep * activeProduct}%)
  `;
};

menuOpener.addEventListener('click', openMenu);
cross.addEventListener('click', closeMenu);

menuLinks.forEach(item => item.addEventListener('click', closeMenu));

cartOpener.addEventListener('click', (e) => {
  e.stopPropagation();

  cart.classList.add('cart--open');

  if (!isDesktop) {
    document.body.classList.add('page__body--with-menu');
  }
});

cartCross.addEventListener('click', closeCart);

document.addEventListener('click', (e) => {
  if (e.target !== cart) {
    closeCart();
  }
});

nextButton.addEventListener('click', () => {
  activeProduct++;

  moveProducts();
});

previousButton.addEventListener('click', () => {
  activeProduct--;

  moveProducts();
});

productsWrapper.addEventListener('touchstart', (e) => {
  startX = e.changedTouches[0].clientX;
  startY = e.changedTouches[0].clientY;
});

productsWrapper.addEventListener('touchend', (e) => {
  endX = e.changedTouches[0].clientX;
  endY = e.changedTouches[0].clientY;

  if (Math.abs(startX - endX) > Math.abs(startY - endY)) {
    if (startX > endX) {
      activeProduct++;
    }

    if (startX < endX) {
      activeProduct--;
    }

    moveProducts();
  }
});

shopTabRadios.forEach(radio => radio.addEventListener('change', (e) => {
  allProducts.forEach(item => {
    if (e.target.checked && e.target.value === item.dataset.category) {
      item.classList.add('shop__products--show');
      products = item;
      activeProduct = 0;
      moveProducts();
    } else {
      item.classList.remove('shop__products--show');
    }
  });
}));

form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.reset();
});
