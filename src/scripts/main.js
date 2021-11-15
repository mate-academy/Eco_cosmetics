'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#sidemenu') {
    document.body.classList.add('page__body--with-sidemenu');
  } else {
    document.body.classList.remove('page__body--with-sidemenu');
  }
});
