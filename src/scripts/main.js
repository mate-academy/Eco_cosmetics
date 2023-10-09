'use strict';

// Slider
import $ from 'jquery';
import 'slick-carousel';

$('.slider').slick({
  arrows: false,
  dots: false,
  slidesToShow: 2, // к-сть для показу
  speed: 500,
  easing: 'ease',
  initialSlide: 0,
  autoplay: false,
  autoplaySpeed: 3000,

  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        infinite: true, //гортання по колу
      }
    }
  ]

});
/*   _____________ */

