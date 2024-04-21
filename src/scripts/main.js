'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

window.addEventListener('DOMContentLoaded', () => {
  const tabsList = document.querySelectorAll('.shop__tab-button');

  tabsList.forEach(tab => {
    tab.addEventListener('click', changeTabs);
  });
});

function changeTabs(e) {
  const targetTab = e.target;
  const tabsList = document.querySelectorAll('.shop__tab-button');
  const tabPanels = document.querySelectorAll('.shop__tab-products');

  tabsList.forEach(tab => tab.classList.remove('shop__tab-button--active'));

  targetTab.classList.add('shop__tab-button--active');

  tabPanels.forEach(panel => {
    if (panel.dataset.panel === targetTab.dataset.tab) {
      panel.classList.remove('hidden');
    } else {
      panel.classList.add('hidden');
    }
  });
}
