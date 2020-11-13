'use strict';

function animateMenu() {
  const menu = document.querySelector('.menu');
  const menuButton = document.querySelector('.header__menu-button');
  const menuLinks = document.querySelectorAll('.menu__link');

  const toggleMenuButton = () => {
    menu.classList.toggle('menu--showMenu');
    menuButton.classList.toggle('header__menu-button--showClose');
  };

  menuButton.addEventListener('click', toggleMenuButton);

  menuLinks.forEach(
    function(menuLink) {
      menuLink.addEventListener('click', toggleMenuButton);
    }
  );
}

function animateTabs() {
  const tabTriggers = document.querySelectorAll('.tabs__triggers-item');
  const tabContent = document.querySelectorAll('.tabs__content-item');

  tabTriggers.forEach(item => (
    item.addEventListener('click', function(event) {
      event.preventDefault();

      const id = event.target.getAttribute('href').replace('#', '');

      tabTriggers
        .forEach(child => child.classList.remove('tabs__triggers-item--active')
        );

      tabContent
        .forEach(child => child.classList.remove('tabs__content-item--active')
        );

      item.classList.add('tabs__triggers-item--active');
      document.getElementById(id).classList.add('tabs__content-item--active');
    })
  ));

  document.querySelector('.tabs__triggers-item').click();
}

function animateSlider() {
  const slidesToScroll = 1;
  const track = document.querySelector('.slider__track');
  const buttonPrev = document.querySelector('.slider__btn-prev');
  const buttonNext = document.querySelector('.slider__btn-next');
  const itemsCount = document.querySelectorAll('.slider__item').length;
  const productCard = document.querySelector('.product');

  let position = 0;
  let itemWidth = parseInt(window.getComputedStyle(productCard).width)
    + parseInt(window.getComputedStyle(productCard).marginRight);
  let movePosition = slidesToScroll * itemWidth;

  window.addEventListener('resize', function() {
    itemWidth = parseInt(window.getComputedStyle(productCard).width)
    + parseInt(window.getComputedStyle(productCard).marginRight);

    movePosition = slidesToScroll * itemWidth;
  });

  const slidesToShow = itemWidth > 372 ? 3 : itemWidth < 372 ? 1 : 2;

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

function setButtonEvent() {
  document.querySelector('.brand__button')
    .addEventListener('click', () => {
      window.location.href = '#shop';
    });

  document.querySelector('.shop__button')
    .addEventListener('click', () => {
      window.location.href = '#footer';
    });

  document.querySelector('.creators__button')
    .addEventListener('click', () => {
      window.location.href = '#contact';
    });
}

animateMenu();
animateTabs();
animateSlider();
setButtonEvent();
