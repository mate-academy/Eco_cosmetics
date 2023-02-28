'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menus') {
    document.body.classList.add('page__body--with-menus');
  } else {
    document.body.classList.remove('page__body--with-menus');
  }
});
