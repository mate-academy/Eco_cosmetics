/* eslint-disable no-unused-vars */
'use strict';

// eslint-disable-next-line no-undef
const swiper = new Swiper('.swiper', {
  slidesPerView: 'auto',
  direction: 'horizontal',
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  spaceBetween: 30,

  breakpoints: {
    1260: {
      spaceBetween: 20,
    },
  },
});

function openMenu() {
  const menu = document.querySelector('.menu');
  const btnOpenMenu = document.querySelector('.burger-menu');

  function toggleMenu() {
    document.body.classList.toggle('page--with-menu');
    menu.classList.toggle('page__menu--open');
  }

  btnOpenMenu.addEventListener('click', toggleMenu);

  menu.addEventListener('click', (event) => {
    if (event.target.classList.contains('menu__link')) {
      toggleMenu();
    } else if (event.target.classList.contains('menu__closer')) {
      toggleMenu();
    }
  });
}

function showElement() {
  const article = document.querySelector('.article');
  const options = { threshold: [1] };
  // eslint-disable-next-line no-undef
  const observer = new IntersectionObserver(isVisible, options);

  function isVisible(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        article.classList.add('article--show');
      }
    });
  }

  observer.observe(article);
}

function formSettings() {
  const form = document.querySelector('.form');
  const formRequired = document.querySelectorAll('.form__field--required');
  const formBtnSubmit = document.querySelector('.form__submit');
  const formTel = document.querySelector('.form__field--tel');

  function setRequired() {
    formRequired.forEach(field => {
      field.setAttribute('required', '');
    });
  }

  function removeRequired() {
    formRequired.forEach(field => {
      field.removeAttribute('required', '');
    });
  }

  formTel.addEventListener('input', () => {
    const replaced = formTel.value.replace(/[^0-9.]/g, '');

    formTel.value = replaced.replace(/(\..*)\./g, '$1');
  });

  formBtnSubmit.addEventListener('click', setRequired);

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    form.reset();

    window.scrollTo(0, 0);

    removeRequired();
  });
}

function fixedHeader() {
  const header = document.querySelector('.page__header');
  let scrollPrev = 0;
  let checkFixed;

  function animateHeader() {
    const scrollTop = window.scrollY;
    const headerClientHeight = header.clientHeight;
    const headerHeight = headerClientHeight;

    if (window.scrollY > headerHeight) {
      checkFixed = false;

      if (!checkFixed) {
        setTimeout(() => {
          header.classList.add('page__header--fixed');
        }, 400);

        checkFixed = true;
      }
    } else {
      checkFixed = false;

      if (!checkFixed) {
        setTimeout(() => {
          header.classList.remove('page__header--fixed');
        }, 400);

        checkFixed = false;
      }
    }

    if (scrollTop > headerHeight && scrollTop > scrollPrev) {
      header.classList.add('page__header--animate');
    } else {
      header.classList.remove('page__header--animate');
    }

    scrollPrev = scrollTop;
  }

  window.addEventListener('scroll', () => {
    animateHeader();
  });
}

function tabOpen() {
  const tabLinks = document.querySelectorAll('.tab__link');
  const tabPanes = document.querySelectorAll('.tab__pane');

  function toggleClass(event) {
    event.preventDefault();

    const activeTabAttr = event.target.getAttribute('data-tab');

    for (let j = 0; j < tabLinks.length; j++) {
      const contentAttr = tabPanes[j].getAttribute('data-tab-content');

      if (activeTabAttr === contentAttr) {
        tabLinks[j].classList.add('tab__link--active');
        tabPanes[j].classList.add('tab__pane--active');
      } else {
        tabLinks[j].classList.remove('tab__link--active');
        tabPanes[j].classList.remove('tab__pane--active');
      }
    };
  }

  tabLinks.forEach(link => {
    link.addEventListener('click', toggleClass);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  openMenu();
  showElement();
  formSettings();
  fixedHeader();
  tabOpen();
});
