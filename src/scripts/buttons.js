document.querySelector('.header__content-button').onclick = function () {
  const target = document.getElementById('shop');
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
};

document.querySelector('.creators__button').onclick = function () {
  const target = document.getElementById('contact');
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
};
