'use strict';

const description = document.querySelectorAll('.about-our-brand__description');
const buttonForText = document.querySelector('#button-more-brand');
const sliderContent = document.querySelector('.slider__content');
const viewShop = document.querySelector('#shop-view');
const secDescr = document.querySelectorAll('.about-the-creators__description');
const buttonForText2 = document.querySelector('#button-more-creators');
const form = document.querySelector('.form-field');

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#side-navigation') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const formInputs = form.querySelectorAll(`.form-field__input,
  .form-field__textarea`);

  formInputs.forEach(input => {
    if (input.value === '') {
      input.classList.add('form-field__error');
      input.classList.remove('form-field__success');
    } else {
      input.classList.remove('form-field__error');
      input.classList.add('form-field__success');
    }
  });

  e.target.reset();

  formInputs.forEach(input => {
    input.classList.remove('error');
    input.classList.remove('success');
  });
});

function checkDescription() {
  if (window.innerWidth < 1280) {
    for (let i = 1; i < description.length; i++) {
      description[i].classList.add('about-our-brand__description--hidden');
    }
  } else {
    for (let i = 2; i < description.length; i++) {
      description[i].classList.add('about-our-brand__description--hidden');
    }
  }
}

function checkDescription2() {
  if (window.innerWidth < 1280) {
    for (let i = 2; i < secDescr.length; i++) {
      secDescr[i].classList.add('about-the-creators__description--hidden');
    }
  } else {
    for (let i = 3; i < secDescr.length; i++) {
      secDescr[i].classList.add('about-the-creators__description--hidden');
    }
  }
}

buttonForText.addEventListener('click', function() {
  if (window.innerWidth < 1280) {
    for (let i = 1; i < description.length; i++) {
      description[i].classList.toggle('about-our-brand__description--hidden');
    }
  } else {
    for (let i = 2; i < description.length; i++) {
      description[i].classList.toggle('about-our-brand__description--hidden');
    }
  }
});

buttonForText2.addEventListener('click', function() {
  if (window.innerWidth < 1280) {
    for (let i = 2; i < secDescr.length; i++) {
      secDescr[i].classList.toggle('about-the-creators__description--hidden');
    }
  } else {
    for (let i = 3; i < secDescr.length; i++) {
      secDescr[i].classList.toggle('about-the-creators__description--hidden');
    }
  }
});

viewShop.addEventListener('click', () => {
  if (sliderContent.style.flexWrap === 'wrap') {
    sliderContent.style.flexWrap = 'nowrap';
    viewShop.innerHTML = 'All products';
  } else {
    sliderContent.style.flexWrap = 'wrap';
    viewShop.innerHTML = 'Hidden products';
  }
});

checkDescription();
checkDescription2();
