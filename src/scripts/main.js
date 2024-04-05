'use strict';

const addedContent1 = document.querySelector('.about-brand__added-content');
const addedText1 = addedContent1.querySelector('.about-brand__added-text');
const learnMore1 = addedContent1.querySelector('.about-brand__learnMore');

learnMore1.addEventListener('click', () => {
  addedText1.classList.toggle('about-brand__added-text--active');
});

const addedContent2 = document.querySelector('.about-creators__added-content');
const addedText2 = addedContent2.querySelector('.about-creators__added-text');
const learnMore2 = addedContent2.querySelector('.about-creators__learnMore');

learnMore2.addEventListener('click', () => {
  addedText2.classList.toggle('about-creators__added-text--active');
});

const addedContent3 = document.querySelector('.tooth-powder__added-content');
const addedText3 = addedContent3.querySelector('.tooth-powder__added-text');
const learnMore3 = addedContent3.querySelector('.tooth-powder__learnMore');

learnMore3.addEventListener('click', () => {
  addedText3.classList.toggle('tooth-powder__added-text--active');
});

const phoneInput = document.getElementById('phone-input');

phoneInput.addEventListener('focus', function() {
  phoneInput.placeholder = 'Please use format: xxx-xxx-xxxx';
});

phoneInput.addEventListener('blur', function() {
  phoneInput.placeholder = 'Phone Number';
});
