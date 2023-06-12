'use strict';

const buttons = document.querySelectorAll('.skills-button');
const skills = document.getElementById('Skills');
const line = document.getElementById('lineSkills');
const container = document.getElementById('container');
const lineSkills2 = document.getElementById('lineSkills2');

buttons.forEach(function(button) {
  button.addEventListener('click', () => {
    skills.style.transform = 'translate(0, -90%)';
    skills.style.transition = 'all 0.5s';
    skills.style.visibility = 'visible';
    line.style.visibility = 'hidden';
    container.style.transform = 'translateX(0)';
    container.style.marginTop = '300px';
    lineSkills2.style.marginTop = '800px';

    if (window.matchMedia('(max-width: 900px)').matches) {
      container.style.marginTop = '600px';
      skills.style.marginTop = '400px';
      lineSkills2.style.marginTop = '300px';
    }

    if (window.matchMedia('(max-width: 500px)').matches) {
      container.style.marginTop = '900px';
      lineSkills2.style.marginTop = '300px';
      skills.style.marginTop = '800px';
    }

    if (window.matchMedia('(max-width: 400px)').matches) {
      container.style.marginTop = '900px';
    }
  });
});
