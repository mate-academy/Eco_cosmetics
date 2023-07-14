'use strict';

const cardList = document.querySelector('.cards__content');
const cardListLength = cardList.children.length;

const cardInUrl = () => {
  const urlHash = window.location.hash;
  const findCard = urlHash.includes('#card-');

  return findCard;
};

const hashNum = (str) => {
  return str.match(/\d+/);
};

const cardReset = () => {
  for (let i = 1; i <= cardListLength; i++) {
    const cardWithHidden = document.querySelector(
      `.card[id="card-${i}"]`
    ).classList.contains(
      'card--hidden'
    );
    const cardWithoutHidden = cardWithHidden === false;

    if (cardWithoutHidden) {
      document.querySelector(
        `.card[id="card-${i}"]`
      ).classList.add(
        'card--hidden'
      );
    }
  }
};

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--hidden');
  } else {
    document.body.classList.remove('page__body--hidden');
  }

  if (window.location.hash === '#product') {
    document.querySelector('.page__main').classList.add('page__main--hidden');
    document.querySelector('.product').classList.remove('product--hidden');
  } else {
    document.querySelector(
      '.page__main'
    ).classList.remove(
      'page__main--hidden'
    );
    document.querySelector('.product').classList.add('product--hidden');
  }

  if (cardInUrl()) {
    cardReset();

    const cardId = parseInt(hashNum(window.location.hash));

    document.querySelector('.page__main').classList.add('page__main--hidden');
    document.querySelector('.cards').classList.remove('cards--hidden');

    document.querySelector(
      `.card[id="card-${cardId}"]`
    ).classList.remove(
      'card--hidden'
    );
  } else {
    document.querySelector('.cards').classList.add('cards--hidden');
    cardReset();
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
    document.querySelector(
      '.cart-content'
    ).classList.add(
      'cart-content--active'
    );
  }
});

cartClose.addEventListener('click', (e) => {
  document.querySelector(
    '.cart-content'
  ).classList.remove(
    'cart-content--active'
  );
});

const tabs = document.querySelectorAll('.shop__tab');

const shopTabRemove = () => {
  const tabActive = document.querySelector('.shop__tab--active');

  tabActive.classList.remove('shop__tab--active');
};

tabs.forEach(tab => {
  tab.addEventListener('click', (e) => {
    const produce = e.target.getAttribute('data-produce');
    const produces = swiper.slides.map(
      slide => slide.getAttribute('data-produce')
    );
    const produceIndex = produces.indexOf(produce);

    swiper.slideTo(produceIndex, 500);

    shopTabRemove();
    e.target.classList.add('shop__tab--active');
  });
});

swiper.on('slideChange', function() {
  const activeSlideProduct = swiper.slides[swiper.activeIndex].getAttribute(
    'data-produce'
  );

  shopTabRemove();

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
