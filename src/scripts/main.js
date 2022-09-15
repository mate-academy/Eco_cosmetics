'use strict';

const nav = document.querySelector('nav');

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
    nav.classList.add('nav--visible');
  } else {
    document.body.classList.remove('page__body--with-menu');
    nav.classList.remove('nav--visible');
  }
});

const formInputs = document.querySelectorAll('.form__input');

document.querySelector('.form').addEventListener('submit', (event) => {
  event.preventDefault();

  for (const input of formInputs) {
    input.value = '';
  }

  window.scrollBy(-10000, -10000);
}, false);

document.querySelector('input[name="tel"]')
  .addEventListener('input', event => {
    event.target.value = event.target.value
      .split('').filter(c => !isNaN(+c)).join('');
  });

const buttonsBox = document.querySelector('.shop__buttons');
const field = document.querySelector('.shop__card-slider');

const buttons = buttonsBox.children;

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    moveTo(i);
  });
}

function moveTo(pos) {
  hightlight(pos);

  if (document.body.clientWidth < 768) {
    field.style.transform = `translateX(${-pos * 100}%)`;
  } else if (document.body.clientWidth < 1280) {
    field.style.transform = `translateX(calc(${-pos * 50}% - ${pos * 15}px))`;
  } else {
    field.style.transform = `translateX(calc(${-pos * 50}% - ${pos * 10}px))`;
  }
}

function hightlight(newPosition) {
  const activeDot = buttonsBox.querySelector('.shop__item--active');

  if (activeDot) {
    activeDot.classList.remove('shop__item--active');
  }

  const selected = buttonsBox.children[newPosition];

  selected.classList.add('shop__item--active');
}
