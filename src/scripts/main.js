'use strict';

import hydrophilicOilImg from '../images/hydrophilic-oil.jpg';
import faceCreamImg from '../images/face-cream.jpg';
import ubtanImg from '../images/ubtan.jpg';
import mainImg from '../images/main-img.jpg';
import candleSmallImg from '../images/candle-small.jpg';
import candleBigImg from '../images/candle-big.jpg';

const siteHeader = document.querySelector('.site-header');
const menuButton = document.querySelector('.site-header__menu-button');
const closeButton = document.querySelector('.site-header__close-button');
const mobileLinks = document.querySelectorAll('.site-header__mobile-link');
const shopTabs = document.querySelectorAll('.shop__tab');
const shopProducts = document.querySelector('#shop-products');
const prevArrow = document.querySelector('.shop__arrow--prev');
const nextArrow = document.querySelector('.shop__arrow--next');
const contactForm = document.querySelector('.contact__form');
const contactStatus = document.querySelector('.contact__status');
const contactInputs = contactForm.querySelectorAll('.contact__input');

const productsByCategory = {
  face: [
    {
      title: 'Hydrophilic oil',
      price: '160 UAH',
      image: hydrophilicOilImg,
      alt: 'Hydrophilic oil bottle',
    },
    {
      title: 'Face cream',
      price: '210 UAH',
      image: faceCreamImg,
      alt: 'Face cream jar',
    },
    {
      title: 'Ubtan',
      price: '160 UAH',
      image: ubtanImg,
      alt: 'Ubtan powder',
    },
  ],
  body: [
    {
      title: 'Silk body balm',
      price: '240 UAH',
      image: mainImg,
      alt: 'Natural body balm',
    },
    {
      title: 'Herbal scrub',
      price: '190 UAH',
      image: hydrophilicOilImg,
      alt: 'Organic herbal scrub',
    },
    {
      title: 'Restoring butter',
      price: '225 UAH',
      image: faceCreamImg,
      alt: 'Skin restoring butter',
    },
  ],
  hair: [
    {
      title: 'Scalp serum',
      price: '230 UAH',
      image: mainImg,
      alt: 'Scalp treatment serum',
    },
    {
      title: 'Herbal shampoo',
      price: '180 UAH',
      image: ubtanImg,
      alt: 'Liquid herbal shampoo',
    },
    {
      title: 'Conditioning mask',
      price: '250 UAH',
      image: candleSmallImg,
      alt: 'Conditioning hair treatment',
    },
  ],
  candles: [
    {
      title: 'Moonlight amber',
      price: '280 UAH',
      image: candleBigImg,
      alt: 'Large ritual candle',
    },
    {
      title: 'Forest ritual',
      price: '170 UAH',
      image: candleSmallImg,
      alt: 'Small soy candle',
    },
    {
      title: 'Gift set',
      price: '420 UAH',
      image: mainImg,
      alt: 'Magical ritual gift set',
    },
  ],
};

let currentCategory = 'face';
let currentPage = 0;
let lastScrollY = window.scrollY;

function closeMenu() {
  siteHeader.classList.remove('site-header--menu-open');
  document.body.classList.remove('body--menu-open');
  menuButton.setAttribute('aria-expanded', 'false');
}

function getSlidesPerView() {
  if (window.innerWidth >= 768) return 2;
  return 1;
}

function updateSliderControls(totalProducts) {
  const slidesPerView = getSlidesPerView();
  const maxPage = Math.max(0, Math.ceil(totalProducts / slidesPerView) - 1);

  if (prevArrow) prevArrow.disabled = currentPage === 0;
  if (nextArrow) nextArrow.disabled = currentPage >= maxPage;
}

function renderProducts() {
  const slidesPerView = getSlidesPerView();
  const products = productsByCategory[currentCategory];
  const startIndex = currentPage * slidesPerView;
  const visibleProducts = products.slice(startIndex, startIndex + slidesPerView);

  if (!shopProducts) return;

  shopProducts.innerHTML = visibleProducts
    .map(
      ({ alt, image, price, title }) => `
        <li class="shop__product">
          <article class="product-card">
            <div class="product-card__media">
              <img class="product-card__image" src="${image}" alt="${alt}">
            </div>
            <div class="product-card__content">
              <h3 class="product-card__title">${title}</h3>
              <div class="product-card__footer">
                <p class="product-card__price">${price}</p>
              </div>
            </div>
          </article>
        </li>
      `,
    )
    .join('');

  updateSliderControls(products.length);
}

function updateActiveTab(nextCategory) {
  currentCategory = nextCategory;
  currentPage = 0;

  shopTabs.forEach((tab) => {
    const isActive = tab.dataset.category === nextCategory;
    tab.classList.toggle('shop__tab--active', isActive);
    tab.setAttribute('aria-selected', String(isActive));
  });

  renderProducts();
}

function handleHeaderOnScroll() {
  const currentScrollY = window.scrollY;
  const isScrollingDown = currentScrollY > lastScrollY;

  siteHeader.classList.toggle('site-header--scrolled', currentScrollY > 10);

  if (!siteHeader.classList.contains('site-header--menu-open')) {
    siteHeader.classList.toggle(
      'site-header--hidden',
      isScrollingDown && currentScrollY > 140,
    );
  }

  lastScrollY = currentScrollY;
}

if (menuButton) {
  menuButton.addEventListener('click', () => {
    const willOpen = !siteHeader.classList.contains('site-header--menu-open');
    siteHeader.classList.toggle('site-header--menu-open', willOpen);
    document.body.classList.toggle('body--menu-open', willOpen);
    menuButton.setAttribute('aria-expanded', String(willOpen));
  });
}

if (closeButton) {
  closeButton.addEventListener('click', closeMenu);
}

mobileLinks.forEach((link) => {
  link.addEventListener('click', closeMenu);
});

shopTabs.forEach((tab) => {
  tab.addEventListener('click', () => updateActiveTab(tab.dataset.category));
});

if (prevArrow) {
  prevArrow.addEventListener('click', () => {
    currentPage = Math.max(0, currentPage - 1);
    renderProducts();
  });
}

if (nextArrow) {
  nextArrow.addEventListener('click', () => {
    const slidesPerView = getSlidesPerView();
    const products = productsByCategory[currentCategory];
    const maxPage = Math.max(0, Math.ceil(products.length / slidesPerView) - 1);

    currentPage = Math.min(maxPage, currentPage + 1);
    renderProducts();
  });
}

window.addEventListener('scroll', handleHeaderOnScroll, { passive: true });

window.addEventListener('resize', () => {
  if (window.innerWidth >= 1280) {
    closeMenu();
  }
  renderProducts();
});

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    let hasError = false;
    contactInputs.forEach(input => {
        if (!input.checkValidity()) {
            input.classList.add('is-error');
            hasError = true;
        } else {
            input.classList.remove('is-error');
            input.classList.add('is-success');
        }
    });

    if (hasError) {
        contactStatus.textContent = 'Please fill all fields correctly.';
        contactStatus.className = 'contact__status contact__status--error';
        return;
    }

    contactStatus.textContent = 'Message sent! We will reach you out shortly.';
    contactStatus.className = 'contact__status contact__status--success';
    contactForm.reset();
    
    setTimeout(() => {
        contactInputs.forEach(input => input.classList.remove('is-success', 'is-error'));
        contactStatus.textContent = '';
    }, 5000);
  });

  contactInputs.forEach(input => {
      input.addEventListener('input', () => {
          input.classList.remove('is-error', 'is-success');
      });
  });
}

renderProducts();
handleHeaderOnScroll();
