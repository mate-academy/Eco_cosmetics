'use strict';

// Slider:
$('.shop__nav-button').click(function() {
  $('.shop__nav-button').removeClass('shop__nav-button--active');
  $(this).addClass('shop__nav-button--active');
});

$('.shop__slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  variableWidth: true,

  nextArrow: '.shop__next',
  prevArrow: '.shop__prev',
});

$('.slick-filter button').click(function() {
  const dc = $(this).attr('id');
  const filter = $('.slick-slider');

  if (dc !== 'show_all') {
    $('.slick-slider').slick('slickUnfilter');
    filter.slick('slickFilter', '.' + dc);
  } else {
    $('.slick-slider').slick('slickUnfilter');
  }
});
/* eslint-env jquery */

// Menu toggle:
document.querySelector('.sandwich').addEventListener('click', function(e) {
  const menu = document.querySelector('.menu');
  const sandwich = document.querySelector('.sandwich__button');

  menu.classList.toggle('menu--active');
  sandwich.classList.toggle('sandwich__button--active');
});
