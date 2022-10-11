'use strict';

const body = document.querySelector('.page__body');
const header = document.querySelector('.header');
const burger = document.querySelector('.header__burger');
const nav = document.querySelector('.header__nav');
const navList = document.querySelector('.nav__list');
const shoppingBag = document.querySelector('.header__shopping-bag');
const cart = document.querySelector('.shopping-bag');
const quantityProduct = document.querySelector('.shopping-bag__quantity');
const orderLinks = document.querySelector('.shopping-bag__list');
const shoppingBagLinks = [...document.querySelectorAll('.shopping-bag__link')];
const shippingInputs = document.querySelectorAll('.shipping__input');
const shippingButton = document.querySelector('.shipping__button');
const paymentButton = document.querySelector('.payment__button');
const shopPhase = document.querySelectorAll('.shopping-bag__phase-title');
const phaseTitle = [...shopPhase];
const shippingForm = document.querySelector('.shipping__form');
const payment = document.getElementById('payment');
const confirmation = document.getElementById('confirmation');
const paymentOption = document.querySelector('.payment__options');
const creditCard = document.querySelector('.payment__creditCard');
const onDelivery = document.querySelector('.payment__onDelivery');
const shopBlocks = document.querySelectorAll('.shop__block');
const productCards = [...document.querySelectorAll('.product-page')];
const shopCategories = document.querySelectorAll('.shop__category');
const addProductToCard = document.querySelectorAll('.product-page__button');
const faceBlock = document.getElementById('face');
const bodyBlock = document.getElementById('body');
const hairBlock = document.getElementById('hair');
const candlesBlock = document.getElementById('candles');
const allProduct = document.getElementById('allProducts');
const successOrder = document.querySelector('.confirmation__toShop');

if (quantityProduct.dataset.quantity === '0') {
  quantityProduct.classList.add('shopping-bag__quantity--hidden');
};

for (let i = 0; i < addProductToCard.length; i++) {
  addProductToCard[i].addEventListener('click', (ev) => {
    quantityProduct.classList.remove('shopping-bag__quantity--hidden');
    quantityProduct.textContent = +quantityProduct.dataset.quantity + 1;
    quantityProduct.dataset.quantity = +quantityProduct.textContent;
  });
}

function removeClassActive() {
  for (let i = 0; i < shoppingBagLinks.length; i++) {
    shoppingBagLinks[i].classList.remove('shopping-bag__link--active');
    phaseTitle[i].classList.remove('shopping-bag__phase-title--active');
  }
}

// открытие burger-menu //
burger.addEventListener('click', (ev) => {
  burger.classList.toggle('header__burger--active');
  nav.classList.toggle('header__nav--active');
  navList.classList.toggle('nav__list--active');
  body.classList.toggle('page__body--lock');
});

shoppingBag.addEventListener('click', (ev) => {
  cart.classList.toggle('shopping-bag--active');
  body.classList.toggle('page__body--lock');
});

navList.addEventListener('click', (ev) => {
  burger.classList.remove('header__burger--active');
  nav.classList.remove('header__nav--active');
  navList.classList.remove('nav__list--active');
  cart.classList.remove('shopping-bag--active');
  body.classList.remove('page__body--lock');
});

// переход по ссылкам оформления заказа //
orderLinks.addEventListener('click', (ev) => {
  const targetLink = ev.target;

  removeClassActive();

  if (targetLink.classList.contains('.shopping-bag__link')) {
    targetLink.classList.add('shopping-bag__link--active');
  }

  switch (targetLink.dataset.link) {
    case 'payment':
      phaseTitle[1].classList.add('shopping-bag__phase-title--active');
      payment.classList.add('payment--active');
      confirmation.classList.remove('confirmation--active');
      break;
    case 'confirmation':
      phaseTitle[2].classList.add('shopping-bag__phase-title--active');
      confirmation.classList.add('confirmation--active');
      payment.classList.remove('payment--active');
      break;
    case 'shipping':
      phaseTitle[0].classList.add('shopping-bag__phase-title--active');
      payment.classList.remove('payment--active');
      confirmation.classList.remove('confirmation--active');
      break;
  }
});

// shipping input first char upperCase //
[...shippingInputs].map(input => {
  input.placeholder
    = input.placeholder[0].toUpperCase() + input.placeholder.slice(1);
});

// валидация заполнения формы shipping //
const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
let allInputsValid = 0;

function inputValidation() {
  for (const input of [...shippingInputs]) {
    input.classList.remove('shipping__input--invalid');

    if (input.dataset.input !== 'postCode' && input.dataset.input !== 'email') {
      if (!input.value || input.value.length < 4) {
        input.classList.add('shipping__input--invalid');
      }
    }

    if (input.dataset.input === 'email') {
      if (!input.value.match(pattern) || !input.value) {
        input.classList.add('shipping__input--invalid');
      }
    }

    if (input.dataset.input === 'postCode') {
      if (!input.value) {
        input.classList.add('shipping__input--invalid');
      }
    }
  }
}

// проверка заполнения input при вводе //
shippingForm.addEventListener('input', (ev) => {
  inputValidation();
});

// нажатие кнопки next shipping //
shippingButton.addEventListener('click', (ev) => {
  allInputsValid = 0;
  inputValidation();

  for (const inputValid of [...shippingInputs]) {
    if (!inputValid.classList.contains('shipping__input--invalid')) {
      allInputsValid++;
    }
  }

  if (allInputsValid === [...shippingInputs].length) {
    removeClassActive();
    shoppingBagLinks[1].classList.add('shopping-bag__link--active');
    phaseTitle[1].classList.add('shopping-bag__phase-title--active');
    payment.classList.add('payment--active');
    confirmation.classList.remove('confirmation--active');
  }
});

for (const input of [...shippingInputs]) {
  if (input.value) {
    input.classList.remove('shipping__input--invalid');
  }
}

// нажатие button и выбор формы оплаты //
paymentOption.addEventListener('click', (ev) => {
  const targetOption = ev.target;

  if (targetOption.dataset.option === 'creditCard') {
    onDelivery.classList.remove('payment__option--active');
    creditCard.classList.add('payment__option--active');
  } else {
    creditCard.classList.remove('payment__option--active');
    onDelivery.classList.add('payment__option--active');
  }

  if (creditCard.classList.contains('payment__option--active')
    || onDelivery.classList.contains('payment__option--active')) {
    paymentButton.removeAttribute('disabled');
  };
});

paymentButton.addEventListener('click', (ev) => {
  removeClassActive();
  phaseTitle[2].classList.add('shopping-bag__phase-title--active');
  confirmation.classList.add('confirmation--active');
  payment.classList.remove('payment--active');
});

successOrder.addEventListener('click', (ev) => {
  removeClassActive();
  cart.classList.remove('shopping-bag--active');
  body.classList.remove('page__body--lock');
});

// открытие и закрытие карточки товара //
function findProduct(x) {
  for (const product of productCards) {
    if (product.dataset.product === x) {
      product.classList.add('product-page--active');
      header.classList.add('header--fixed');
    }
  }
}

function removeActiveProduct() {
  for (const product of productCards) {
    product.classList.remove('product-page--active');
  }
}

for (let i = 0; i < shopBlocks.length; i++) {
  shopBlocks[i].addEventListener('click', (evCard) => {
    removeActiveProduct();

    const card = evCard.target;

    switch (card.dataset.productName) {
      case 'hydrophilicOil':
        findProduct('hydrophilicOil');
        break;
      case 'lavenderShampoo':
        findProduct('lavenderShampoo');
        break;
      case 'faceCream':
        findProduct('faceCream');
        break;
    }
  });
}

nav.addEventListener('click', (ev) => {
  header.classList.remove('header--fixed');
  removeActiveProduct();
});

// переход по категориям shop //
for (let i = 0; i < shopCategories.length; i++) {
  shopCategories[i].addEventListener('click', (ev) => {
    const category = ev.target;

    if (!category.classList.contains('shop__category')) {
      return;
    }

    for (const shopCategory of shopCategories) {
      shopCategory.classList.remove('shop__category--active');
    }

    for (const shopBlock of shopBlocks) {
      shopBlock.classList.remove('shop__block--active');
    }

    category.classList.add('shop__category--active');

    switch (category.dataset.category) {
      case 'face':
        faceBlock.classList.add('shop__block--active');
        break;
      case 'body':
        bodyBlock.classList.add('shop__block--active');
        break;
      case 'hair':
        hairBlock.classList.add('shop__block--active');
        break;
      case 'candles':
        candlesBlock.classList.add('shop__block--active');
        break;
    }
  });
}

// all product //
allProduct.addEventListener('click', (ev) => {
  for (let i = 0; i < shopCategories.length; i++) {
    if (!shopBlocks[i].classList.contains('shop__block--active')) {
      shopBlocks[i].classList.toggle('shop__block--active');
    }
  };
});
