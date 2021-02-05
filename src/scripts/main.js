'use strict';

const navEl = document.querySelector('.burger-menu__navigation');
const toggle = document.getElementById('toggle');

function disableNav(event) {
  if (event.target.tagName !== 'A') {
    return;
  }

  toggle.checked = false;
}

navEl.addEventListener('click', disableNav);
