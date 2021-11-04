'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#nav') {
    document.body.classList.add('page--with-menu');
  } else {
    document.body.classList.remove('page--with-menu');
  }
});
