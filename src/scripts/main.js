'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu'
    || window.location.hash === '#checkout'
    || window.location.hash === '#payment'
    || window.location.hash === '#Sucess') {
    document.body.style.overflowY = 'hidden';
  } else {
    document.body.style.overflowY = 'auto';
  }
});
