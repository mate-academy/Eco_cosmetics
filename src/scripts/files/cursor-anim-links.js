'use strict';

export const cursorAnimLinks = document.querySelectorAll(`[data-hover-link="${true}"]`);

cursorAnimLinks.forEach((elem) => {
  function getCursorPosition(event) {
    let x = 'center';
    const elemWidth = event.target.clientWidth;
    const cursor = event.offsetX;

    if (cursor < elemWidth * 0.33) {
      x = 'left';
    } else if (cursor >  elemWidth * 0.33 && cursor < elemWidth * 0.667) {
      x = 'center';
    } else if (cursor > elemWidth * 0.667) {
      x = 'right';
    }

    elem.style.setProperty('--x', x);
  }

  elem.addEventListener('mouseenter', function(e) {
    getCursorPosition(e);
  });

  elem.addEventListener('mouseleave', function(e) {
    getCursorPosition(e);
  });
})
