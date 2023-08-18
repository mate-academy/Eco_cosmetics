'use strict';

import { form } from "./files/form";
import { sliderDots, dotClick } from "./files/slider";
import { scrollAnimItems } from "./files/scroll";
import { cursorAnimLinks } from "./files/cursor-anim-links";

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
     document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
