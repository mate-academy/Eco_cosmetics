'use strict';

const tabs = document.querySelectorAll('.shop__tab');
const allContent = document.querySelectorAll('.shop__product-carts');

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    tabs.forEach(tab => {
      tab.classList.remove('shop__tab--active');
    });
    tab.classList.add('shop__tab--active');

    allContent.forEach(content => {
      content.classList.remove('shop__product-carts--active');
    });
    allContent[index].classList.add('shop__product-carts--active');
  });
});

$(() => {
  $('.slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2
  });
});
