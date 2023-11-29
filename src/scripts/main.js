'use strict';

const page = document.querySelector('#page');
const menuIcon = document.querySelector('#menu-icon');
const menu = document.querySelector('#menu');
const cartIcon = document.querySelector('#cart-icon');
const logoIcon = document.querySelector('#logo-icon');
const cart = document.querySelector('#cart');
const topBar = document.querySelector('#top-bar');
const shopCart = document.querySelector('#cart-list');
const productCards = document.querySelectorAll('.product__card');
const productContainer = document.querySelector('#product-container');

let productToCart = '';
let price = '';
let cartClick = 0;

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('icons__container--click');
  menu.classList.toggle('page__menu-open');
  page.classList.toggle('page--overflow');
  topBar.classList.toggle('top-bar--menu');

  productContainer.firstElementChild.innerHTML = '';
  productContainer.classList.remove('show');
  page.classList.remove('page--overflow');
});

logoIcon.addEventListener('click', () => {
  cart.classList.remove('page__cart-open');
  page.classList.remove('page--overflow');
  menu.classList.remove('page__menu-open');

  productContainer.firstElementChild.innerHTML = '';
  productContainer.classList.remove('show');
});

cartIcon.addEventListener('click', () => {
  cartClick++;
  cart.classList.toggle('page__cart-open');
  page.classList.add('page--overflow');

  productContainer.firstElementChild.innerHTML = '';
  productContainer.classList.remove('show');

  if (cartClick % 2 === 0) {
    page.classList.remove('page--overflow');
  }
});

page.addEventListener('click', (e) => {
  if (e.target.classList.contains('nav__link')) {
    menu.classList.remove('page__menu-open');
    page.classList.remove('page--overflow');
    menuIcon.classList.remove('icons__container--click');

    if (window.screen.width < 1280) {
      topBar.classList.toggle('top-bar--menu');
    }
    productContainer.firstElementChild.innerHTML = '';
    productContainer.classList.remove('show');
    page.classList.remove('page--overflow');
  }

  if (e.target.classList.contains('button__shop')) {
    for (const product of productCards) {
      const div = document.createElement('div');

      div.style.display = 'flex';
      div.style.flexDirection = 'column';
      div.innerHTML = product.innerHTML;

      if (window.screen.width < 640) {
        addClassMobile(div.children);
      } else {
        div.style.display = 'grid';
        div.classList.add('grid-for-product-card');
        addClass(div.children);
      }

      productContainer.firstElementChild.append(div);
    }
    productContainer.classList.add('show');
    page.classList.add('page--overflow');
  }

  if (e.target.parentElement.classList.contains('product')) {
    const div = document.createElement('div');

    div.style.display = 'flex';
    div.style.flexDirection = 'column';
    div.innerHTML = e.target.parentElement.innerHTML;

    if (window.screen.width < 640) {
      addClassMobile(div.children);
    } else {
      div.style.display = 'grid';
      div.classList.add('grid-for-product-card');
      addClass(div.children);
    }

    productContainer.firstElementChild.append(div);

    productContainer.classList.add('show');
    page.classList.add('page--overflow');
  } else if (e.target.id === 'link-to-shop') {
    productContainer.firstElementChild.innerHTML = '';
    productContainer.classList.remove('show');
    page.classList.remove('page--overflow');
  }

  if (e.target.classList.contains('button__product')) {
    productToCart = e.target.parentElement.children[1].innerHTML;
    price = e.target.parentElement.children[2].innerHTML;

    const li = document.createElement('li');

    li.append(productToCart + '-' + price);
    shopCart.append(li);
    e.target.innerHTML = 'Added';
    e.target.classList.add('button__added');
  }

  if (e.target.classList.contains('button__slider')) {
    const childs = e.target.parentElement.children;
    let dependence = 0;
    let addIndex = 0;
    let indexLeft = 0;
    let direction = '';
    const targetClass = e.target.classList;

    switch (true) {
      case window.innerWidth >= 640
        && targetClass.contains('button__slider--left'):
        dependence = 1;
        addIndex = 1;
        direction = 'l';
        indexLeft = 1;
        break;

      case window.innerWidth >= 640:
        dependence = childs.length - 3;
        addIndex = 2;
        direction = 'r';
        break;

      case targetClass.contains('button__slider--right'):
        dependence = childs.length - 2;
        addIndex = 1;
        direction = 'r';
        break;

      case targetClass.contains('button__slider--left'):
        dependence = 1;
        addIndex = 1;
        direction = 'l';
        break;
    }

    for (let i = 1; i < childs.length - 1; i++) {
      if (window.getComputedStyle(childs[i]).display === 'flex') {
        childs[4].classList.remove('button__disabled');
        childs[0].classList.remove('button__disabled');

        if (i === dependence) {
          e.target.classList.add('button__disabled');
          break;
        }

        childs[i + indexLeft].style.display = 'none';

        let sign = 0;

        if (direction === 'r') {
          sign = i + addIndex;
        } else {
          sign = i - addIndex;
        }

        childs[sign].style.display = 'flex';

        if (i === dependence - 1 || i === 2) {
          e.target.classList.add('button__disabled');
          break;
        }

        break;
      }
    }
  }
});

function addClassMobile(childs) {
  childs[1].classList.add('show-order-1');
  childs[2].classList.add('show-order-2');
  childs[3].classList.add('show-description');
  childs[4].classList.add('show-description');
  childs[5].classList.add('show-description');
  childs[6].classList.add('show-description');
}

function addClass(childs) {
  childs[0].classList.add('height-for-product-card');
  childs[1].classList.add('show-margin');
  childs[2].classList.add('show-margin-2');
  childs[3].classList.add('show-description');
  childs[4].classList.add('button-product-card');
  childs[5].classList.add('show-description');
  childs[6].classList.add('show-description');
}
