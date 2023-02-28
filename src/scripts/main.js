'use strict';

// LOADING
const spinner = document.querySelector('.loader');

window.onload = function() {
  spinner.style.display = 'block';
};

window.addEventListener('load', () => {
  spinner.style.display = 'none';
});

// HAMBURGER MENU

const hamburger = document.querySelectorAll('.hamburger');
const navMenu = document.querySelectorAll('.menu__list');

hamburger.forEach(item => (
  item.addEventListener('click', () => {
    item.classList.toggle('active');
    navMenu.forEach(nav => (nav.classList.toggle('active')));

    document.body.style.overflowY = (
      document.body.style.overflowY === 'hidden'
        ? 'visible' : 'hidden'
    );
  })
));

// SWITCHER BETWEEN SHOP ITEMS

const links = document.querySelectorAll('.shop__navigation-link');
const containers = document.querySelectorAll('.shop__item-container');

links.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();

    const target = event.target.getAttribute('href').substring(1);

    containers.forEach((container) => {
      if (container.id === target) {
        container.removeAttribute('hidden');
      } else {
        container.setAttribute('hidden', true);
      }
    });
  });
});

// PREVENT FORM RESET

const form = document.querySelector('.contact-us__form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.reset();
});

// BUY AND ADD TO BAG

const itemImage = document.querySelectorAll('.shop__item-img');
const closeShopItem = document.querySelectorAll('.item__cross');
const shopItem = document.querySelector('.shop__item');
const shipping = document.querySelector('.shipping');
const itemButton = document.querySelector('.item__button');
const addtoCart = document.querySelector('.shipping__button');
const payment = document.querySelector('.payment');
const paymentButton = document.querySelector('.payment__button');
const confirmation = document.querySelector('.confirmation');
const confirmationLink = document.querySelector('.confirmation__link');

function appendItem(item) {
  item.classList.add('show');
  document.body.classList.add('stop-scrolling');
  document.body.classList.add('overlay');
};

function closeItem(item) {
  item.classList.remove('show');

  document.body.classList.remove('stop-scrolling');
  document.body.classList.remove('overlay');
};

itemImage.forEach(item => item.addEventListener('click',
  () => appendItem(shopItem)));

closeShopItem.forEach(cross => (
  cross.addEventListener('click',
    () => {
      closeItem(shopItem);
      closeItem(shipping);
      closeItem(payment);
    }
  )
));

confirmationLink.addEventListener('click', () => {
  closeItem(confirmation);
  closeItem(shopItem);
  closeItem(shipping);
  closeItem(payment);
});

itemButton.addEventListener('click', () => appendItem(shipping));

addtoCart.addEventListener('click', () => appendItem(payment));

paymentButton.addEventListener('click', () => appendItem(confirmation));

// SHIPPING FORM VALIDATION

const shippingForm = document.querySelector('.shipping__form');
const inputs = shippingForm.querySelectorAll('shipping__input');
const submitButton = shippingForm.querySelector('button');

function validateInputs() {
  let valid = true;

  inputs.forEach(input => {
    if (!input.value) {
      valid = false;
    }
  });

  return valid;
}

shippingForm.addEventListener('input', () => {
  if (validateInputs()) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
});

shippingForm.addEventListener('submit', (e) => {
  e.preventDefault();
});
