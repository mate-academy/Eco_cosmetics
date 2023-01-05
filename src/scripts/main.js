'use strict';

const userName = document.querySelector('.name');
const email = document.querySelector('.email');
const phone = document.querySelector('.phone');
const textarea = document.querySelector('.message');

const form = document.querySelector('.form');

// const messagesName = document.getElementById('name__error');
// const messagesEmail = document.getElementById('email__error');

// show error function
function showError(input, message) {
  const inputControl = input;

  inputControl.className = 'form__input error';

  // messagesName.textContent = message;
  // messagesEmail.textContent = message;
}

// shoe success function
function showSuccess(input) {
  const inputControl = input;

  inputControl.className = 'form__input success';

  // messagesName.textContent = '';
  // messagesEmail.textContent = '';
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
  } else if (userName.value.length < 3) {
    showError(userName, 'UserName must be at least 3 chsaracters');
  } else if (userName.value.length > 15) {
    showError(userName, 'UserName must be less than 15 characters');
  } else {
    showSuccess(userName);
  }

  //   console.log('userName', userName);
  // console.log('userName value', userName.value);

  // if (userName.value > 0 && userName.value.length > 3 && userName.value.length < 15) {
  //   showSuccess(userName);
  // }

  if (email.value === '') {
    showError(email, 'Email is required');
  } else if (!isEmailValid(email.value)) {
    showError(email, 'Email is not valid');
  } else {
    showSuccess(email);
  }

  if (userName && email) {
    userName.value = '';
    email.value = '';
    phone.value = '';
    textarea.value = '';

    // userName.classList.add('your-class');
    // userName.placeholder.style.color = 'yellow';
    // userName.sfontcolor('grey');
    // userName.style.color = '#828282';

    // userName.classList.remove('success');
    // email.classList.remove('success');
  }
});

userName.addEventListener('focus', () => {
  userName.classList.remove('error');
  userName.classList.remove('success');
  // messagesName.textContent = '';
});

email.addEventListener('focus', () => {
  email.classList.remove('error');
  email.classList.remove('success');
  // messagesEmail.textContent = '';
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

// ----------- all products btn -----

const btn = document.querySelector('.shop-btn');
const productCard2 = document.querySelectorAll('.product-card');

btn.addEventListener('click', () => {
  productCard2.forEach(card => {
    card.classList.add('is-active');
  });
});
