'use strict';

const sliderState = {
  activeCategory: 'face',
  position: 0,
};

export const initShop = () => {
  const buttons = [...document.querySelectorAll('[data-tab]')];
  const cards = [...document.querySelectorAll('[data-category]')];
  const track = document.querySelector('[data-slider-track]');
  const prevButton = document.querySelector('[data-slider-prev]');
  const nextButton = document.querySelector('[data-slider-next]');

  if (!buttons.length || !cards.length || !track) {
    return;
  }

  const getVisibleCards = () =>
    cards.filter((card) => !card.classList.contains('product-card--hidden'));

  const updateSlider = () => {
    const visibleCards = getVisibleCards();
    const cardWidth = visibleCards[0]?.getBoundingClientRect().width || 0;
    const gap = 28;

    track.style.transform = `translateX(-${sliderState.position * (cardWidth + gap)}px)`;
  };

  const showCategory = (category) => {
    sliderState.activeCategory = category;
    sliderState.position = 0;

    buttons.forEach((button) => {
      button.classList.toggle('tabs__button--active', button.dataset.tab === category);
    });

    cards.forEach((card) => {
      card.classList.toggle('product-card--hidden', card.dataset.category !== category);
    });

    updateSlider();
  };

  buttons.forEach((button) => {
    button.addEventListener('click', () => showCategory(button.dataset.tab));
  });

  prevButton?.addEventListener('click', () => {
    sliderState.position = Math.max(sliderState.position - 1, 0);
    updateSlider();
  });

  nextButton?.addEventListener('click', () => {
    const maxPosition = Math.max(getVisibleCards().length - 1, 0);

    sliderState.position = Math.min(sliderState.position + 1, maxPosition);
    updateSlider();
  });

  window.addEventListener('resize', updateSlider);
  showCategory(sliderState.activeCategory);
};
