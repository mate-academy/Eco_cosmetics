'use strict';

const toggler = document.querySelector('#toggler');
const navLink = document.querySelectorAll('.nav__link');

function removeToggler() {
  for (const link of navLink) {
    link.addEventListener('click', () => {
      toggler.checked = false;
    });
  }
}

removeToggler();
