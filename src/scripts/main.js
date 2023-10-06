'use strict';

import data from "../data.json";

const productData = {
  face: [],
  body: [],
  hair: [],
  candles: [],
}

const imageList = ['brand.8dc64900.jpg'];

data.forEach(item => {
  imageList.push(item.image);
  switch(item.category) {
    case 'face':
      productData.face.push(item);
      return;
    case 'body':
      productData.body.push(item);
      return;
    case 'hair':
      productData.hair.push(item);
      return;
    case 'candles':
      productData.candles.push(item);
      return;
    }
  }
);

const header = document.querySelector('.header');
const elements = document.querySelectorAll('.animation-wrapper');
const menu = document.querySelector('.icon--menu');
const navShop = document.querySelector('.nav-shop__list');
const toggle = document.querySelector('.toggle--aside');
const firstProduct = document.querySelector('.shop__product--1');
const secondProduct = document.querySelector('.shop__product--2');
const menuNav = document.querySelector('.menu__nav');
const product = document.querySelector('.product');
const buttonProduct = product.querySelector('.product__button');
const titleProduct = product.querySelector('.product__title');
const priceProduct = product.querySelector('.product__price');
const volumeProduct = product.querySelector('.product__volume');
const imageProduct = product.querySelector('.image--product');
const products = document.querySelector('.products');
const counter = document.querySelector('.counter');
const preview = document.querySelector('.brand__image');
const ingredientsProduct = product.querySelector('.product__text--ingredients');
const applicationProduct = product.querySelector('.product__text--application');
const productsContainer = document.querySelector('.products__container');
const select = document.querySelector('.select');

let index = 0;
let timerId;
const style = getComputedStyle(preview);
const pathIndex = style.backgroundImage.lastIndexOf('/')
const url = style.backgroundImage.slice(0, pathIndex + 1);

function changeImage() {
  if (index > 18) {
    index = 0;
    preview.src = imageList[index];
  }
  preview.style.backgroundImage = `${url}${imageList[index]}")`;
  index++;
  clearTimeout(timerId);
  timerId = setTimeout(changeImage, 2500);
}

timerId = setTimeout(changeImage, 0);

const bagProductId = localStorage.getItem('bagProductId');
let bag = JSON.parse(bagProductId) || [];

data.forEach(({id, title, category, price, image }) => {
  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.category = category;

  const link = document.createElement('a');
  link.setAttribute('href', '#product');
  link.classList.add('card__image');

  const img = document.createElement('img');
  img.setAttribute('src', image);
  img.setAttribute('alt', 'Product foto');
  img.classList.add('image', 'img');
  link.append(img);

  const titleCard = document.createElement('h3');
  titleCard.classList.add('card__title');
  titleCard.textContent = title;

  const p = document.createElement('p');
  p.classList.add('card__price');
  p.textContent = price;

  const button = document.createElement('button');
  button.dataset.productId = id;
  button.classList.add('card__button', 'button', 'add');
  bag.includes(id)
    ? button.classList.add('remove')
    : button.classList.remove('remove');

  card.append(link, titleCard, p, button);
  productsContainer.append(card);
});

let imageClassFirst = null;
let imageClassSecond = null;
const [firstImage, firstTitle, firstPrice] = firstProduct.children;
const [secondImage, secondTitle, secondPrice] = secondProduct.children;

navShop.addEventListener('input', ({target: {id}}) => {
  firstImage.children[0].classList.remove(imageClassFirst);
  secondImage.children[0].classList.remove(imageClassSecond);
  imageClassFirst = `shop-product__image--${id}-1`;
  imageClassSecond = `shop-product__image--${id}-2`;
  firstImage.children[0].classList.add(imageClassFirst);
  secondImage.children[0].classList.add(imageClassSecond);
  firstTitle.textContent = productData[id][0].title;
  secondTitle.textContent = productData[id][1].title;
  firstPrice.textContent = productData[id][0].price;
  secondPrice.textContent = productData[id][1].price;
})

const handleClickLink = ({target}) => {
  const currentTitle = target.closest('[href]').nextElementSibling.textContent;
  const product = data.find(item => item.title.toLowerCase() === currentTitle.toLowerCase());
  const {id, title, price, volume, image, ingredients, application } = product;
  titleProduct.textContent = title;
  priceProduct.textContent = price;
  volumeProduct.textContent = volume;
  imageProduct.src = image;
  ingredientsProduct.textContent = ingredients;
  applicationProduct.textContent = application;
  buttonProduct.dataset.productId = id;
  bag.includes(id)
    ? buttonProduct.classList.add('remove')
    : buttonProduct.classList.remove('remove');

}

const shopProductList = document.querySelectorAll('[href="#product"]');
shopProductList.forEach(item => item.addEventListener('click', handleClickLink));

function setCounterBag() {
  counter.textContent = `${bag.length}`;
  bag.length === 0
   ? counter.classList.remove('counter--visible')
   : counter.classList.add('counter--visible');
}

const handleClickButton = ({target}, button) => {
  const productId = target.dataset.productId;
  if (bag.includes(productId)) {
    bag = bag.filter(item => item !== productId);
    target.classList.remove('remove');
    button ? button.classList.remove('remove') : '';
  } else {
    bag.push(productId);
    target.classList.add('remove');
    button ? button.classList.add('remove') : '';

  }
  setCounterBag();
  return;
}

buttonProduct.addEventListener('click', (e) => {
  const productId = e.target.dataset.productId;
  const button = products.querySelector(`[data-product-id="${productId}"]`);
  handleClickButton(e, button);
})


const buttonsList = document.querySelectorAll('.card__button');
buttonsList.forEach(item => item.addEventListener('click', handleClickButton));

const buttonsListId = document.querySelectorAll('[data-product-id]');
buttonsListId.forEach(button => {
  const productId = button.dataset.productId;
  if (bag.includes(productId)) {
    button.classList.add('remove');
  }
  setCounterBag();
})

const cardsList = productsContainer.querySelectorAll('.card');
function filterProducts(option) {
  cardsList.forEach(card => {
    if (card.dataset.category === option || option === 'all products') {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';;
    }
  })
}

select.addEventListener('click', ({target}) => {
  const list = select.children[1].children[0];
  const button = select.children[0];
  if (target.matches('button') || target.matches('.select__angle')) {
    list.classList.toggle('select__list--open');
    button.children[0].classList.toggle('select__angle--close');
  }
  if (target.matches('input')) {
    button.childNodes[0].textContent = target.value;
    list.classList.toggle('select__list--open');
    filterProducts(target.value);
    button.children[0].classList.toggle('select__angle--close');
  }
})

menuNav.addEventListener('click', ({target}) => {
  if (target.matches('.menu__link')) {
    toggle.checked = "true";
  } else {
    return;
  }
})

let prevTarget = null;

document.addEventListener('click', ({target}) => {
  let link = target.hasAttribute("href");
  let active = 'nav__link--active';

  if (link) {
    if (prevTarget) {
      if (!['#shop', '#contact','#about'].includes(target.getAttribute("href"))) {
        prevTarget.classList.remove(active);
        prevTarget = null;
        return;
      } else {
        prevTarget.classList.remove(active);
        target.classList.add(active);
        prevTarget = target;
      }
    }

    if (!prevTarget) {
      target.classList.add(active);
      prevTarget = target;
    }
  }

  if ( !link) {
    if (prevTarget) {
      return;
    }

    return;
  }
})

window.onbeforeunload = function() {
  localStorage.setItem('bagProductId', JSON.stringify(bag));
};

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

