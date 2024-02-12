'use strict';

const copyrigth = document.querySelector('.footer__copyright');
const pageWidth = document.documentElement.clientWidth;

if (pageWidth >= 1024) {
  copyrigth.textContent = 'Copyright \u00A9 2024 witch of mountain winds';
} else {
  copyrigth.textContent = '\u00A9 2024 witch of mountain winds';
}
