'use strict';

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
