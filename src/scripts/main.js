'use strict';
/* global $ */

$(document).ready(function() {
  $('.header__top__burger').click(function(event) {
    $('.header__top__burger, .header__dark, .nav')
      .toggleClass('active');
  });
});

window.onload = function() {
  document.body.classList.add('loaded_hiding');

  window.setTimeout(function() {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded_hiding');
  }, 500);
};

$('.shop__nav__item').on('click', function() {
  $('.shop__nav__item').removeClass('active');
  $(this).addClass('active');

  if ($('.shop__nav__item--body').hasClass('active')) {
    $('.shop__cards').removeClass('active');
    $('.body').addClass('active');
  } else if ($('.shop__nav__item--face').hasClass('active')) {
    $('.shop__cards').removeClass('active');
    $('.face').addClass('active');
  } else if ($('.shop__nav__item--hair').hasClass('active')) {
    $('.shop__cards').removeClass('active');
    $('.hair').addClass('active');
  } else if ($('.shop__nav__item--candles').hasClass('active')) {
    $('.shop__cards').removeClass('active');
    $('.candles').addClass('active');
  };
});
