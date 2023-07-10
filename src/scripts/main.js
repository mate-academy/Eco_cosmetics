'use strict';

const form = document.querySelector('.contacts__form');

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--no-scroll');
  } else {
    document.body.classList.remove('page__body--no-scroll');
  }
});

form.addEventListener('submit', event => {
  event.preventDefault();
  form.reset();
});

document.addEventListener('DOMContentLoaded', () => {
  const chooseText = document.querySelector('.choose__text');
  const creatorsText = document
    .querySelector('.creators__main--desktop-paragraph');

  updateVisibility();

  window.addEventListener('resize', () => {
    updateVisibility();
  });

  function updateVisibility() {
    if (window.innerWidth < 1280) {
      chooseText.setAttribute('hidden', 'true');
      creatorsText.setAttribute('hidden', 'true');
    } else {
      chooseText.removeAttribute('hidden');
      creatorsText.removeAttribute('hidden');
    }
  }
});

const shopFace = document.querySelector('.shop__nav--face');
const shopBody = document.querySelector('.shop__nav--body');
const shopHair = document.querySelector('.shop__nav--hair');
const shopCandles = document.querySelector('.shop__nav--candles');

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#face') {
    shopFace.classList.add('shop__nav--selected');
    shopBody.classList.remove('shop__nav--selected');
    shopHair.classList.remove('shop__nav--selected');
    shopCandles.classList.remove('shop__nav--selected');
  }

  if (window.location.hash === '#body') {
    shopBody.classList.add('shop__nav--selected');
    shopFace.classList.remove('shop__nav--selected');
    shopHair.classList.remove('shop__nav--selected');
    shopCandles.classList.remove('shop__nav--selected');
  }

  if (window.location.hash === '#hair') {
    shopHair.classList.add('shop__nav--selected');
    shopBody.classList.remove('shop__nav--selected');
    shopFace.classList.remove('shop__nav--selected');
    shopCandles.classList.remove('shop__nav--selected');
  }

  if (window.location.hash === '#candles') {
    shopCandles.classList.add('shop__nav--selected');
    shopBody.classList.remove('shop__nav--selected');
    shopHair.classList.remove('shop__nav--selected');
    shopFace.classList.remove('shop__nav--selected');
  }
});
