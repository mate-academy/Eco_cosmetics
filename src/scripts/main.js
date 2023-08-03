'use strict';

const headerButton = document.querySelector('.button--header-button');
const creatorsButton = document.querySelector('.button--creators');
const shopSection = document.getElementById('shop');
const contactUsSection = document.getElementById('contact');
const menu = document.querySelector('.menu');
const burgerMenu = document.querySelector('.header__burger-menu');
const navLinkHeader = document.querySelectorAll('.nav__link--menu');
const body = document.querySelector('body');
const formContactUs = document.querySelector('.contact-us__form');
const shopMenuTabs = document.querySelectorAll('.shop__item');
const cardsBlock = document.querySelector('.shop__cards-block');
const showAllBtn = document.querySelector('.button--shop-section');
const socialContainer = document.querySelector('.footer__socials-wrapper');
const minWidth = 640;
let productsAmount = 0;
let selectedTab = document.querySelector('.shop__item--active');

socialContainer.innerHTML += `
  <a
  class="footer__icon-social"
  target="_blank"
  href="https://www.instagram.com/"
  >
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
  >
    <rect
      x=".5"
      y=".502"
      width="19"
      height="19"
      rx="4.5"
    />
    <circle
      cx="10"
      cy="10.002"
      r="3.5"
    />
    <circle
      cx="15.5"
      cy="4.502"
      r="1"
    />
  </svg>
  </a>
`;

headerButton.addEventListener('click', () => {
  shopSection.scrollIntoView({ behavior: 'smooth' });
});

creatorsButton.addEventListener('click', () => {
  contactUsSection.scrollIntoView({ behavior: 'smooth' });
});

burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('header__burger-menu--active');
  menu.classList.toggle('menu--active');
  body.classList.toggle('block-scroll');
});

navLinkHeader.forEach((link) => {
  link.addEventListener('click', () => {
    burgerMenu.classList.toggle('header__burger-menu--active');
    menu.classList.toggle('menu--active');
    body.classList.toggle('block-scroll');
  });
});

formContactUs.addEventListener('submit', (e) => {
  e.preventDefault();
  formContactUs.reset();
});

shopMenuTabs.forEach((link) => {
  link.addEventListener('click', () => {
    const currentLink = document.querySelector('.shop__item--active');

    currentLink.classList.toggle('shop__item--active');
    link.classList.toggle('shop__item--active');

    currentArray = fillWithProducts(link, productsAmount);
  });
});

const faceProducts = [
  {
    title: 'Hydrophilic oil',
    price: 160,
    imagePath: '/card1.5af1f614.jpg',
  },

  {
    title: 'ubtan',
    price: 160,
    imagePath: '/face-img-2.92888645.jpg',
  },
];

const bodyProducts = [
  {
    title: 'sea salt',
    price: 300,
    imagePath: '/img-body-1.1c31fef3.jpg',
  },

  {
    title: 'aloe cream',
    price: 100,
    imagePath: '/img-body-2.d820cb9f.jpg',
  },
];

const hairProducts = [
  {
    title: 'Almond Shampoo with Lavender Oil',
    price: 70,
    imagePath: '/hair-img-1.7adcf7bf.jpg',
  },

  {
    title: 'restorative nettle lotion',
    price: 150,
    imagePath: '/hair-img-2.1978ebcd.jpg',
  },
];

const candlesProducts = [
  {
    title: 'Coconut candle',
    price: 350,
    imagePath: '/candle-img-1.687ae3b8.jpg',
  },

  {
    title: 'candle with forest extract',
    price: 330,
    imagePath: '/candle-img-2.27da0c62.png',
  },
];

function fillWithProducts(currentTab, amount) {
  const tabName = currentTab.textContent;
  let arrayToAddFrom = null;

  switch (tabName) {
    case 'face':
      arrayToAddFrom = faceProducts;
      break;

    case 'body':
      arrayToAddFrom = bodyProducts;
      break;

    case 'hair':
      arrayToAddFrom = hairProducts;
      break;

    case 'candles':
      arrayToAddFrom = candlesProducts;
      break;
  }

  cardsBlock.innerHTML = '';

  for (let i = 0; i < amount; i++) {
    cardsBlock.innerHTML += `
      <article class="card" data-aos="fade-in">
        <img
          class="card__img"
          src="${arrayToAddFrom[i].imagePath}"
          alt="product_photo"
        >

        <h3 class="card__caption">
          ${arrayToAddFrom[i].title}
        </h3>

        <h4 class="card__price">
        ${arrayToAddFrom[i].price} UAH
        </h4>
      </article>
    `;
  }

  if (productsAmount >= arrayToAddFrom.length) {
    showAllBtn.style.display = 'none';
  } else {
    showAllBtn.style.display = 'block';
  }

  return arrayToAddFrom;
}

let currentArray = fillWithProducts(selectedTab, productsAmount);

showAllBtn.addEventListener('click', () => {
  selectedTab = document.querySelector('.shop__item--active');
  fillWithProducts(selectedTab, currentArray.length);
  showAllBtn.style.display = 'none';
});

const handleResize = () => {
  const screenWidth = window.innerWidth;

  if (screenWidth >= minWidth) {
    productsAmount = 2;
  } else {
    productsAmount = 1;
  }

  currentArray = fillWithProducts(selectedTab, productsAmount);
};

window.addEventListener('resize', handleResize);

handleResize();
