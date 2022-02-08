
// import Swiper JS
import Swiper from 'swiper';

const menuIconLine = document.querySelectorAll('.menu-icon__line');
const menuIcon = document.querySelector('.menu-icon');
const openMenu = document.querySelector('.open-menu');

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
    openMenu.classList.add('header__open-menu--open');
    menuIcon.href = '#';

    for (let i = 0; i < menuIconLine.length; i++) {
      menuIconLine[i].classList.add('menu-icon__line--open-menu');
    }
  } else {
    document.body.classList.remove('page__body--with-menu');
    openMenu.classList.remove('header__open-menu--open');
    menuIcon.href = '#menu';

    for (let i = 0; i < menuIconLine.length; i++) {
      menuIconLine[i].classList.remove('menu-icon__line--open-menu');
    }
  }
});

const imageCopy = document.querySelector('.about__image-copy');

window.onresize = function() {
  const margin = (document.querySelector('.page__body').offsetWidth - 1180) / 2;

  imageCopy.style.width = margin + 80 + 'px';
  imageCopy.style.maxWidth = '500px';
};

window.onload = function() {
  const margin = (document.querySelector('.page__body').offsetWidth - 1180) / 2;

  imageCopy.style.width = margin + 80 + 'px';
  imageCopy.style.maxWidth = '500px';
};

const swiper = new Swiper('.shop-section__slider', {

  slideToClickedSlide: true,

  hashNavigation: {
    watchState: true,
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  spaceBetween: 20,

  breakpoints: {
    320: {
      slidesPerView: 1,
    },

    768: {
      slidesPerView: 2,
    },

    1280: {
      slidesPerView: 3,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    },
  },

});

const faceTab = document.querySelector('.shop-section__face-tab');
const bodyTab = document.querySelector('.shop-section__body-tab');
const hairTab = document.querySelector('.shop-section__hair-tab');
const candlesTab = document.querySelector('.shop-section__candles-tab');
const tab = document.querySelectorAll('.shop-section__tab');

const faceSlider = document.querySelector('.shop-section__slider--face');
const bodySlider = document.querySelector('.shop-section__slider--body');
const hairSlider = document.querySelector('.shop-section__slider--hair');
const candlesSlider = document.querySelector('.shop-section__slider--candles');
const slider = document.querySelectorAll('.shop-section__slider');

window.onload = function() {
  faceTab.classList.add('shop-section__tab--active');
  faceSlider.classList.add('shop-section__slider--active');

  return swiper;
};

function removeActive() {
  for (let i = tab.length - 1; i >= 0; i--) {
    tab[i].classList.remove('shop-section__tab--active');
  }

  for (let j = slider.length - 1; j >= 0; j--) {
    slider[j].classList.remove('shop-section__slider--active');
  }
}

faceTab.addEventListener('click', function() {
  removeActive();
  faceTab.classList.add('shop-section__tab--active');
  faceSlider.classList.add('shop-section__slider--active');
});

bodyTab.addEventListener('click', function() {
  removeActive();
  bodyTab.classList.add('shop-section__tab--active');
  bodySlider.classList.add('shop-section__slider--active');
});

hairTab.addEventListener('click', function() {
  removeActive();
  hairTab.classList.add('shop-section__tab--active');
  hairSlider.classList.add('shop-section__slider--active');
});

candlesTab.addEventListener('click', function() {
  removeActive();
  candlesTab.classList.add('shop-section__tab--active');
  candlesSlider.classList.add('shop-section__slider--active');
});
