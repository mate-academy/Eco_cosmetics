'use strict';

// HAMBURGER MENU

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.menu__list');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');

  document.body.style.overflowY = (
    document.body.style.overflowY === 'hidden'
      ? 'visible' : 'hidden'
  );
});

document.querySelectorAll('.menu__link').forEach(link => (
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  }))
);

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

// FORM PREVENT RESET

const form = document.querySelector('.contact-us__form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.reset();
});

// BUY AND ADD TO BAG

const itemImage = document.querySelectorAll('.shop__item-img');
const closeShopItem = document.querySelector('.item__cross');
const shopItem = document.querySelector('.shop__item');
const itemButton = document.querySelector('.item__button');

const appendItem = () => {
  shopItem.classList.add('show');
  document.body.classList.add('stop-scrolling');
  document.body.classList.add('overlay');
};

const closeItem = () => {
  shopItem.classList.remove('show');
  document.body.classList.remove('stop-scrolling');
  document.body.classList.remove('overlay');
};

itemImage.forEach(item => item.addEventListener('click', appendItem));

closeShopItem.addEventListener('click', closeItem);

itemButton.addEventListener('click', closeItem);
