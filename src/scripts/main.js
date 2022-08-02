'use strict';

document.querySelectorAll('a.products__link').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const scrollTop = window.pageYOffset;
    const href = this.getAttribute('href').replace('#', '');
    const el = document.getElementById(href);

    window.scrollTo({
      top: el.getBoundingClientRect().top + scrollTop - 150, behavior: 'smooth',
    });
    el.parentNode.scrollLeft = el.offsetLeft - el.parentNode.offsetLeft;
  });
});

document.querySelectorAll('#form').forEach(form => {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
  });
});
