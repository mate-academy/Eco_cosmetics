'use strict';

window.addEventListener(' ashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

window.addEventListener(' ashchange', () => {
  if (window.location.hash === '#slide') {
    document.body.classList.add('page__body--with-slide');
  } else {
    document.body.classList.remove('page__body--with-slide');
  }
});

window.addEventListener(' ashchange', () => {
  if (window.location.hash === '#slide2') {
    document.body.classList.add('page__body--with-slide');
  } else {
    document.body.classList.remove('page__body--with-slide');
  }
});

window.addEventListener(' ashchange', () => {
  if (window.location.hash === '#slide3') {
    document.body.classList.add('page__body--with-slide');
  } else {
    document.body.classList.remove('page__body--with-slide');
  }
});

window.addEventListener(' ashchange', () => {
  if (window.location.hash === '#slide4') {
    document.body.classList.add('page__body--with-slide');
  } else {
    document.body.classList.remove('page__body--with-slide');
  }
});

const formClass = document.querySelector('.form-class');

function submitForm(event) {
  event.preventDefault();
  formClass.reset();
  window.scrollTo(0, 0);
}

formClass.addEventListener('submit', submitForm);

const formClass2 = document.querySelector('.form-class2');

function submitForm2(event) {
  event.preventDefault();
  formClass2.reset();
  window.open('#slide3');
}

formClass2.addEventListener('submit', submitForm2);
