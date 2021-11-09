'use strict';

const iconMenu = document.querySelector(".icon-menu");
const menu = document.querySelector(".menu");
const body = document.querySelector("body");
const navLinks = document.querySelectorAll('.menu__link');

iconMenu.addEventListener("click", function (e) {
  iconMenu.classList.toggle("active");
  menu.classList.toggle("active");
  body.classList.toggle("lock");
})

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    iconMenu.classList.remove('active');
    menu.classList.remove('active');
    body.classList.remove('lock');
  })
});

// Tabs
const tabs = document.querySelectorAll(".tabs");

for (let i = 0; i < tabs.length; i++) {
  const tab = tabs[i];
  const tabs_items = tab.querySelectorAll(".tabs-item");
  const tabs_blocks = tab.querySelectorAll(".tabs-block");

  for (let j = 0; j < tabs_items.length; j++) {
    const tabs_item = tabs_items[j];

    tabs_item.addEventListener("click", function (e) {
      e.preventDefault();

      for (let k = 0; k < tabs_items.length; k++) {
        tabs_items[k].classList.remove('active');
        tabs_blocks[k].classList.remove('active');
      }

      tabs_item.classList.add('active');
      tabs_blocks[j].classList.add('active');
    });
  }
}
