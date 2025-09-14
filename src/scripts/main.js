'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#product') {
    document.body.classList.add('page__body--with-product');
  } else {
    document.body.classList.remove('page__body--with-product');
  }
});

const categoryLinks = document.querySelectorAll('.shop__link');
const categoryBlocks = document.querySelectorAll('.shop__category');

categoryLinks.forEach(link => {
  link.addEventListener('click', e => {
    const category = link.getAttribute('data-category');

    e.preventDefault();

    if (category) {
      categoryBlocks.forEach(block => {
        block.classList.remove('active');
      });

      const target = document.querySelector(`.shop__category[data-category="${category}"]`);
      if (target) {
        target.classList.add('active');
      }
    }
  });
});

const clickableImages = document.querySelectorAll('.shop__image-first, .shop__image-second');

clickableImages.forEach(img => {
  img.addEventListener('click', () => {
    if (window.matchMedia('(max-width: 1279px)').matches) {
      window.location.href = '#product';
    }
  });
});
