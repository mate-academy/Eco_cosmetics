'use strict';

document.addEventListener("DOMContentLoaded", () => {
	document.querySelector('.wrapper').classList.add('loaded');
});

const iconMenu = document.querySelector(".icon-menu");
const menu = document.querySelector(".menu");
const body = document.querySelector("body");

const navLinks = document.querySelectorAll('.nav__link');

iconMenu.addEventListener("click", function (e) {
	iconMenu.classList.toggle("active");
	menu.classList.toggle("active");
	body.classList.toggle("lock");
})

// navLinks.forEach((link) => {
// 	link.addEventListener('click', () => {
// 		iconMenu.classList.remove('_active');
// 		menuBody.classList.remove('_active');
// 		body.classList.remove('_lock');
// 	})
// });
