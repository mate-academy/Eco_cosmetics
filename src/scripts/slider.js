/* eslint-disable max-len */
'use strict';

// init elements
const slider = document.querySelector('.slider');
const sliderRow = document.querySelector('.slider__slides-row');
const firstSlide = document.querySelector('.slider__slide');
const buttonNext = document.querySelector('.shop__slides-navigation-button--next');
const buttonBack = document.querySelector('.shop__slides-navigation-button--back');
const navButtons = [...document.querySelectorAll('.shop__chapter-button')];

// init data
const chaptersCounts = [4, 4, 4, 4]; // 4 for face, 4 for body, 4 for ha...
// you can change array above, but totally them should be 16 (like cards in html)
const quantifyOfSlides = chaptersCounts.reduce((sum, elem) => sum + elem);
const marginWidth = parseFloat(window.getComputedStyle(firstSlide).marginRight);
let cardWidth = (sliderRow.offsetWidth - marginWidth * (quantifyOfSlides - 1)) / quantifyOfSlides;

const initSlider = () => {
  // arrow buttons logic
  buttonNext.onclick = () => {
    const fullWidth = (marginWidth + cardWidth);
    const currentPos = slider.scrollLeft;

    if (currentPos % fullWidth < 10 || fullWidth - (currentPos % fullWidth) < 10) {
    /* if it is on straight place then go to next slide */
      slider.scrollLeft = currentPos + fullWidth;
    } else {
    /* if slide is somewhere on middle then set it on straight position */
      slider.scrollLeft = Math.ceil(currentPos / fullWidth) * fullWidth;
    }
  };

  buttonBack.onclick = () => {
    const fullWidth = (marginWidth + cardWidth);
    const currentPos = slider.scrollLeft;

    if (currentPos % fullWidth < 10 || fullWidth - (currentPos % fullWidth) < 10) {
    /* if it is on straight place then go to next slide */
      slider.scrollLeft = currentPos - fullWidth;
    } else {
    /* if slide is somewhere on middle then set it on straight position */
      slider.scrollLeft = Math.floor(currentPos / fullWidth) * fullWidth;
    }
  };

  // slider navigation logic
  /* make array of proper breackpoints (scrollLeft values) for every chapter (button) */
  const chaptersPositions = [0]; /* first chapter position is everytime scrollLeft === 0 */

  for (let i = 0; i < chaptersCounts.length - 1; i++) {
    chaptersPositions.push(chaptersPositions[i] + chaptersCounts[i] * (cardWidth + marginWidth));
  }

  /* set listeners on each button. Each listener will set on appropriate scroll position */
  for (let i = 0; i < navButtons.length; i++) {
    navButtons[i].onclick = () => {
      slider.scrollLeft = chaptersPositions[i];
    };
  }

  /* it will change active chapter button depended of appropriate scroll position */
  slider.onscroll = () => {
    const nearest = {
      difference: Infinity,
      position: NaN,
      indexOfChapter: null,
    };

    /* it calculates nearest chapter of current scroll position */
    for (let i = 0; i < chaptersPositions.length; i++) {
      if (Math.abs(chaptersPositions[i] - slider.scrollLeft) < nearest.difference) {
        nearest.difference = Math.abs(chaptersPositions[i] - slider.scrollLeft);
        nearest.position = chaptersPositions[i];
        nearest.indexOfChapter = i;
      }
    }

    /* this activate proper (nearest) chapters button */
    navButtons[nearest.indexOfChapter].control.checked = true;

    /* this activate or deactivate arrow buttons if there space to scroll or not */
    if (slider.scrollLeft === 0) {
      buttonBack.style.opacity = '0.3';
    } else if ((slider.scrollLeft + slider.offsetWidth) >= sliderRow.offsetWidth) {
      buttonNext.style.opacity = '0.3';
    } else {
      buttonNext.style.opacity = buttonBack.style.opacity = '1';
    }
  };
};

initSlider();

// when window sizes changes, then card sizes changes too
window.addEventListener('resize', () => {
  setTimeout(() => {
    cardWidth = (sliderRow.offsetWidth - marginWidth * (quantifyOfSlides - 1)) / quantifyOfSlides;
    initSlider();
  }, 1000); /* there are bug in browser, sometimes it dont update card.offsetWidth in time */
});

// menu closing
