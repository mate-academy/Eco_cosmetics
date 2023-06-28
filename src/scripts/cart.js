'use strict';

const productsBtn = document.querySelectorAll('.card__btn');
const cartProductsList = document.querySelector('.cart-content__list');
const cart = document.querySelector('.cart');
const cartQuantity = cart.querySelector('.cart__quantity');
const fullPrice = document.querySelector('.cart-content__total-price');
let price = 0;

const randomId = () => {
  return Math.random().toString(36).substring(2, 15)
  + Math.random().toString(36).substring(2, 15);
};

const priceWithoutSpaces = (str) => {
  return str.replace(/\s/g, '');
};

const normalPrice = (str) => {
  return String(str).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
};

const plusFullPrice = (currentPrice) => {
  price += currentPrice;
};

const minusFullPrice = (currentPrice) => {
  price -= currentPrice;
};

const printFullPrice = () => {
  fullPrice.textContent = `${normalPrice(price)}`;
};

const printQuantity = () => {
  const productsListLength = cartProductsList.querySelector(
    '.cart-content__list-container'
  ).children.length;

  cartQuantity.textContent = productsListLength;

  productsListLength > 0
    ? cart.classList.add('cart--active')
    : cart.classList.remove('cart--active');

  if (productsListLength === 0) {
    document.querySelector('.cart-content').classList.remove(
      'cart-content--active'
    );
  }
};

const generateCartProduct = (img, title, cost, id) => {
  return `
    <li class="cart-content__item">
      <article class="cart-content__product cart-product" data-id="${id}">
        <img src="${img}" class="cart-product__img" alt="${title}">

        <div class="cart-product__text">
          <h5 class="cart-product__title">${title}</h5>
          <span class="cart-product__price">${normalPrice(cost)}</span>
        </div>

        <button class="cart-product__delete" aria-label="Delete"></button>
      </article>
    </li>
  `;
};

const deleteProducts = (productParent) => {
  const id = productParent.querySelector('.cart-product').dataset.id;

  document.querySelector(`.card[data-id="${id}"]`).querySelector(
    '.card__btn'
  ).disabled = false;

  const currentPrice = parseInt(
    priceWithoutSpaces(
      productParent.querySelector('.cart-product__price').textContent
    )
  );

  minusFullPrice(currentPrice);
  printFullPrice();
  productParent.remove();
  printQuantity();
};

productsBtn.forEach(el => {
  el.closest('.card').setAttribute('data-id', randomId());

  el.addEventListener('click', (e) => {
    const self = e.currentTarget;
    const parent = self.closest('.card');
    const id = parent.dataset.id;
    const img = parent.querySelector('.card__img').getAttribute('src');
    const title = parent.querySelector('.card__title').textContent;
    const priceString = priceWithoutSpaces(
      parent.querySelector('.card__cost--common').textContent
    );

    const priceNumber = parseInt(
      priceWithoutSpaces(
        parent.querySelector('.card__cost--common').textContent
      )
    );

    plusFullPrice(priceNumber);
    printFullPrice();

    cartProductsList.querySelector(
      '.cart-content__list-container'
    ).insertAdjacentHTML(
      'afterbegin', generateCartProduct(img, title, priceString, id)
    );
    printQuantity();
    self.disabled = true;
  });
});

cartProductsList.addEventListener('click', (e) => {
  if (e.target.classList.contains('cart-product__delete')) {
    deleteProducts(e.target.closest('.cart-content__item'));
  }
});
