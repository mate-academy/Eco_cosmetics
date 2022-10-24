'use strict';

const shopBtnRight = document.querySelector('.shop__slider-button--right');
const shopBtnLeft = document.querySelector('.shop__slider-button--left');
const shop = document.querySelectorAll('.shop__tabs .shop__gallery');
const hamburgerIcon = document.querySelector('.header__hamburger-menu-button');
const hamburgerMenu = document.querySelector('.small-header');
const hamburgerIconClose = document.querySelector(
  '.small-header__close-menu-button'
);
const shopItemImage = document.querySelector('.shop__item--image');
const hamburgerMenuLink = [...document.querySelectorAll('.small-nav__link')];

activeLink();

function activeLink() {
  const shopSections = document.querySelector('.shop__sections');
  const shopLink = document.querySelectorAll('.shop__link');

  shopSections.addEventListener('click', (e) => {
    const target = e.target;

    if (!target.classList.contains('shop__sections')) {
      [].forEach.call(shopLink, (link) => {
        link.classList.remove('_active');
      });
      target.classList.add('_active');
    }
  });
}

if (hamburgerIcon) {
  hamburgerIcon.addEventListener('click', () => {
    document.body.classList.toggle('_lock');
    hamburgerMenu.classList.toggle('_active');
  });
}

if (hamburgerIconClose) {
  hamburgerIconClose.addEventListener('click', () => {
    document.body.classList.remove('_lock');
    hamburgerMenu.classList.remove('_active');
  });
}

if (hamburgerMenuLink) {
  hamburgerMenuLink.forEach(link => link.addEventListener('click', () => {
    document.body.classList.remove('_lock');
    hamburgerMenu.classList.remove('_active');
  }));
}

shop.forEach(item => (item.style.overflowX = 'hidden'));

shopBtnRight.addEventListener('click', event => {
  shop.forEach(item => {
    item.scrollLeft += shopItemImage.width + 20;
  });
});

shopBtnLeft.addEventListener('click', event => {
  shop.forEach(item => {
    item.scrollLeft -= shopItemImage.width + 20;
  });
});

const contactForm = document.querySelector('.contacts__form');

contactForm.addEventListener('submit', event => {
  event.preventDefault();

  [...document.querySelectorAll('.contacts__form-input')].map(item => {
    item.value = '';

    return item;
  });
  document.querySelector('.contacts__form-textarea').value = '';
});
