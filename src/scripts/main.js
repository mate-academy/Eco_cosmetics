'use strict';

const shopLinks = document.querySelectorAll('.shop__link');

shopLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    shopLinks.forEach(linkr => {
      linkr.classList.remove('shop__link--active');
    });

    event.target.classList.add('shop__link--active');
  });
});
