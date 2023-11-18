'use strict';

/* <<<--- block the scroll of the page when the menu is open --->>> */
window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

/* <<<--- slider --->>> */
document.addEventListener('DOMContentLoaded', function() {
  const dots = document.querySelectorAll('.slider__dot');
  const slides = document.querySelectorAll('.slider__product');

  // Add a click event listener to each 'slider__dot'
  dots.forEach(function(dot, index) {
    dot.addEventListener('click', function() {
      // Remove the 'slider__dot--active' class from all other dots
      dots.forEach(function(otherDot) {
        otherDot.classList.remove('slider__dot--active');
      });

      // Add the 'slider__dot--active' class to the clicked dot
      dot.classList.add('slider__dot--active');

      // Hide all slides
      slides.forEach(function(slide) {
        slide.style.display = 'none';
      });

      // Determine the index of the next slide
      const nextIndex = (index < slides.length - 1) ? index + 1 : 0;

      // Display the current and next slides
      slides[index].style.display = 'flex';
      slides[nextIndex].style.display = 'flex';
    });
  });
});

/* <<<--- fotrm managment --->>> */
const form = document.querySelector('form');

form.addEventListener('submit', function(evt) {
  evt.preventDefault();
  form.reset();
});

/* <<<--- animation when scrolling --->>> */
const animation = document.querySelectorAll('.animation');

/* Add a scroll event listener to the window,
   triggering the 'animationOnScroll' function */
window.addEventListener('scroll', animationOnScroll);

// Function to handle animations on scroll
function animationOnScroll() {
  // Loop through each element with the class 'animation'
  for (let i = 0; i < animation.length; i++) {
    const animEl = animation[i];
    const animElHeight = animEl.offsetHeight;
    const animElOffset = offset(animEl).top;
    const animStart = 4;

    // Calculate the point at which the animation should start
    let animElPoint = window.innerHeight - animElHeight / animStart;

    /* Adjust the start point if the element's height
       is greater than the window height */
    if (animElHeight > window.innerHeight) {
      animElPoint = window.innerHeight - animElHeight / animStart;
    }

    // Check if the element is in the viewport
    if (
      window.scrollY > animElOffset - animElPoint
      && window.scrollY < animElOffset + animElHeight
    ) {
      animEl.classList.add('show');
    } else {
      /* If the element is not in the viewport and does not have
         the 'animation--no-hide' class, remove the 'show' class
         to hide the element */
      if (!animEl.classList.contains('animation--no-hide')) {
        animEl.classList.remove('show');
      }
    }
  }
}

// Function to get the offset of an element
function offset(el) {
  const rect = el.getBoundingClientRect();
  const scrollLeft = window.scrollX || document.documentElement.scrollLeft;
  const scrollTop = window.scrollY || document.documentElement.scrollTop;

  return {
    top: rect.top + scrollTop,
    left: rect.left + scrollLeft,
  };
}

setTimeout(() => {
  animationOnScroll();
}, 300);
