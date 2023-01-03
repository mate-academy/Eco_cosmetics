'use strict';

const userName = document.getElementById('name');
const email = document.getElementById('email');

const form = document.getElementById('form');

const messages = document.getElementById('error');

// show error function
function showError(input, message) {
  const inputControl = input;

  inputControl.className = 'form__input error';

  messages.textContent = message;
}

// shoe success function
function showSuccess(input) {
  const inputControl = input;

  inputControl.className = 'form__input success';
  messages.textContent = '';
}

const isEmailValid = (input) => {
  // eslint-disable-next-line
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return regex.test(input);
};

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (userName.value === '') {
    showError(userName, 'UserName is required');
  } else if (userName.value.length < 3 || userName.value.length > 15) {
    showError(userName, 'UserName must be at least 3 chsaracters');
  } else if (userName.value.length > 15) {
    showError(userName, 'UserName must be less than 15 characters');
  } else {
    showSuccess(userName);
  }

  if (email.value === '') {
    showError(email, 'Email is required');
  } else if (!isEmailValid(email.value)) {
    showError(email, 'Email is not valid');
  } else {
    showSuccess(email);
  }
});

userName.addEventListener('focus', () => {
  userName.classList.remove('error');
  userName.classList.remove('success');
  messages.textContent = '';
});

email.addEventListener('focus', () => {
  email.classList.remove('error');
  email.classList.remove('success');
  messages.textContent = '';
});

// ----------- menu -----------------

const toggleBurger = document.querySelector('.burger');
const closeBtn = document.querySelector('.burger-menu__close');
const burgerMenu = document.querySelector('.burger-menu');

toggleBurger.addEventListener('click', function() {
  burgerMenu.classList.toggle('show-burger');
});

closeBtn.addEventListener('click', function() {
  burgerMenu.classList.remove('show-burger');
});
// ----------- menu -----------------

// -------------- tabs -------------

// const tab = function() {
//   const tubs = document.querySelectorAll('.shop-tabs__item');
//   const productCard = document.querySelectorAll('.product-card');
//   let tabName;

//   tubs.forEach(item => {
//     item.addEventListener('click', selectTab);
//   });

//   function selectTab() {
//     tubs.forEach(item => {
//       item.classList.remove('is-active');
//     });
//     this.classList.add('is-active');
//     tabName = this.getAttribute('data-tab');
//     selectTabContent(tabName);
//   };

//   function selectTabContent(tabN) {
//     productCard.forEach(item => {
//       item.classList.contains(tabN)
//         ? item.classList.add('is-active')
//         : item.classList.remove('is-active');
//     });
//   }
// };

// tab();
// -----------

const tubs = document.querySelectorAll('.shop-tabs__item');
const productCard = document.querySelectorAll('.product-card');

tubs.forEach(tab => {
  tab.addEventListener('click', () => {
    const currentTab = tab.getAttribute('data-tab');

    tubs.forEach(item => {
      item.classList.contains(currentTab)
        ? item.classList.add('is-active')
        : item.classList.remove('is-active');
    });

    productCard.forEach(product => {
      product.classList.contains(currentTab)
        ? product.classList.add('is-active')
        : product.classList.remove('is-active');
    });
  });
});

// -------------- tabs -------------

// const tabs = document.querySelectorAll('.shop-tabs__item');
// const productCards = document.querySelectorAll('.product-card');

// tabs.forEach(item => {
//   item.addEventListener('click', () => {
//     const tab = item;
//     const tabId = tab.getAttribute('data-tab');
//     const currentTab = document.querySelector(tabId);

//     if (!item.classList.contains('is-active')) {
//       tabs.forEach(element => {
//         element.classList.remove('is-active');
//       });

//       productCards.forEach(card => {
//         card.classList.remove('is-active');
//       });

//       item.classList.add('is-active');
//       currentTab.classList.add('is-active');
//     }
//   });
// });

// make first tab active
// document.querySelector('.shop-tabs__item').click();

// -------------- all products btn ---------------

const btn = document.querySelector('.shop-btn');
const productCard2 = document.querySelectorAll('.product-card');

btn.addEventListener('click', () => {
  productCard2.forEach(card => {
    card.classList.add('is-active');
  });
});
