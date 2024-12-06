'use strict';

function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('visible');
}

const links = document.querySelectorAll('.shop__tab_list_link-item');

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function () {

    for (let item = 0; item < links.length; item++) {
      links[i].classList.remove('active');
    }

    this.classList.add('active');
  });
}
