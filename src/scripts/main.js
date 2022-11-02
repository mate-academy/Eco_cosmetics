
// Slider
import Swiper from 'swiper';

// Menu
window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

// Form
const forms = document.querySelectorAll('.form');

function validateEmail(email) {
  const re = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+.([A-Za-z]{2,4})$/;

  return re.test(String(email).toLowerCase());
}

function validatePhone(phone) {
  const re = /^[0-9\s]*$/;

  return re.test(String(phone));
}

for (let index = 0; index < forms.length; index++) {
  const form = forms[index];
  const formInputs = document.querySelectorAll('.form__input');
  const inputEmail = document.querySelector('.form__input--email');
  const inputPhone = document.querySelector('.form__input--phone');

  formInputs.forEach(function(input) {
    input.onfocus = function() {
      if (this.classList.contains('_error')) {
        this.classList.remove('_error');
        this.value = '';
      }
    };

    input.onblur = function() {
      if (input.value !== '') {
        input.classList.add('_complete');
      } else {
        input.classList.remove('_complete');
      }
    };
  });

  form.onsubmit = function(e) {
    e.preventDefault();

    const emailVal = inputEmail.value;
    const phoneVal = inputPhone.value;
    const emptyInputs = Array.from(formInputs).filter(
      input => input.value === ''
    );

    formInputs.forEach(function(input) {
      if (input.value === '' && emptyInputs.length > 0) {
        input.classList.add('_error');

        return false;
      } else {
        input.classList.remove('_error');
        input.value = '';
      }
    });

    if (!validateEmail(emailVal)) {
      inputEmail.classList.add('_error');

      return false;
    } else {
      inputEmail.classList.remove('_error');
    }

    if (!validatePhone(phoneVal)) {
      inputPhone.classList.add('_error');

      return false;
    } else {
      inputPhone.classList.remove('_error');
    }
  };
}

// Tabs
const tabs = document.querySelectorAll('._tabs');

for (let index = 0; index < tabs.length; index++) {
  const tab = tabs[index];
  const tabsItems = tab.querySelectorAll('._tabs-item');
  const tabsBlocks = tab.querySelectorAll('._tabs-block');

  for (let i = 0; i < tabsItems.length; i++) {
    const tabsItem = tabsItems[i];

    tabsItem.addEventListener('click', function(e) {
      for (let ind = 0; ind < tabsItems.length; ind++) {
        const tabsItem1 = tabsItems[ind];

        tabsItem1.classList.remove('_active');
        tabsBlocks[ind].classList.remove('_active');
      }
      tabsItem.classList.add('_active');
      tabsBlocks[i].classList.add('_active');
      e.preventDefault();
    });
  }
}

// init Swiper:
const swiper = new Swiper('.swiper', {
  // Optional parameters
  simulateTouch: true,
  loop: true,
  watchOverflow: true,
  observer: true,
  observeParents: true,
  observeSlideChildren: true,

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1280: {
      slidesPerView: 2.75,
      spaceBetween: 20,
    },
  },
});

const cardsLink = document.querySelectorAll('._card-link');
const body = document.querySelector('.page__body');
const shippingCard = document.querySelector('.shipping');
const checkoutBlock = document.querySelector('.checkout');
const confirmationButton = document.querySelector('.confirmation__button');

if (cardsLink.length > 0) {
  for (let index = 0; index < cardsLink.length; index++) {
    const cardLink = cardsLink[index];

    cardLink.addEventListener('click', function(e) {
      const cardName = cardLink.getAttribute('href').replace('#', '');
      const curentCard = document.getElementById(cardName);

      showCard(curentCard);

      if (cardLink === confirmationButton) {
        cardClose(curentCard);
        cardClose(checkoutBlock);
      }
      e.preventDefault();
    });
  }
}

const checkouItems = document.querySelectorAll('.checkout__item');

for (let j = 0; j < checkouItems.length; j++) {
  const checkouItem = checkouItems[j];
  const buttonsNext = document.querySelectorAll('._btn-next');

  checkouItem.addEventListener('click', function(e) {
    for (let ind = 0; ind < checkouItems.length; ind++) {
      const checkouItem1 = checkouItems[ind];

      checkouItem1.classList.remove('_active');
    }
    checkouItem.classList.add('_active');
    e.preventDefault();
  });

  for (let k = 0; k < buttonsNext.length; k++) {
    const buttonNext = buttonsNext[k];

    buttonNext.addEventListener('click', function(e) {
      if (buttonNext.getAttribute('href')
        === checkouItem.getAttribute('href')) {
        checkouItem.classList.add('_active');
      } else {
        checkouItem.classList.remove('_active');
      }
      e.preventDefault();
    });
  }
}

if (checkoutBlock) {
  const goodsBtns = document.querySelectorAll('._card-link--goods');
  const firstCheckout = document.querySelector('._first');

  for (let index = 0; index < goodsBtns.length; index++) {
    const goodsBtn = goodsBtns[index];

    goodsBtn.addEventListener('click', function(e) {
      showCard(checkoutBlock);
      showCard(shippingCard);
      firstCheckout.classList.add('_active');
      e.preventDefault();
    });
  }
}

function showCard(curentCard) {
  if (curentCard) {
    const cardActive = document.querySelector('._goods-card._open-card');
    const menuOpenBtns = document.querySelectorAll('.icon--menu-open');
    const menuLinks = document.querySelectorAll('.menu-header__link');

    if (cardActive) {
      cardClose(cardActive);
    }

    body.classList.add('lock');
    curentCard.classList.add('_open-card');

    menuOpenBtns.forEach(el => {
      el.addEventListener('click', () => {
        cardClose(curentCard);
      });
    });

    menuLinks.forEach(el => {
      el.addEventListener('click', () => {
        cardClose(curentCard);
      });
    });

    curentCard.addEventListener('click', function(e) {
      if (!e.target.closest('._close-card')) {
        cardClose(e.target.closest('._goods-card'));
      }
    });
  }
};

function cardClose(cardActive) {
  cardActive.classList.remove('_open-card');

  if (!checkoutBlock.classList.contains('_open-card')) {
    body.classList.remove('lock');
  }
}

swiper();
