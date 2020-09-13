'use strict';

function menuHidder() {
  const checbox = document.querySelector('#menuToggler');
  const linksList = document.querySelector('.header__ul');

  linksList.onclick = () => {
    /* menu showed only when neigbor checkbox checked */
    checbox.checked = false;
  };
};

menuHidder();
