'use strict';

/* <<<--- add active class to links in the shop section --->>> */

const shopLinks = document.querySelectorAll('.shop__link');

function activeLink(event) {
  event.stopPropagation();

  const currentLink = document.querySelector('.active');

  if (currentLink) {
    currentLink.classList.remove('active');
  }

  this.classList.toggle('active');
}

shopLinks.forEach(item => item.addEventListener('click', activeLink));

/* <<<--- show all products in the shop section --->>> */

const allProductsButton = document.querySelector('#all-products');
const cards = document.querySelectorAll('.card');

function allVisible(event) {
  event.stopPropagation();
  cards.forEach(card => card.classList.add('card-visible'));
}

if (allProductsButton) {
  allProductsButton.addEventListener('click', allVisible);
}
