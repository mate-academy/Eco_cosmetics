'use strict';

const faceBtn = document.querySelector('.shop__category--face');
const bodyBtn = document.querySelector('.shop__category--body');
const hairBtn = document.querySelector('.shop__category--hair');
const candlesBtn = document.querySelector('.shop__category--candles');
const faceDiv = document.querySelector('.face');
const bodyDiv = document.querySelector('.body');
const hairDiv = document.querySelector('.hair');
const candlesDiv = document.querySelector('.candles');

faceBtn.addEventListener('click', () => {
  faceDiv.classList.remove('unVisiable');
  bodyDiv.classList.remove('visiable');
  hairDiv.classList.remove('visiable');
  candlesDiv.classList.remove('visiable');
});

bodyBtn.addEventListener('click', () => {
  faceDiv.classList.add('unVisiable');
  bodyDiv.classList.add('visiable');
  hairDiv.classList.remove('visiable');
  candlesDiv.classList.remove('visiable');
});

hairBtn.addEventListener('click', () => {
  faceDiv.classList.add('unVisiable');
  bodyDiv.classList.remove('visiable');
  hairDiv.classList.add('visiable');
  candlesDiv.classList.remove('visiable');
});

candlesBtn.addEventListener('click', () => {
  faceDiv.classList.add('unVisiable');
  bodyDiv.classList.remove('visiable');
  hairDiv.classList.remove('visiable');
  candlesDiv.classList.add('visiable');
});
