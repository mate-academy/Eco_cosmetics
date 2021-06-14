'use strict';

const nav = document.querySelector('.nav');
const toggler = document.querySelector('.header__toggler');

toggler.addEventListener('click', () => {
  nav.classList.toggle('nav__nothidden');
});
