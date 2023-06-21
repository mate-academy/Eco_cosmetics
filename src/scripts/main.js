'use strict';

window.addEventListener('hashchange', () => {
  const hash = window.location.hash;

  if (hash === '#menu'
    || hash === '#card'
    || hash === '#shipping'
    || hash === '#payment'
    || hash === '#confirm') {
    document.body.classList.add('page__body--scrollOff');

    return;
  }

  document.body.classList.remove('page__body--scrollOff');
});

const contactForm = document.querySelector('.contact__form');
const shippingForm = document.querySelector('.shipping__form');
const paymentForm = document.querySelector('.payment__form');

contactForm.addEventListener('submit', event => {
  event.preventDefault();
  contactForm.reset();
});

shippingForm.addEventListener('submit', event => {
  event.preventDefault();
  window.location.hash = '#payment';
});

paymentForm.addEventListener('submit', event => {
  event.preventDefault();
  window.location.hash = '#confirm';
});

const paymentInputs = document.querySelectorAll('.payment__input');

document.querySelector('.payment__form').addEventListener('change', e => {
  paymentInputs.forEach(input => {
    if (input.checked) {
      input.nextElementSibling.classList.add('payment__img--checked');
      input.closest('label').classList.add('payment__label--checked');
    } else {
      input.nextElementSibling.classList.remove('payment__img--checked');
      input.closest('label').classList.remove('payment__label--checked');
    }
  });
});
