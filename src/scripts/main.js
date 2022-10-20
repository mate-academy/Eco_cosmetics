
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

    if (cardActive) {
      cardClose(cardActive);
    }

    body.classList.add('lock');
    curentCard.classList.add('_open-card');

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
