'use strict';

// menu open-close
const openMenu = document.querySelector('#open-menu');
const closeMenu = document.querySelector('#close-menu');
const aside = document.querySelector('.aside');

openMenu.addEventListener('click', () => {
  document.body.style.overflow = 'hidden';
  aside.style.right = '0';
});

closeMenu.addEventListener('click', () => {
  document.body.style.overflow = 'auto';

  aside.style.right = '100%';
});

aside.addEventListener('click', (event) => {
  if (event.target.tagName === 'A' && event.target.closest('aside')) {
    document.body.style.overflow = 'auto';

    aside.style.right = '100%';
  }
});

// shop links hover animations
const shopLinks = document.querySelectorAll('.shop-nav__link');
const productsContainers = document.querySelectorAll(
  '.section__products-container');

shopLinks.forEach(function(link) {
  link.addEventListener('mouseover', function() {
    shopLinks.forEach(function(link1) {
      link1.classList.remove('active');
    });

    const currentLink = this;

    productsContainers.forEach(function(product) {
      product.style.display = 'none';

      if (currentLink.getAttribute('data-target') === product.id) {
        product.style.display = 'flex';
      }
    });

    this.classList.add('active');
  });
});

// draw horizontal lines onDesktop .section--slogan
const mainElement = document.querySelector('.main');
const sectionContainerElementLeft = document.querySelector(
  '.section__line-on-desktop--left');
const sectionContainerElementRight = document.querySelector(
  '.section__line-on-desktop--right');

function updateSectionContainer() {
  const marginLeft = window.getComputedStyle(mainElement).marginLeft;
  const paddingLeft = window.getComputedStyle(mainElement).paddingLeft;

  sectionContainerElementLeft.style.setProperty(
    'left', `calc(-${marginLeft} - ${paddingLeft} - ${'100px'})`);

  sectionContainerElementRight.style.setProperty(
    'right', `calc(-${marginLeft} - ${paddingLeft} - ${'200px'})`);
}

window.addEventListener('resize', updateSectionContainer);
updateSectionContainer();
