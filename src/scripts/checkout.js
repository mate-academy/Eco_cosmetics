'use strict';

document.addEventListener('DOMContentLoaded', () => {
  function nameInput() {
    if (!document.getElementById('full__name').value.match(/[0-9]/)) {
      return true;
    }
  }

  function cityInput() {
    if (!document.getElementById('city').value.match(/[0-9]/)) {
      return true;
    }
  }

  function postalInput() {
    if (!document.getElementById('postal').value.match(/[a-zA-Z]/)) {
      return true;
    }
  }

  function countryInput() {
    if (!document.getElementById('country').value.match(/[0-9]/)) {
      return true;
    }
  }

  function adressInput() {
    if (!document.getElementById('adress').value.match(/[0-9]/)) {
      return true;
    }
  }

  const fullName = document.getElementById('full__name');

  fullName.addEventListener('blur', (e) => {
    e.preventDefault();

    if (nameInput(fullName)) {
      fullName.classList.remove('checkout__input--invalid');
      fullName.classList.add('checkout__input--valid');
    }
  });

  fullName.addEventListener('blur', (e) => {
    e.preventDefault();

    if (!nameInput(fullName)) {
      fullName.classList.add('checkout__input--invalid');
      fullName.classList.remove('checkout__input--valid');
    }
  });

  const city = document.getElementById('city');

  city.addEventListener('blur', (e) => {
    e.preventDefault();

    if (cityInput(city)) {
      city.classList.remove('checkout__input--invalid');
      city.classList.add('checkout__input--valid');
    }
  });

  city.addEventListener('blur', (e) => {
    e.preventDefault();

    if (!cityInput(city)) {
      city.classList.add('checkout__input--invalid');
      city.classList.remove('checkout__input--valid');
    }
  });

  const postal = document.getElementById('postal');

  postal.addEventListener('blur', (e) => {
    e.preventDefault();

    if (postalInput(postal)) {
      postal.classList.remove('checkout__input--invalid');
      postal.classList.add('checkout__input--valid');
    }
  });

  postal.addEventListener('blur', (e) => {
    e.preventDefault();

    if (!postalInput(postal)) {
      postal.classList.add('checkout__input--invalid');
      postal.classList.remove('checkout__input--valid');
    }
  });

  const country = document.getElementById('country');

  country.addEventListener('blur', (e) => {
    e.preventDefault();

    if (countryInput(country)) {
      country.classList.remove('checkout__input--invalid');
      country.classList.add('checkout__input--valid');
    }
  });

  country.addEventListener('blur', (e) => {
    e.preventDefault();

    if (!countryInput(postal)) {
      country.classList.add('checkout__input--invalid');
      country.classList.remove('checkout__input--valid');
    }
  });

  const adress = document.getElementById('adress');

  adress.addEventListener('blur', (e) => {
    e.preventDefault();

    if (adressInput(adress)) {
      adress.classList.remove('checkout__input--invalid');
      adress.classList.add('checkout__input--valid');
    }
  });

  adress.addEventListener('blur', (e) => {
    e.preventDefault();

    if (!adressInput(adress)) {
      adress.classList.add('checkout__input--invalid');
      adress.classList.remove('checkout__input--valid');
    }
  });
});

const icon = document.getElementById('header-burger');
const item1 = document.getElementById('item1');
const item2 = document.getElementById('item2');
const item3 = document.getElementById('item3');

icon.addEventListener('click', () => {
  document.getElementById('menu-container').classList.toggle('menu-opened');
});

item1.addEventListener('click', () => {
  document.getElementById('menu-container').classList.toggle('menu-opened');
});

item2.addEventListener('click', () => {
  document.getElementById('menu-container').classList.toggle('menu-opened');
});

item3.addEventListener('click', () => {
  document.getElementById('menu-container').classList.toggle('menu-opened');
});
