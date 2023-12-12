'use strict';

const root = document.querySelector('.root');

const animationMainChoose = root.querySelectorAll('.animation__main__choose');

const animationMainAboutProduct
  = root.querySelectorAll('.animation__main__about-product');

const animationMainShop = root.querySelectorAll('.animation__main__shop');
const mainShopItems
  = root.querySelectorAll('.main__shop--products--item');
const itemsLi = root.querySelectorAll('.main__shop--products--item');
const shopImages = root.querySelectorAll('.main__shop--products--card');
const mainShop = root.querySelector('.main__shop');
let currentShopWidth = '';

const animationMainAboutCreators
  = root.querySelectorAll('.animation__main__about-creators');

const mainIngredients = root.querySelector('.main__ingredients__wrapper');
const animationMainIngredients
  = root.querySelectorAll('.animation__main__ingredients');
const mainIngredientsItems
  = root.querySelectorAll('.main__ingredients__content--item');

const mainBenefitsItems
  = root.querySelectorAll('.main__benefits__content--item');

const form = root.querySelector('.main__contact__content--form');
const animationMainContact = root.querySelectorAll('.animation__main__contact');
const mainContactFormInputs
  = root.querySelectorAll('.main__contact__content--form--input');

const animationFooter = root.querySelectorAll('.animation__footer');

let scrollYPosition = window.scrollY || document.documentElement.scrollTop;
let pageWidth = document.documentElement.clientWidth;

form.addEventListener('submit', (e) => {
  e.preventDefault();

  form.reset();
});

function shopGenerate() {
  mainShop.classList.toggle('container',
    document.documentElement.clientWidth >= 1280);

  [...shopImages].forEach(
    clearItem => clearItem.classList
      .remove('main__shop--products--card--active'),
  );

  [...shopImages].forEach(
    clearItem => {
      clearItem.classList.remove('main__shop--products--card--active');

      clearItem.children[0].children[0].classList
        .remove('animation__main__shop--products--card--image');
    },
  );

  itemsLi[0].classList.add('main__shop--products--item--active');

  if (pageWidth >= 1280) {
    currentShopWidth = 'desktop';
  } else if (pageWidth >= 768) {
    currentShopWidth = 'tablet';
  } else {
    currentShopWidth = 'mobile';
  }

  switch (currentShopWidth) {
    case 'mobile':
      shopImages[0].classList.add('main__shop--products--card--active');

      shopImages[0].children[0].children[0].classList
        .add('animation__main__shop--products--card--image');
      break;

    case 'tablet':
    case 'desktop':
      shopImages[0].classList.add('main__shop--products--card--active');
      shopImages[1].classList.add('main__shop--products--card--active');

      shopImages[0].children[0].children[0].classList
        .add('animation__main__shop--products--card--image');

      shopImages[1].children[0].children[0].classList
        .add('animation__main__shop--products--card--image');
      break;
  }
}

[...itemsLi].forEach(item => item.addEventListener('click', (event) => {
  [...itemsLi].forEach(
    clearItem => clearItem.classList
      .remove('main__shop--products--item--active'),
  );

  [...shopImages].forEach(
    clearItem => {
      clearItem.classList.remove('main__shop--products--card--active');

      clearItem.children[0].children[0].classList
        .remove('animation__main__shop--products--card--image');
    },
  );

  const index = [...itemsLi].indexOf(event.target);

  item.classList.add('main__shop--products--item--active');

  switch (currentShopWidth) {
    case 'mobile':
      [...shopImages][index]
        .classList.add('main__shop--products--card--active');

      [...shopImages][index].children[0].children[0].classList
        .add('animation__main__shop--products--card--image');
      break;

    case 'tablet':
    case 'desktop':
      [...shopImages][index]
        .classList.add('main__shop--products--card--active');

      [...shopImages][index].children[0].children[0].classList
        .add('animation__main__shop--products--card--image');

      if ([...shopImages][index + 1]) {
        [...shopImages][index + 1]
          .classList.add('main__shop--products--card--active');

        [...shopImages][index + 1].children[0].children[0].classList
          .add('animation__main__shop--products--card--image');
      } else {
        [...shopImages][0]
          .classList.add('main__shop--products--card--active');

        [...shopImages][0].children[0].children[0].classList
          .add('animation__main__shop--products--card--image');
      }
      break;
  }
}));

function addMainChooseAnimation() {
  const mainChooseScroll
    = (scrollYPosition <= 1200 && pageWidth >= 1280)
    || (scrollYPosition >= 200 && scrollYPosition <= 1200 && pageWidth >= 768)
    || (pageWidth < 768 && scrollYPosition >= 50);

  if (mainChooseScroll) {
    animationMainChoose[0].classList.add(
      'animation__main__choose--left',
    );

    animationMainChoose[1].classList.add(
      'animation__main__choose--left',
    );

    animationMainChoose[2].classList.add(
      'animation__main__choose--right',
    );

    animationMainChoose[3].classList.add(
      'animation__main__choose--right',
    );
  }
}

function addMainAboutProductAnimation() {
  const mainAboutProductScroll
    = (scrollYPosition >= 400 && scrollYPosition <= 2000)
    || (pageWidth < 768 && scrollYPosition >= 150 && scrollYPosition <= 1200);

  if (mainAboutProductScroll) {
    animationMainAboutProduct[0].classList.add(
      'animation__main__about-product--side-info',
    );

    animationMainAboutProduct[1].classList.add(
      'animation__main__about-product--text-info',
    );

    animationMainAboutProduct[2].classList.add(
      'animation__main__about-product--image-info--huge',
    );

    animationMainAboutProduct[3].classList.add(
      'animation__main__about-product--image-info--small',
    );
  }
}

function addMainShopAnimation() {
  const mainShopScroll
    = (scrollYPosition >= 1150 && scrollYPosition <= 3000 && pageWidth >= 1280)
    || (scrollYPosition >= 800 && scrollYPosition <= 2400
      && pageWidth >= 768 && pageWidth < 1280)
    || (scrollYPosition >= 500 && scrollYPosition <= 1900 && pageWidth < 768);

  if (mainShopScroll) {
    animationMainShop[0].classList.add('animation__main__shop--side-info');

    animationMainShop[1].classList.add(
      'animation__main__shop--title',
    );

    animationMainShop[2].classList.add(
      'animation__main__shop--products--cards',
    );

    animationMainShop[3].classList.add(
      'animation__main__shop--button',
    );

    mainShopItems.forEach(shopItem => {
      shopItem.classList.add('animation__main__shop--item');
    });
  }
}

function addMainAboutCreatorsAnimation() {
  const mainAboutCreatorsScroll
    = (scrollYPosition >= 2200 && scrollYPosition <= 3800 && pageWidth >= 1280)
    || (pageWidth >= 768 && pageWidth < 1280
      && scrollYPosition >= 1600 && scrollYPosition <= 2900)
    || (pageWidth < 768 && scrollYPosition >= 1200 && scrollYPosition <= 2400);

  if (mainAboutCreatorsScroll) {
    animationMainAboutCreators[0].classList.add(
      'animation__main__about-creators--side-info',
    );

    animationMainAboutCreators[1].classList.add(
      'animation__main__about-creators--text-info',
    );

    animationMainAboutCreators[2].classList.add(
      'animation__main__about-creators--image-info',
    );
  }
}

function addMainIngredientsAnimation() {
  mainIngredients.classList.toggle('container',
    document.documentElement.clientWidth >= 1280);

  const mainAboutCreatorsScroll
    = (scrollYPosition >= 3000 && scrollYPosition <= 4350 && pageWidth >= 1280)
    || (pageWidth >= 768 && pageWidth < 1280
      && scrollYPosition >= 2200 && scrollYPosition <= 3400)
    || (pageWidth < 768 && scrollYPosition >= 1700 && scrollYPosition <= 3000);

  if (mainAboutCreatorsScroll) {
    animationMainIngredients[0].classList.add(
      'animation__main__ingredients--side-info',
    );

    animationMainIngredients[1].classList.add(
      'animation__main__ingredients--text-info',
    );

    animationMainIngredients[2].classList.add(
      'animation__main__ingredients--image-info',
    );

    animationMainIngredients[3].classList.add(
      'animation__main__ingredients--text-info',
    );

    mainIngredientsItems.forEach(shopItem => {
      shopItem.classList.add('animation__main__ingredients__content--item');
    });
  }
}

function addMainBenefitsAnimation() {
  const mainBenefitsScroll
    = (scrollYPosition >= 3600 && scrollYPosition <= 4800 && pageWidth >= 1280)
    || (pageWidth >= 768 && pageWidth < 1280
      && scrollYPosition >= 2700 && scrollYPosition <= 3650)
    || (pageWidth < 768 && scrollYPosition >= 2350 && scrollYPosition <= 3550);

  if (mainBenefitsScroll) {
    mainBenefitsItems.forEach(benefitItem => benefitItem
      .classList.add('animation__main__benefits--item'));
  }
}

function addMainContactAnimation() {
  const mainContentScroll
    = (scrollYPosition >= 3950 && pageWidth >= 1280)
    || (pageWidth >= 768 && pageWidth < 1280 && scrollYPosition >= 3000)
    || (pageWidth < 768 && scrollYPosition >= 2900);

  if (mainContentScroll) {
    animationMainContact[0].classList.add(
      'animation__main__contact--side-info',
    );

    animationMainContact[1].classList.add(
      'animation__main__contact--text-info',
    );

    animationMainContact[2].classList.add(
      'animation__main__contact--image-info',
    );

    mainContactFormInputs.forEach(formItem => {
      formItem.classList.add('animation__main__contact--form');
    });
  }
}

function addFooterAnimation() {
  const footerScroll
    = (scrollYPosition >= 4700 && pageWidth >= 1280)
    || (pageWidth >= 768 && pageWidth < 1280 && scrollYPosition >= 3550)
    || (pageWidth < 768 && scrollYPosition >= 3450);

  if (footerScroll) {
    animationFooter[0].classList.add(
      'animation__footer--navigation',
    );

    animationFooter[1].classList.add(
      'animation__footer--social',
    );

    animationFooter[2].classList.add(
      'animation__footer--contact',
    );

    animationFooter[3].classList.add(
      'animation__footer--copyright',
    );
  }
};

document.addEventListener('scroll', () => {
  scrollYPosition = window.scrollY || document.documentElement.scrollTop;

  addMainChooseAnimation();
  addMainAboutProductAnimation();
  addMainShopAnimation();
  addMainAboutCreatorsAnimation();
  addMainIngredientsAnimation();
  addMainBenefitsAnimation();
  addMainContactAnimation();
  addFooterAnimation();

  if (document.documentElement.clientWidth !== pageWidth) {
    pageWidth = document.documentElement.clientWidth;

    shopGenerate();
  }
});

addMainChooseAnimation();
addMainAboutProductAnimation();
addMainShopAnimation();
shopGenerate();
addMainAboutCreatorsAnimation();
addMainIngredientsAnimation();
addMainBenefitsAnimation();
addMainContactAnimation();
addFooterAnimation();
