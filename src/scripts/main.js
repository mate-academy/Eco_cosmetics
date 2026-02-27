'use strict';

function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('visible');
}

const links = document.querySelectorAll('.shop__tab_list_link-item');

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function () {
    // Remove 'active' de todos os links
    for (let item = 0; item < links.length; item++) {
      links[item].classList.remove('active');
    }

    // Adiciona 'active' apenas ao link clicado
    this.classList.add('active');
  });
}
