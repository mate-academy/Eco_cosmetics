'use strict';

window.addEventListener('DOMContentLoaded', (events) => {
  const shopSlides = document.querySelectorAll('.shop__slide');
  const popup = document.querySelector('.popup');
  const body = document.querySelector('#body');
  const shopButton = document.querySelector('.shop__button');
  const shopButtonClose = document.querySelector('.shop__button-close');

  shopSlides.forEach(el => {
    el.addEventListener('click', e => {
      document.querySelector('.popup-image').src
        = el.childNodes[1].childNodes[5].src;
      popup.classList.add('show');
      body.style.overflow = 'hidden';
    }, true);
  });

  popup.addEventListener('click', event => {
    if (event.target === popup
      || event.target.classList.contains('close-popup')) {
      popup.classList.remove('show');
      body.style.overflow = 'scroll';
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
});
