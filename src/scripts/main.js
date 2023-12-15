'use strict';

const slider = document.querySelector('.slider__wrap');
const sliderItems = Array.from(slider.querySelectorAll('.slider__item'));
const btn1 = document.querySelector('.slider__btn--1');
const btn2 = document.querySelector('.slider__btn--2');
const btn3 = document.querySelector('.slider__btn--3');
const btn4 = document.querySelector('.slider__btn--4');

sliderItems.forEach(function(slide, index) {
  if (index !== 0) {
    slide.classList.add('hidden');
  }

  slide.dataset.index = index;
  sliderItems[0].setAttribute('data-active', '');

  slide.addEventListener('click', function() {
    slide.classList.add('hidden');
    slide.removeAttribute('data-active');

    const nextSlideIndex = index + 1 === sliderItems.length ? 0 : index + 1;
    const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);

    nextSlide.classList.remove('hidden');
    nextSlide.setAttribute('data-active', '');
  });
});

btn1.onclick = function button1() {
  const currentSlide = slider.querySelector('[data-active]');

  currentSlide.classList.add('hidden');
  currentSlide.removeAttribute('data-active');
  sliderItems[0].setAttribute('data-active', '');
  sliderItems[0].classList.remove('hidden');
};

btn2.onclick = function button2() {
  const currentSlide = slider.querySelector('[data-active]');

  currentSlide.classList.add('hidden');
  currentSlide.removeAttribute('data-active');
  sliderItems[1].setAttribute('data-active', '');
  sliderItems[1].classList.remove('hidden');
};

btn3.onclick = function button3() {
  const currentSlide = slider.querySelector('[data-active]');

  currentSlide.classList.add('hidden');
  currentSlide.removeAttribute('data-active');
  sliderItems[2].setAttribute('data-active', '');
  sliderItems[2].classList.remove('hidden');
};

btn4.onclick = function button4() {
  const currentSlide = slider.querySelector('[data-active]');

  currentSlide.classList.add('hidden');
  currentSlide.removeAttribute('data-active');
  sliderItems[3].setAttribute('data-active', '');
  sliderItems[3].classList.remove('hidden');
};
