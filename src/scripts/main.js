'use strict';

// nav-desktop transition after scrolling;
const navbar = document.querySelector('.nav-desktop');

const navbarOffsetTop = navbar.offsetTop;

window.addEventListener('scroll', () => {
  if (window.pageYOffset >= navbarOffsetTop) {
    navbar.classList.add('nav-desktop--sticky');
  } else {
    navbar.classList.remove('nav-desktop--sticky');
  }
});

// changing links at shop;

const links = document.querySelectorAll('.shop__link');

function linkClick(event) {
  event.preventDefault();

  links.forEach(link => {
    link.classList.remove('shop__link--active');
  });

  event.target.classList.add('shop__link--active');
}

links.forEach(link => {
  link.addEventListener('click', linkClick);
});

// changing cards at mobile shop
// 1) links + event listener
const faceLink = document.querySelector('.shop__link--1');
const bodyLink = document.querySelector('.shop__link--2');
const hairLink = document.querySelector('.shop__link--3');
const candleLink = document.querySelector('.shop__link--4');
const productCard1 = document.querySelector('.product-card--1');
const productCard2 = document.querySelector('.product-card--2');
const productCard3 = document.querySelector('.product-card--3');
const productCard4 = document.querySelector('.product-card--4');

faceLink.addEventListener('click', (event) => {
  event.preventDefault();

  productCard1.style.display = 'block';
  productCard2.style.display = 'none';
  productCard3.style.display = 'none';
  productCard4.style.display = 'none';
});

bodyLink.addEventListener('click', (event) => {
  event.preventDefault();

  productCard1.style.display = 'none';
  productCard2.style.display = 'block';
  productCard3.style.display = 'none';
  productCard4.style.display = 'none';
});

hairLink.addEventListener('click', (event) => {
  event.preventDefault();

  productCard1.style.display = 'none';
  productCard2.style.display = 'none';
  productCard3.style.display = 'block';
  productCard4.style.display = 'none';
});

candleLink.addEventListener('click', (event) => {
  event.preventDefault();

  productCard1.style.display = 'none';
  productCard2.style.display = 'none';
  productCard3.style.display = 'none';
  productCard4.style.display = 'block';
});

// 2) changing cards on mobile shop with smooth transitions

function showProductCard(card) {
  card.style.opacity = '1';
  card.style.transform = 'translateY(0)';
}

function hideProductCard(card) {
  card.style.opacity = '0';
  card.style.transform = 'translateY(20px)';
}

productCard1.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
productCard2.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
productCard3.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
productCard4.style.transition = 'opacity 0.2s ease, transform 0.2s ease';

faceLink.addEventListener('click', (event) => {
  event.preventDefault();

  hideProductCard(productCard2);
  hideProductCard(productCard3);
  hideProductCard(productCard4);

  setTimeout(() => {
    showProductCard(productCard1);
  }, 200);
});

bodyLink.addEventListener('click', (event) => {
  event.preventDefault();

  hideProductCard(productCard1);
  hideProductCard(productCard3);
  hideProductCard(productCard4);

  setTimeout(() => {
    showProductCard(productCard2);
  }, 200);
});

hairLink.addEventListener('click', (event) => {
  event.preventDefault();

  hideProductCard(productCard1);
  hideProductCard(productCard2);
  hideProductCard(productCard4);

  setTimeout(() => {
    showProductCard(productCard3);
  }, 200);
});

candleLink.addEventListener('click', (event) => {
  event.preventDefault();

  hideProductCard(productCard1);
  hideProductCard(productCard2);
  hideProductCard(productCard3);

  setTimeout(() => {
    showProductCard(productCard4);
  }, 200);
});

// changing cards at tablet/desktop shop
// 1) links + event listener
const faceLinkTablet = document.querySelector('.shop__link-tablet--1');
const bodyLinkTablet = document.querySelector('.shop__link-tablet--2');
const hairLinkTablet = document.querySelector('.shop__link-tablet--3');
const candlesLinkTablet = document.querySelector('.shop__link-tablet--4');

const productSet1 = document.querySelector('.shop__product-set--1');
const productSet2 = document.querySelector('.shop__product-set--2');
const productSet3 = document.querySelector('.shop__product-set--3');
const productSet4 = document.querySelector('.shop__product-set--4');

faceLinkTablet.addEventListener('click', toggleProductSets);
bodyLinkTablet.addEventListener('click', toggleProductSets);
hairLinkTablet.addEventListener('click', toggleProductSets);
candlesLinkTablet.addEventListener('click', toggleProductSets);

function toggleProductSets(event) {
  event.preventDefault();

  productSet1.style.display
  = event.target
    === faceLinkTablet
      ? 'block' : 'none';

  productSet2.style.display
  = event.target
    === bodyLinkTablet ? 'block' : 'none';

  productSet3.style.display
  = event.target
    === hairLinkTablet ? 'block' : 'none';

  productSet4.style.display
  = event.target
    === candlesLinkTablet ? 'block' : 'none';

  faceLinkTablet.classList.toggle('shop__link-tablet--active', event.target
  === faceLinkTablet);

  bodyLinkTablet.classList.toggle('shop__link-tablet--active', event.target
  === bodyLinkTablet);

  hairLinkTablet.classList.toggle('shop__link-tablet--active', event.target
  === bodyLinkTablet);

  candlesLinkTablet.classList.toggle('shop__link-tablet--active', event.target
  === bodyLinkTablet);
}

// 2) changing cards on tablet+desktop shop with smooth transitions

function showProductSet(set) {
  set.style.opacity = '1';
  set.style.transform = 'translateY(0)';
}

function hideProductSet(set) {
  set.style.opacity = '0';
  set.style.transform = 'translateY(20px)';
}

productSet1.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
productSet2.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
productSet3.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
productSet4.style.transition = 'opacity 0.2s ease, transform 0.2s ease';

hideProductSet(productSet2);
hideProductSet(productSet3);
hideProductSet(productSet4);

faceLinkTablet.addEventListener('click', (event) => {
  event.preventDefault();

  hideProductSet(productSet2);
  hideProductSet(productSet3);
  hideProductSet(productSet4);

  setTimeout(() => {
    showProductSet(productSet1);
  }, 200);
});

bodyLinkTablet.addEventListener('click', (event) => {
  event.preventDefault();

  hideProductSet(productSet1);
  hideProductSet(productSet3);
  hideProductSet(productSet4);

  setTimeout(() => {
    showProductSet(productSet2);
  }, 200);
});

hairLinkTablet.addEventListener('click', (event) => {
  event.preventDefault();

  hideProductSet(productSet1);
  hideProductSet(productSet2);
  hideProductSet(productSet4);

  setTimeout(() => {
    showProductSet(productSet3);
  }, 200);
});

candlesLinkTablet.addEventListener('click', (event) => {
  event.preventDefault();

  hideProductSet(productSet1);
  hideProductSet(productSet2);
  hideProductSet(productSet3);

  setTimeout(() => {
    showProductSet(productSet4);
  }, 200);
});

hideProductSet(productSet2);
hideProductSet(productSet3);
hideProductSet(productSet4);
hideProductCard(productCard2);
hideProductCard(productCard3);
hideProductCard(productCard4);

faceLinkTablet.addEventListener('click', (event) => {
  event.preventDefault();

  hideProductSet(productSet2);
  hideProductSet(productSet3);
  hideProductSet(productSet4);

  setTimeout(() => {
    showProductSet(productSet1);
  }, 200);
});

bodyLinkTablet.addEventListener('click', (event) => {
  event.preventDefault();

  hideProductSet(productSet1);
  hideProductSet(productSet3);
  hideProductSet(productSet4);

  setTimeout(() => {
    showProductSet(productSet2);
  }, 200);
});

hairLinkTablet.addEventListener('click', (event) => {
  event.preventDefault();

  hideProductSet(productSet1);
  hideProductSet(productSet2);
  hideProductSet(productSet4);

  setTimeout(() => {
    showProductSet(productSet3);
  }, 200);
});

candlesLinkTablet.addEventListener('click', (event) => {
  event.preventDefault();

  hideProductSet(productSet1);
  hideProductSet(productSet2);
  hideProductSet(productSet3);

  setTimeout(() => {
    showProductSet(productSet4);
  }, 200);
});

faceLink.addEventListener('click', (event) => {
  event.preventDefault();

  hideProductCard(productCard2);
  hideProductCard(productCard3);
  hideProductCard(productCard4);

  setTimeout(() => {
    showProductCard(productCard1);
  }, 200);
});

bodyLink.addEventListener('click', (event) => {
  event.preventDefault();

  hideProductCard(productCard1);
  hideProductCard(productCard3);
  hideProductCard(productCard4);

  setTimeout(() => {
    showProductCard(productCard2);
  }, 200);
});

hairLink.addEventListener('click', (event) => {
  event.preventDefault();

  hideProductCard(productCard1);
  hideProductCard(productCard2);
  hideProductCard(productCard4);

  setTimeout(() => {
    showProductCard(productCard3);
  }, 200);
});

candleLink.addEventListener('click', (event) => {
  event.preventDefault();

  hideProductCard(productCard1);
  hideProductCard(productCard2);
  hideProductCard(productCard3);

  setTimeout(() => {
    showProductCard(productCard4);
  }, 200);
});

// reset form after submission

const form = document.querySelector('#form');

form.addEventListener('submit', buttonClick, false);

function buttonClick(event) {
  event.preventDefault();
  form.reset();
};

// menu classes added for shop and overlay

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
    document.getElementById('overlay').classList.add('overlay--active');
  } else {
    document.body.classList.remove('page__body--with-menu');
    document.getElementById('overlay').classList.remove('overlay--active');
  }
});
