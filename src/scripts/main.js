'use strict';

const shopSection = document.querySelector('.page__shop');

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#goods-card'
  || window.location.hash === '#shipping'
  || window.location.hash === '#payment'
  || window.location.hash === '#confirmation') {
    document.body.classList.add('page__shop--with-menu');
    shopSection.classList.add('page__shop--with-menu');
  } else {
    document.body.classList.remove('page__shop--with-menu');
    shopSection.classList.remove('page__shop--with-menu');
  }
});

const categories = document.querySelectorAll('.shopping-categories__category');

changeCategories();

function changeCategories() {
  for (let i = 0; i < categories.length; i++) {
    categories[i].addEventListener('click', function() {
      removeActive();
      categories[i].classList.add('shopping-categories__category--active');
    });
  }

  function removeActive() {
    for (let i = 0; i < categories.length; i++) {
      categories[i].classList.remove('shopping-categories__category--active');
    }
  }
}

const categoryCards = document.querySelectorAll('.product-cards');

makeInactive();
showCategory();

categories[0].click();

function showCategory() {
  for (let i = 0; i < categories.length; i++) {
    categories[i].addEventListener('click', function() {
      makeInactive();
      categoryCards[i].classList.remove('product-cards--inactive');
    });
  }
}

function makeInactive() {
  for (let i = 0; i < categoryCards.length; i++) {
    categoryCards[i].classList.add('product-cards--inactive');
  }
}

changeElements();

function changeElements() {
  const goodsTitle = document.querySelector('.goods-card__title');
  const goodsPrice = document.querySelector('.goods-card__price');
  const goodsWeight = document.querySelector('.goods-card__weight');
  const goodsPhoto = document.querySelector('.goods-card__photo');
  const goodsIngredients = document.querySelector('.goods-card__ingredients');
  const goodsApplication = document.querySelector('.goods-card__application');

  const productCards = document.querySelectorAll('.product-card');

  const productCardTitles = document.querySelectorAll('.product-card__title');
  const productCardPrices = document.querySelectorAll('.product-card__price');
  const productCardWeights = document.querySelectorAll('.product-card__weight');
  const productCardPhotos = document.querySelectorAll('.product-card__photo');
  const prodIngreds = document.querySelectorAll('.product-card__ingredients');
  const prodApplic = document.querySelectorAll('.product-card__application');

  for (let i = 0; i < productCards.length; i++) {
    productCards[i].addEventListener('click', function() {
      goodsTitle.textContent = productCardTitles[i].textContent;
      goodsPrice.textContent = productCardPrices[i].textContent;
      goodsPhoto.src = productCardPhotos[i].src;
      goodsWeight.textContent = productCardWeights[i].textContent;
      goodsIngredients.textContent = prodIngreds[i].textContent;
      goodsApplication.textContent = prodApplic[i].textContent;
    });
  }
}

const contactForm = document.querySelector('.form');

contactForm.addEventListener('submit', function(event) {
  event.preventDefault();
  contactForm.reset();
});

const textAreaMessage = document.getElementById('contact-form-message');
let messageLastScrollHeight = textAreaMessage.scrollHeight;

textAreaMessage.oninput = function() {
  let rows = parseInt(textAreaMessage.getAttribute('rows'));

  if (textAreaMessage.scrollHeight > messageLastScrollHeight) {
    rows++;
  } else if (textAreaMessage.scrollHeight < messageLastScrollHeight) {
    rows--;
  }

  messageLastScrollHeight = textAreaMessage.scrollHeight;
  textAreaMessage.setAttribute('rows', rows);
};

const buyingForm = document.querySelector('.buying-form');
const shippingButton = document.querySelector('.shipping__next-button');

shippingButton.addEventListener('click', function() {
  buyingForm.reset();
});

const contactFormInputs = document.querySelectorAll('.form__field');
const buyingFormInputs = document.querySelectorAll('.buying-form__input-field');

changeInputStyle(contactFormInputs, 'form__field--filled');
changeInputStyle(buyingFormInputs, 'buying-form__input-field--filled');

function changeInputStyle(inputs, classForFilledInputs) {
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('change', function() {
      if (inputs[i].value.length !== 0) {
        inputs[i].classList.add(classForFilledInputs);
      } else {
        inputs[i].classList.remove(classForFilledInputs);
      }
    });
  }
}
