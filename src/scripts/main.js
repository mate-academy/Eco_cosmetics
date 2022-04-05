'use strict';

const icon = document.getElementById('header-burger');
const item1 = document.getElementById('item1');
const item2 = document.getElementById('item2');
const item3 = document.getElementById('item3');

icon.addEventListener('click', () => {
  document.getElementById('menu-container').classList.toggle('menu-opened');
});

item1.addEventListener('click', () => {
  document.getElementById('menu-container').classList.toggle('menu-opened');
});

item2.addEventListener('click', () => {
  document.getElementById('menu-container').classList.toggle('menu-opened');
});

item3.addEventListener('click', () => {
  document.getElementById('menu-container').classList.toggle('menu-opened');
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.shop__link').forEach((item) => {
    item.addEventListener('click', function(e) {
      e.preventDefault();

      document.querySelectorAll('.shop__link').forEach((child) =>
        child.classList.remove('shop__link--active')
      );

      document.querySelectorAll('.slider__inner').forEach((child) =>
        child.classList.remove('slider__inner--active')
      );

      item.classList.add('shop__link--active');

      const id = e.target.getAttribute('href')
        ? e.target.getAttribute('href').replace('#', '')
        : e.target.parentElement.getAttribute('href').replace('#', '');

      const el = document.getElementById(id);

      if (el) {
        document.getElementById(id).classList.add('slider__inner--active');
      }
    });
  }
  );

  document.querySelector('.shop__link').click();
});

/*  TABLET  */

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.shop__link1').forEach((item) => {
    item.addEventListener('click', function(e) {
      e.preventDefault();

      document.querySelectorAll('.shop__link1').forEach((child) =>
        child.classList.remove('shop__link1--active')
      );

      document.querySelectorAll('.slider__inner1').forEach((child) =>
        child.classList.remove('slider__inner1--active')
      );

      item.classList.add('shop__link1--active');

      const id = e.target.getAttribute('href')
        ? e.target.getAttribute('href').replace('#', '')
        : e.target.parentElement.getAttribute('href').replace('#', '');

      const el = document.getElementById(id);

      if (el) {
        document.getElementById(id).classList.add('slider__inner1--active');
      }
    });
  }
  );

  document.querySelector('.shop__link1').click();
});

/*  MOBILE  */

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.shop__link2').forEach((item) => {
    item.addEventListener('click', function(e) {
      e.preventDefault();

      document.querySelectorAll('.shop__link2').forEach((child) =>
        child.classList.remove('shop__link2--active')
      );

      document.querySelectorAll('.slider__inner2').forEach((child) =>
        child.classList.remove('slider__inner2--active')
      );

      item.classList.add('shop__link2--active');

      const id = e.target.getAttribute('href')
        ? e.target.getAttribute('href').replace('#', '')
        : e.target.parentElement.getAttribute('href').replace('#', '');

      const el = document.getElementById(id);

      if (el) {
        document.getElementById(id).classList.add('slider__inner2--active');
      }
    });
  }
  );

  document.querySelector('.shop__link2').click();
});
