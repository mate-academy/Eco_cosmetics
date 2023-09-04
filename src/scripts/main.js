'use strict';

const isMobile = {
  Android: () => {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: () => {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: () => {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: () => {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: () => {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: () => {
    return (
      isMobile.Android()
      || isMobile.BlackBerry()
      || isMobile.iOS()
      || isMobile.Opera()
      || isMobile.Windows()
    );
  },
};

const menuOpener = document.querySelector('.top-action__menu-opener');
const menuCloser = document.querySelector('.top-action__menu-closer');
const body = document.querySelector('.page__body');
const menuLinks = document.querySelectorAll('.touch-navigation__link');
const mainMenu = document.querySelector('.touch-navigation');
const scrolWidth = window.innerWidth - document.body.clientWidth;

if (menuOpener) {
  menuOpener.addEventListener('click', (e) => {
    menuOpener.classList.toggle('_active');
    body.classList.toggle('_lock');
    mainMenu.classList.toggle('_open');

    if (!isMobile.any()) {
      if (body.classList.contains('_lock')) {
        body.style.paddingRight = scrolWidth + 'px';
      } else {
        body.style.paddingRight = 0;
      }
    }
  });
}

if (menuCloser) {
  menuCloser.addEventListener('click', (e) => {
    body.classList.toggle('_lock');
    mainMenu.classList.toggle('_open');

    if (!isMobile.any()) {
      if (body.classList.contains('_lock')) {
        body.style.paddingRight = scrolWidth + 'px';
      } else {
        body.style.paddingRight = 0;
      }
    }
  });
}

if (menuCloser) {
  for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener('click', (e) => {
      body.classList.toggle('_lock');
      mainMenu.classList.toggle('_open');

      if (!isMobile.any()) {
        if (body.classList.contains('_lock')) {
          setTimeout(() => {
            body.style.paddingRight = scrolWidth + 'px';
          }, 300);
        } else {
          setTimeout(() => {
            body.style.paddingRight = 0;
          }, 300);
        }
      }
    });
  }
}

const form = document.querySelector('.contact__form');
const formButton = document.querySelector('.contact__button');
const clientName = document.getElementById('clientName');
const clientEmail = document.getElementById('clientEmail');
const clientPhone = document.getElementById('clientPhone');
const clientMessage = document.getElementById('clientMessage');

formButton.addEventListener('click', () => {
  if (!clientName.checkValidity()) {
    clientName.classList.add('_error');
  } else {
    clientName.classList.remove('_error');
  }

  if (!clientEmail.checkValidity()) {
    clientEmail.classList.add('_error');
  } else {
    clientEmail.classList.remove('_error');
  }

  if (!clientPhone.checkValidity()) {
    clientPhone.classList.add('_error');
  } else {
    clientPhone.classList.remove('_error');
  }

  if (!clientMessage.checkValidity()) {
    clientMessage.classList.add('_error');
  } else {
    clientMessage.classList.remove('_error');
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.reset();
});

// text area

document.addEventListener('input', (e) => {
  if (e.target.tagName.toLowerCase() === 'textarea') {
    autoExpand(e.target);
  }
});

function autoExpand(textarea) {
  textarea.style.height = 'auto';
  textarea.style.height = textarea.scrollHeight + 1 + 'px';
}
