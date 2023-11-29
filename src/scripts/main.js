'use strict';
/* global Element */

// scroll functions //
function scrollToSection(shop) {
  const section = document.getElementById(shop);

  if (section) {
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
}

document.querySelector('.button__shop').addEventListener('click', function() {
  scrollToSection('shop');
});

document.querySelector('.creators__text__contact-button').addEventListener(
  'click', function() {
    scrollToSection('contact-us');
  });

// dropdown menu //
const dropdown = document.getElementById('myDropdown');
const triggerToOpen = document.querySelector('.dropdown__button');
const triggerToClose = dropdown.querySelector('.dropdown__button');
const menu = document.getElementById('myDropdown');
const links = document.getElementsByClassName('link');

triggerToOpen.addEventListener('click', (event) => {
  event.preventDefault();

  dropdown.classList.toggle('menu--active');
});

triggerToClose.addEventListener('click', (event) => {
  event.preventDefault();

  dropdown.classList.toggle('menu--active');
});

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', () => {
    menu.classList.remove('menu--active');
  });
}

// work with shop buttons //
const buttons = document.querySelectorAll('.shop__buttons__button');

if (buttons.length > 0) {
  buttons[0].classList.add('__active');
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(b => b.classList.remove('__active'));
    button.classList.add('__active');
  });
});

// contact-us //
document.addEventListener('DOMContentLoaded', function() {
  const showMessage = function(text) {
    const messageContainer = document.createElement('div');

    messageContainer.textContent = text;
    messageContainer.style.fontFamily = 'Poppins';
    messageContainer.style.backgroundColor = '#e4dfd3';
    messageContainer.style.padding = '10px';
    messageContainer.style.border = '1px solid #344f10';
    messageContainer.style.position = 'fixed';
    messageContainer.style.top = '50%';
    messageContainer.style.textAlign = 'center';
    messageContainer.style.left = '50%';
    messageContainer.style.transform = 'translate(-50%, -50%)';
    document.body.appendChild(messageContainer);

    setTimeout(function() {
      document.body.removeChild(messageContainer);
    }, 5000);
  };

  const formButton = document.querySelector('.contact-us__form__button');

  formButton.addEventListener('click', function() {
    const name = document.querySelector('.input-name').value;
    const email = document.querySelector('.input-email').value;
    const phone = document.querySelector('.input-tel').value;

    if (name && email && phone) {
      showMessage(`Thank you,
        ${name}, we will contact you as soon as possible.`);
    } else {
      showMessage('Please, fill in all fields before submitting the form!');
    }
  });
});

// sidebar //
const allProdButton = document.querySelector('.sidebarPage__button');
const cards = document.getElementById('sidebarPage');
const closer = cards.querySelector('.sidebar-closer');

allProdButton.addEventListener('click', (event) => {
  cards.classList.add('sidebarPage-active');
});

closer.addEventListener('click', (event) => {
  cards.classList.remove('sidebarPage-active');
});

// shopping bag //
const shoppingbag = document.getElementById('shoppingbag');
const bagTriggers = document.querySelectorAll('.shoppingbag__button');
const cartCloser
  = document.querySelector('.shoppingbag-content__closer');

bagTriggers.forEach((bagTrigger) => {
  if (bagTrigger instanceof Element) {
    bagTrigger.addEventListener('click', (event) => {
      shoppingbag.classList.toggle('shoppingbag-active');
    });
  }
});

cartCloser.addEventListener('click', () => {
  shoppingbag.classList.remove('shoppingbag-active');
});

// add to shopping bag //
const Message = function(text) {
  const messageContainer = document.createElement('div');

  messageContainer.textContent = text;
  messageContainer.style.fontFamily = 'Poppins';
  messageContainer.style.backgroundColor = '#e4dfd3';
  messageContainer.style.padding = '10px';
  messageContainer.style.border = '1px solid #344f10';
  messageContainer.style.position = 'fixed';
  messageContainer.style.top = '50%';
  messageContainer.style.textAlign = 'center';
  messageContainer.style.left = '50%';
  messageContainer.style.transform = 'translate(-50%, -50%)';
  messageContainer.style.zIndex = '3';
  document.body.appendChild(messageContainer);

  setTimeout(function() {
    document.body.removeChild(messageContainer);
  }, 1000);
};

document.addEventListener('DOMContentLoaded', function() {
  const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
  const shoppingbagContent
    = document.querySelector('.shoppingbag-content__bag');

  const shoppingCart = [];
  let total = 0;

  addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
      const card = button.closest('.allProdCard');
      const title = card.querySelector('.allProdCard__title').textContent;
      const price = card.querySelector('.allProdCard__price').textContent;
      const img = card.querySelector('.allProdCard__img').getAttribute('src');

      const product = {
        title: title.toLocaleUpperCase(),
        price: parseFloat(price),
        img: img,
      };

      shoppingCart.push(product);

      total += product.price;

      Message('Added successfully');

      updateShoppingCartUI();
    });
  });

  function updateShoppingCartUI() {
    shoppingbagContent.innerHTML = '';

    shoppingCart.forEach(product => {
      const productItem = document.createElement('div');

      productItem.classList.add('shoppingbag-content__bag__item');
      productItem.style.display = 'flex';
      productItem.style.color = 'black';
      productItem.style.marginBottom = '20px';
      productItem.style.padding = '5px';
      productItem.style.flexDirection = 'row';
      productItem.style.justifyContent = 'left';
      productItem.style.alignItems = 'center';
      productItem.style.gap = '10px';
      productItem.style.width = '100%';
      productItem.style.borderBottom = '1px solid black';

      const productImg = document.createElement('img');

      productImg.classList.add('shopping-content__bag__img');
      productImg.src = product.img;
      productImg.style.height = '35px';
      productImg.style.width = '35px';
      productImg.style.borderRadius = '5px';
      productItem.appendChild(productImg);

      const productDetails = document.createElement('div');

      productDetails.textContent = `${product.title} - ${product.price} UAH`;
      productItem.appendChild(productDetails);

      shoppingbagContent.appendChild(productItem);
    });

    if (shoppingCart.length > 0) {
      const submitButtonContainer = document.createElement('div');

      submitButtonContainer
        .classList.add('shopping-content__submit-button-container');
      submitButtonContainer.style.display = 'flex';
      submitButtonContainer.style.justifyContent = 'flex-end';
      submitButtonContainer.style.marginTop = '10px';
      submitButtonContainer.style.width = '100%';

      const submitButton = document.createElement('button');

      submitButton.classList.add('shoppingbag-content__button', 'button__main');
      submitButton.style.width = '100%';
      submitButton.textContent = 'Submit and Pay';

      const totalCost = document.createElement('div');

      totalCost.classList.add('shoppingbag-content__bag__item');
      totalCost.style.display = 'flex';
      totalCost.style.color = 'black';
      totalCost.style.marginBottom = '15px';
      totalCost.style.flexDirection = 'row';
      totalCost.style.justifyContent = 'left';
      totalCost.style.alignItems = 'center';
      totalCost.style.width = '100%';

      totalCost.textContent = `In total: ${total} UAH`;

      shoppingbagContent.appendChild(totalCost);

      submitButtonContainer.appendChild(submitButton);
      shoppingbagContent.appendChild(submitButtonContainer);
    }
  }
});
