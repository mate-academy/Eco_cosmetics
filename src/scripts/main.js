'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#shopF') {
    document.body.classList.add('page_shopF--with-menu');
  } else {
    document.body.classList.remove('page_shopF--with-menu');
  }
});
