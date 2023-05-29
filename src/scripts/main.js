'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('container--with-menu');
  } else {
    document.body.classList.remove('container--with-menu');
  }
});

const menu = ['face', 'body', 'hair', 'candles'];

new Swiper('.swiper', {

  pagination: {
    el: '.swiper-pagination',

    clickable: true,

    renderBullet: function(index, className) {
      return '<li class="' + className + '">' + (menu[index]) + '</li>';
    },
  },
  slidesPerView: 2,
  spaceBetween: window.innnerWidth > 1280 ? 20 : 30,
  slidesPerGroup: 2,
});
