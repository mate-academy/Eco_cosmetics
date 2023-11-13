'use strict';

const menu = document.querySelector('.menu');
const menuOpenButton = document.querySelector('.top-actions__icon--menu');
const menuCloseButton =  document.querySelector('.top-actions__icon--close');
const menuItems = document.querySelectorAll('.menu__link');

function closeMenu() {
  menu.classList.remove('page__menu--active')
  document.body.style.overflowY = 'visible';
}

function openMenu() {
  menu.classList.add('page__menu--active');
  document.body.style.overflowY = 'hidden';
}

menuItems.forEach(item => item.addEventListener('click', () => {
  closeMenu();
}));

menuOpenButton.addEventListener('click', () => {
  openMenu();
});

menuCloseButton.addEventListener('click', () => {
  closeMenu();
});


const shopTabs = document.querySelectorAll('.shop__tab');
const shopProducts = document.querySelectorAll('.shop__product');

shopTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    shopProducts.forEach(prod => {
      delete prod.dataset.active;
    })
    shopTabs.forEach(shopTab => {
      shopTab.classList.remove('button-tab--active');
    })

    const categoryProd
      = document.querySelector(`.shop__product[data-category="${tab.dataset.category}"]`);

    categoryProd.dataset.active = true;

    tab.classList.add('button-tab--active');
  });
})

const form = document.querySelector('.contact__form');
const inputsbox = document.querySelectorAll('.contact__input-box');

function resetInputClasses(inputbox) {
  inputbox.children[0].className = 'contact__input';
  inputbox.children[1].textContent = '';
}

inputsbox.forEach(inputbox => inputbox.children[0].addEventListener('input', () => {
  resetInputClasses(inputbox);
}));

if(form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let error = false;

    inputsbox.forEach(inputbox => {
      resetInputClasses(inputbox);

      const input=inputbox.children[0];

      if(!input.value) {
        input.classList.add('contact__input--error');
        inputbox.children[1].textContent = 'Field must not be empty';
        error = true;
      } else if(input.name === 'email') {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        const test = emailRegex.test(input.value);
        if(!test) {
          input.classList.add('contact__input--error')
          inputbox.children[1].textContent = 'Email must have @ and . format';
          error=true;
        }
      } else if(input.name === 'tel') {
        const phoneRegex = /^\+380\d{9}$/;
        const test = phoneRegex.test(input.value);
        if(!test) {
          input.classList.add('contact__input--error')
          inputbox.children[1].textContent = 'Phone must have +380XXXXXXXXX format';;
          error=true;
        }
      }
    });

    if(error) {
      return;
    }

    inputsbox.forEach(inputbox => {
      const input=inputbox.children[0];
      input.classList.add('contact__input--success');
      input.value = "";

      setTimeout(() => {
        resetInputClasses(inputbox);
      }, 3000);
    })
  });
}

const hero = document.querySelector('.hero');
const heroInfo = document.querySelector('.hero__info');
const heroImage = document.querySelectorAll('.hero__image');
const header = document.querySelector('.header');
const sloganLine1 = document.querySelector('.slogan__description');
const sloganLine2 = document.querySelector('.slogan__heading');
const titles = document.querySelectorAll('.section-title');
const brandText = document.querySelector('.brand__text-box');
const creatorsText = document.querySelector('.creators__text-box');
const verticalText = document.querySelectorAll('.vertical-text');
const powderArrow = document.querySelectorAll('.powder__arrow');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        const mainClass = entry.target.dataset.animateClass;
        entry.target.classList.add(`${mainClass}--active-scroll`);
        if(entry.isIntersecting) observer.unobserve(entry.target);
      }
    })
  },
  {
    threshold: 0.5,
  }
);

if(header) observer.observe(header)
if(hero) observer.observe(hero);
if(heroInfo) observer.observe(heroInfo);
if(sloganLine1) observer.observe(sloganLine1);
if(sloganLine2) observer.observe(sloganLine2);
if(brandText) observer.observe(brandText);
if(creatorsText) observer.observe(creatorsText);

titles.forEach(item => {if(item) observer.observe(item)});
verticalText.forEach(item => {if(item) observer.observe(item)});
powderArrow.forEach(item =>{if(item) observer.observe(item)});
heroImage.forEach(item => {if(item) observer.observe(item)});
