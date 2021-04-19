'use strict';

// Burger-Menu
const burgerToggler = document.querySelector('.burger-toggler');
const nav = document.querySelector('.nav');
const button = document.querySelector('#toggler');

button.addEventListener('click', () => {
  burgerToggler.classList.toggle('burger-toggler--active');
  nav.classList.toggle('nav--active');
});

// Add <br> to title
const newTitleText = 'Brand of<br>eco-cosmetics and magic candles';
const mediaQuery = window.matchMedia('(min-width: 800px)');

if (mediaQuery.matches) {
  document.querySelector('.header__title').innerHTML = newTitleText;
}

// Button-switcher
const leftButtonSwitcher = document.querySelector(
  '.section-shop__switcher--back'
);
const rightButtonSwitcher = document.querySelector(
  '.section-shop__switcher--forward'
);
let counter = 1;
const amountCards = 4;

if (counter === 1) {
  leftButtonSwitcher.setAttribute('disabled', 'disabled');
} else {
  leftButtonSwitcher.removeAttribute('disabled');
}

if (counter === amountCards) {
  rightButtonSwitcher.setAttribute('disabled', 'disabled');
} else {
  rightButtonSwitcher.removeAttribute('disabled');
}

leftButtonSwitcher.addEventListener('click', () => {
  if (counter > 1) {
    --counter;

    const cardsContainer = document.querySelector(
      '.section-shop__grid-container--active'
    );
    const gap = 20;
    let cardWidth = 320;

    if (window.matchMedia('(min-width: 1100px)').matches) {
      cardWidth = 380;
    } else if (window.matchMedia('(min-width: 900px)').matches) {
      cardWidth = 360;
    } else if (window.matchMedia('(min-width: 700px)').matches) {
      cardWidth = 340;
    }

    const shift = (counter - 1) * (cardWidth + gap);

    cardsContainer.setAttribute('style', `transform: translateX(-${shift}px)`);
  }

  if (counter === 1) {
    leftButtonSwitcher.setAttribute('disabled', 'disabled');
  } else {
    leftButtonSwitcher.removeAttribute('disabled');
  }

  if (counter === amountCards) {
    rightButtonSwitcher.setAttribute('disabled', 'disabled');
  } else {
    rightButtonSwitcher.removeAttribute('disabled');
  }
});

rightButtonSwitcher.addEventListener('click', () => {
  if (counter < amountCards) {
    ++counter;

    const cardsContainer = document.querySelector(
      '.section-shop__grid-container--active'
    );
    const gap = 20;
    let cardWidth = 320;

    if (window.matchMedia('(min-width: 1100px)').matches) {
      cardWidth = 380;
    } else if (window.matchMedia('(min-width: 900px)').matches) {
      cardWidth = 360;
    } else if (window.matchMedia('(min-width: 700px)').matches) {
      cardWidth = 340;
    }

    const shift = (counter - 1) * (cardWidth + gap);

    cardsContainer.setAttribute('style', `transform: translateX(-${shift}px)`);
  }

  if (counter === 1) {
    leftButtonSwitcher.setAttribute('disabled', 'disabled');
  } else {
    leftButtonSwitcher.removeAttribute('disabled');
  }

  if (counter === amountCards) {
    rightButtonSwitcher.setAttribute('disabled', 'disabled');
  } else {
    rightButtonSwitcher.removeAttribute('disabled');
  }
});

// Changing store section

// First section
const faceLabel = document.querySelector('#store-sections-label-1');
const faceSection = document.querySelector(
  '.section-shop__grid-container--face'
);

// Second section
const bodyLabel = document.querySelector('#store-sections-label-2');
const bodySection = document.querySelector(
  '.section-shop__grid-container--body'
);

// Third section
const hairLabel = document.querySelector('#store-sections-label-3');
const hairSection = document.querySelector(
  '.section-shop__grid-container--hair'
);

// Fourth section
const candleLabel = document.querySelector('#store-sections-label-4');
const candleSection = document.querySelector(
  '.section-shop__grid-container--candles'
);

faceLabel.addEventListener('click', () => {
  counter = 1;

  if (counter === 1) {
    leftButtonSwitcher.setAttribute('disabled', 'disabled');
  } else {
    leftButtonSwitcher.removeAttribute('disabled');
  }

  if (counter === amountCards) {
    rightButtonSwitcher.setAttribute('disabled', 'disabled');
  } else {
    rightButtonSwitcher.removeAttribute('disabled');
  }
  faceSection.classList.add('section-shop__grid-container--active');
  bodySection.classList.remove('section-shop__grid-container--active');
  hairSection.classList.remove('section-shop__grid-container--active');
  candleSection.classList.remove('section-shop__grid-container--active');

  const cardsContainer = document.querySelector(
    '.section-shop__grid-container--active'
  );

  cardsContainer.setAttribute('style', 'transform: translateX(0)');
});

bodyLabel.addEventListener('click', () => {
  counter = 1;

  if (counter === 1) {
    leftButtonSwitcher.setAttribute('disabled', 'disabled');
  } else {
    leftButtonSwitcher.removeAttribute('disabled');
  }

  if (counter === amountCards) {
    rightButtonSwitcher.setAttribute('disabled', 'disabled');
  } else {
    rightButtonSwitcher.removeAttribute('disabled');
  }
  faceSection.classList.remove('section-shop__grid-container--active');
  bodySection.classList.add('section-shop__grid-container--active');
  hairSection.classList.remove('section-shop__grid-container--active');
  candleSection.classList.remove('section-shop__grid-container--active');

  const cardsContainer = document.querySelector(
    '.section-shop__grid-container--active'
  );

  cardsContainer.setAttribute('style', 'transform: translateX(0)');
});

hairLabel.addEventListener('click', () => {
  counter = 1;

  if (counter === 1) {
    leftButtonSwitcher.setAttribute('disabled', 'disabled');
  } else {
    leftButtonSwitcher.removeAttribute('disabled');
  }

  if (counter === amountCards) {
    rightButtonSwitcher.setAttribute('disabled', 'disabled');
  } else {
    rightButtonSwitcher.removeAttribute('disabled');
  }
  faceSection.classList.remove('section-shop__grid-container--active');
  bodySection.classList.remove('section-shop__grid-container--active');
  hairSection.classList.add('section-shop__grid-container--active');
  candleSection.classList.remove('section-shop__grid-container--active');

  const cardsContainer = document.querySelector(
    '.section-shop__grid-container--active'
  );

  cardsContainer.setAttribute('style', 'transform: translateX(0)');
});

candleLabel.addEventListener('click', () => {
  counter = 1;

  if (counter === 1) {
    leftButtonSwitcher.setAttribute('disabled', 'disabled');
  } else {
    leftButtonSwitcher.removeAttribute('disabled');
  }

  if (counter === amountCards) {
    rightButtonSwitcher.setAttribute('disabled', 'disabled');
  } else {
    rightButtonSwitcher.removeAttribute('disabled');
  }
  faceSection.classList.remove('section-shop__grid-container--active');
  bodySection.classList.remove('section-shop__grid-container--active');
  hairSection.classList.remove('section-shop__grid-container--active');
  candleSection.classList.add('section-shop__grid-container--active');

  const cardsContainer = document.querySelector(
    '.section-shop__grid-container--active'
  );

  cardsContainer.setAttribute('style', 'transform: translateX(0)');
});
