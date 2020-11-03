'use strict';

const menu = document.querySelector('.menu');
const menuButton = document.querySelector('.header__menu-button');
const menuLinks = document.querySelectorAll('.menu__link');

menuButton.addEventListener('click', toggleMenuButton);

menuLinks.forEach(
  function(menuLink) {
    menuLink.addEventListener('click', toggleMenuButton);
  }
);

function toggleMenuButton() {
  menu.classList.toggle('menu--showMenu');
  menuButton.classList.toggle('header__menu-button--showClose');
}

document.querySelectorAll('.tabs__triggers-item').forEach(item => (
  item.addEventListener('click', function(event) {
    event.preventDefault();

    const id = event.target.getAttribute('href').replace('#', '');

    animateSlider(id);

    document.querySelectorAll('.tabs__triggers-item')
      .forEach(child => child.classList.remove('tabs__triggers-item--active')
      );

    document.querySelectorAll('.tabs__content-item')
      .forEach(child => child.classList.remove('tabs__content-item--active')
      );

    item.classList.add('tabs__triggers-item--active');
    document.getElementById(id).classList.add('tabs__content-item--active');
  })
));

document.querySelector('.tabs__triggers-item').click();

function animateSlider(tabName) {
  const tabs = {
    face: 0,
    body: 1,
    // hair: 2,
    // candles: 3,
  };

  let position = 0;
  const slidesToShow = 3;
  const slidesToScroll = 1;
  const track = document
    .querySelectorAll('.slider__track')[tabs[tabName]];
  const buttonPrev = document
    .querySelectorAll('.slider__btn-prev')[tabs[tabName]];
  const buttonNext = document
    .querySelectorAll('.slider__btn-next')[tabs[tabName]];
  const itemsCount = document
    .querySelectorAll('.slider__item').length / 2;
  const itemWidth = 400;
  const movePosition = slidesToScroll * itemWidth;

  buttonNext.addEventListener('click', () => {
    const itemsLeft = itemsCount - (
      Math.abs(position) + slidesToShow * itemWidth
    ) / itemWidth;

    position -= itemsLeft >= slidesToScroll
      ? movePosition
      : itemsLeft * itemWidth;

    setPosition();
    checkButtons();
  });

  buttonPrev.addEventListener('click', () => {
    const itemsLeft = Math.abs(position) / itemWidth;

    position += itemsLeft >= slidesToScroll
      ? movePosition
      : itemsLeft * itemWidth;

    setPosition();
    checkButtons();
  });

  const setPosition = () => {
    track.style.transform = `translateX(${position}px)`;
  };

  const checkButtons = () => {
    buttonPrev.style.opacity = position === 0 ? 0.3 : 1;

    buttonNext.style.opacity = (
      position <= -(itemsCount - slidesToShow) * itemWidth
    ) ? 0.3 : 1;
  };

  checkButtons();
}
