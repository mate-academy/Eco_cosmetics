'use strict';

const cardList = document.querySelector('.cards__content');
const cardListLength = cardList.children.length;

const hashNum = (str) => {
  return str.match(/\d+/);
};

window.addEventListener('hashchange', () => {
  const cardId = parseInt(hashNum(window.location.hash));
  const noCardId = (cardId > 0) === false;

  if (window.location.hash !== '#menu') {
    document.body.classList.remove('page__body--hidden');
  }

  if (window.location.hash !== '#product') {
    document.querySelector('.page__main').classList.remove(
      'page__main--hidden'
    );
    document.querySelector('.product').classList.add('product--hidden');
  }

  if (noCardId || cardId > 0) {
    document.querySelector('.page__main').classList.remove(
      'page__main--hidden'
    );
    document.querySelector('.cards').classList.add('cards--hidden');

    for (let i = 1; i <= cardListLength; i++) {
      document.querySelector(`.card[id="card-${i}"]`).classList.add(
        'card--hidden'
      );
    }
  }

  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--hidden');
  }

  if (window.location.hash === '#product') {
    document.querySelector('.page__main').classList.add('page__main--hidden');
    document.querySelector('.product').classList.remove('product--hidden');
  }

  if (window.location.hash === `#card-${cardId}`) {
    document.querySelector('.page__main').classList.add('page__main--hidden');
    document.querySelector('.cards').classList.remove('cards--hidden');

    document.querySelector(`.card[id="card-${cardId}"]`).classList.remove(
      'card--hidden'
    );
  }
});

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  speed: 400,
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    552: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
  mousewheel: {
    invert: true,
  },
});

const tabs = document.querySelectorAll('.shop__tab');

swiper.on('slideChange', function() {
  const activeSlideProduct = swiper.slides[swiper.activeIndex].getAttribute(
    'data-produce'
  );
  const activeTab = document.querySelector('.shop__tab--active');

  activeTab.classList.remove('shop__tab--active');

  switch (activeSlideProduct) {
    case 'face':
      tabs[0].classList.add('shop__tab--active');
      break;

    case 'body':
      tabs[1].classList.add('shop__tab--active');
      break;

    case 'hair':
      tabs[2].classList.add('shop__tab--active');
      break;

    case 'candles':
      tabs[3].classList.add('shop__tab--active');
      break;
  }
});

tabs.forEach(tab => {
  tab.addEventListener('click', (e) => {
    const produce = e.target.getAttribute('data-produce');
    const produces = swiper.slides.map(
      slide => slide.getAttribute('data-produce')
    );

    swiper.slideTo(produces.indexOf(produce));
  });
});

const cartOpen = document.querySelector('.cart__icon');
const cartClose = document.querySelector('.cart-content__icon-close');

const QuantityValue = () => {
  const quantity = document.querySelector('.cart__quantity').textContent;
  let quantityColl = false;

  quantity <= 0 ? quantityColl = false : quantityColl = true;

  return quantityColl;
};

cartOpen.addEventListener('click', (e) => {
  if (e.target && QuantityValue()) {
    document.querySelector('.cart-content').classList.add(
      'cart-content--active'
    );
  }
});

cartClose.addEventListener('click', (e) => {
  document.querySelector('.cart-content').classList.remove(
    'cart-content--active'
  );
});
