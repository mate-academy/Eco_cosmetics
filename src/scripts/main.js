'use strict';

window.addEventListener('load', (events) => {
  const shopSlides = document.querySelectorAll('.shop__slide');
  const shopIcon = document.querySelectorAll('.opencart');
  const closeIcon = document.querySelector('.close-cart');
  const popup = document.querySelector('.popup');
  const cart = document.querySelector('.cart-out');
  const body = document.querySelector('#body');
  const shopButton = document.querySelector('.shop__button');
  const shopButtonClose = document.querySelector('.shop__button-close');
  const form = document.querySelector('.contact__form');

  shopIcon.forEach(el => {
    el.addEventListener('click', e => {
      cart.classList.add('show');
      body.style.overflowY = 'hidden';
    });
  });

  closeIcon.addEventListener('click', e => {
    cart.classList.remove('show');
    body.style.overflowY = 'scroll';
  });

  shopSlides.forEach(el => {
    el.addEventListener('click', e => {
      document.querySelector('.popup-image').src
        = el.childNodes[1].childNodes[5].src;
      popup.classList.add('show');
      body.style.overflowY = 'hidden';
    }, true);
  });

  popup.addEventListener('click', event => {
    if (event.target === popup
      || event.target.classList.contains('close-popup')) {
      popup.classList.remove('show');
      body.style.overflowY = 'scroll';
    }
  });

  shopButton.addEventListener('click', e => {
    e.preventDefault();

    const products = document.querySelector('.shop__allproducts');

    products.style.width = '100%';

    setTimeout(() => {
      products.style.borderBottomColor = '#344f10';
      products.style.overflow = 'auto';
      products.style.height = '100%';
    }, 1000);
  });

  shopButtonClose.addEventListener('click', e => {
    e.preventDefault();

    const products = document.querySelector('.shop__allproducts');

    products.style.borderBottomColor = 'transparent';
    products.style.overflow = 'hidden';
    products.style.height = '0';

    setTimeout(() => {
      products.style.width = '0';
    }, 1000);
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    e.target.reset();
  });

  const buyButton = document.querySelectorAll('.product__button');
  const cartCounter = document.querySelector('.card-counter');

  cartCounter.style.opacity = 0;

  const buyButtonCounter = [];
  let globalBuyCounter = 0;

  buyButtonCounter.length = buyButton.length;
  buyButtonCounter.fill(0);

  buyButton.forEach((el, i) => {
    el.addEventListener('click', event => {
      if (event.target.classList.contains('product__button')) {
        if (buyButtonCounter[i] !== 0) {
          const count = document.querySelector(`.counter-${i}`);
          const amount = document.querySelector(`.amount-${i}`);
          const price = document.querySelector(`.price-${i}`);
          const num = price.innerHTML.split(' ')[0];

          buyButtonCounter[i] += 1;
          count.innerHTML = buyButtonCounter[i];
          amount.innerHTML = buyButtonCounter[i] * num;
          globalBuyCounter = buyButtonCounter.reduce((acc, elem) => acc + elem);
          cartCounter.innerHTML = globalBuyCounter;
          cartCounter.style.opacity = 1;

          return;
        }

        const cartTable = document.querySelector('.cart__table-body');
        const productImage = document.querySelector('.popup-image').src;
        const productName = document.querySelector('.popup-title');
        const productNameBefore
          = window.getComputedStyle(productName, ':before');
        const productPrice = document.querySelector('.popup-price').innerHTML;
        const row = document.createElement('TR');
        const cellPosition = document.createElement('TD');
        const cellImageCell = document.createElement('TD');
        const cellImage = document.createElement('IMG');
        const cellName = document.createElement('TD');
        const cellNumber = document.createElement('TD');
        const cellPrice = document.createElement('TD');
        const cellAmount = document.createElement('TD');

        cellImageCell.appendChild(cellImage);

        row.classList.add('cart__table-row');
        cellNumber.classList.add(`counter-${i}`);
        cellAmount.classList.add(`amount-${i}`);
        cellPrice.classList.add(`price-${i}`);
        cellPosition.classList.add('cart__product-position');
        cellImageCell.classList.add('cart__product-imageCell');
        cellImage.classList.add('cart__product-image');
        cellName.classList.add('cart__product-name');
        cellNumber.classList.add('cart__product-number');
        cellPrice.classList.add('cart__product-price');
        cellAmount.classList.add('cart__product-amount');

        cellPosition.innerHTML = document.querySelectorAll('.cart__table-row')
          .length;

        if (cellPosition.innerHTML === '0') {
          cellPosition.innerHTML = 1;
        };

        cellImage.src = productImage;
        cellName.innerHTML = productNameBefore.getPropertyValue('content');
        cellNumber.innerHTML = +cellNumber.innerHTML + 1;
        cellPrice.innerHTML = productPrice;

        const number = cellPrice.innerHTML.split(' ')[0];

        cellAmount.innerHTML = cellNumber.innerHTML * number;

        row.appendChild(cellPosition);
        row.appendChild(cellImageCell);
        row.appendChild(cellName);
        row.appendChild(cellNumber);
        row.appendChild(cellPrice);
        row.appendChild(cellAmount);
        cartTable.appendChild(row);
        buyButtonCounter[i] += 1;
        globalBuyCounter = buyButtonCounter.reduce((acc, elem) => acc + elem);
        cartCounter.innerHTML = globalBuyCounter;
        cartCounter.style.opacity = 1;
      }
    });
  });
});
