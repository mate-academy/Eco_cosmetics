'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menus') {
    document.body.classList.add('page__body--with-menus');
  } else {
    document.body.classList.remove('page__body--with-menus');
  }
});
// const swiper = new Swiper('.swiper', {
//   // Default parameters
//   slidesPerView: 1,
//   spaceBetween: 10,
//   breakpoints: {
//     640: {
//       slidesPerView: 2,
//       spaceBetween: 30,
//     },
//     1280: {
//       slidesPerView: 3,
//       spaceBetween: 20,
//     },
//   },
// });
