'use strict';

// block the scroll of the page when the menu is open
window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

// slider
document.addEventListener('DOMContentLoaded', function() {
  const dots = document.querySelectorAll('.slider__dot');

  // add an event handler for each element .slider__dot
  dots.forEach(function(dot, index) {
    dot.addEventListener('click', function() {
      // remove the .slider__dot--active class from all dot
      dots.forEach(function() {
        dot.classList.remove('slider__dot--active');
      });

      // add the class .slider__dot--active to the selected dot
      dot.classList.add('slider__dot--active');

      // find the desired slide and his position
      const slides = document.querySelectorAll('.slider__product');
      const slideMargin = getSlideMargin();
      // add indent width
      const slideWidth = slides[0].offsetWidth + slideMargin;
      const newPosition = -(index * slideWidth);

      // slide the slides to the appropriate position
      const sliderLine = document.querySelector('.slider__line');

      sliderLine.style.transform = `translateX(${newPosition}px)`;
    });
  });
});

// determining the distance between slides
function getSlideMargin() {
  const windowWidth = window.innerWidth;

  if (windowWidth >= 1280) {
    return 20;
  } else if (windowWidth >= 768) {
    return 30;
  } else {
    return 0;
  }
}

// const initialMargin = getSlideMargin();

// fotrm managment
const form = document.querySelector('form');

form.addEventListener('submit', function(evt) {
  evt.preventDefault();
  form.reset();
});

// animation when scrolling
const animation = document.querySelectorAll('.animation');

window.addEventListener('scroll', animationOnScroll);

function animationOnScroll() {
  for (let i = 0; i < animation.length; i++) {
    const animEl = animation[i];
    const animElHeight = animEl.offsetHeight;
    const animElOffset = offset(animEl).top;
    const animStart = 4;

    let animElPoint = window.innerHeight - animElHeight / animStart;

    if (animElHeight > window.innerHeight) {
      animElPoint = window.innerHeight - animElHeight / animStart;
    }

    if ((window.scrollY > animElOffset - animElPoint)
      && window.scrollY < (animElOffset + animElHeight)) {
      animEl.classList.add('show');
    } else {
      if (!animEl.classList.contains('animation--no-hide')) {
        animEl.classList.remove('show');
      }
    }
  }
}

function offset(el) {
  const rect = el.getBoundingClientRect();
  const scrollLeft = window.scrollX || document.documentElement.scrollLeft;
  const scrollTop = window.scrollY || document.documentElement.scrollTop;

  return {
    top: rect.top + scrollTop, left: rect.left + scrollLeft,
  };
}

setTimeout(() => {
  animationOnScroll();
}, 300);
