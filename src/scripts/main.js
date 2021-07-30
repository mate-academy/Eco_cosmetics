'use strict';

$(document).ready(function() {
  $('.slider').slick({
    arrows: true,
    slidesToShow: 3,
    infinite: false,
    touchThreshold: 10,
    waitForAnimate: false,
    appendArrows: $('.shop__arrows'),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  });

  var filtered = false;

  $('.filter__face').on('click', function(){
    if (filtered === false) {
      $('.filtering').slick('slickFilter','.f__face');
      filtered = true;
    } else {
      $('.filtering').slick('slickUnfilter');
      filtered = false;
    }
  });

  $('.filter__body').on('click', function(){
    if (filtered === false) {
      $('.filtering').slick('slickFilter','.f__body');
      filtered = true;
    } else {
      $('.filtering').slick('slickUnfilter');
      filtered = false;
    }
  });

  $('.filter__candles').on('click', function(){
    if (filtered === false) {
      $('.filtering').slick('slickFilter','.f__candle');
      filtered = true;
    } else {
      $('.filtering').slick('slickUnfilter');
      filtered = false;
    }
  });

  $('.filter__hair').on('click', function(){
    if (filtered === false) {
      $('.filtering').slick('slickFilter','.f__hair');
      filtered = true;
    } else {
      $('.filtering').slick('slickUnfilter');
      filtered = false;
    }
  });

  $(".catalog__link").on("click", function(e) {
    $(this).toggleClass("is-active");
    e.preventDefault();
  });

  $('.slider__mobile').slick({
    arrows: true,
    slidesToShow: 1,
    infinite: false,
    touchThreshold: 10,
    waitForAnimate: false,
    appendArrows: $('.shop__arrows--mobile'),
  });
});
