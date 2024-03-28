'use strict';

document.addEventListener('DOMContentLoaded', function() {
  const menuIcon = document.querySelector('.nav__icon.menu');
  const aside = document.querySelector('.aside');
  const closeIcon = document.querySelector('.aside__icon-close');
  const links = document.querySelectorAll('.aside__link');

  function toggleScroll() {
    aside.classList.toggle('open');
    document.body.classList.toggle('no-scroll');
  }

  menuIcon.addEventListener('click', toggleScroll);
  closeIcon.addEventListener('click', toggleScroll);

  links.forEach(link => {
    link.addEventListener('click', toggleScroll);
  });
});
