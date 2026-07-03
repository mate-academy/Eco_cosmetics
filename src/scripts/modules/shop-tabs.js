'use strict';

export const initShopTabs = () => {
  const buttons = [...document.querySelectorAll('[data-tab]')];
  const cards = [...document.querySelectorAll('[data-category]')];

  if (!buttons.length || !cards.length) {
    return;
  }

  const showCategory = (category) => {
    buttons.forEach((button) => {
      button.classList.toggle('tabs__button--active', button.dataset.tab === category);
    });

    cards.forEach((card) => {
      card.classList.toggle('product-card--hidden', card.dataset.category !== category);
    });
  };

  buttons.forEach((button) => {
    button.addEventListener('click', () => showCategory(button.dataset.tab));
  });

  showCategory('face');
};
