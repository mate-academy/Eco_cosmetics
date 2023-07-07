'use strict';

const checkHash = () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
  if (window.location.hash === '#oil') {
    document.getElementById('main-page').classList.add('hidden');
    document.getElementById('oil').classList.add('shown');
  } else if (window.location.hash === '#ubtan') {
    document.getElementById('main-page').classList.add('hidden');
    document.getElementById('ubtan').classList.add('shown');
  } else {
    document.getElementById('main-page').classList.remove('hidden');
    document.getElementById('oil').classList.remove('shown');
    document.getElementById('ubtan').classList.remove('shown');
  }
};

window.addEventListener('hashchange', checkHash);

checkHash();
