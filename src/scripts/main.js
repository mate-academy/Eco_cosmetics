'use strict';

const username = document.getElementById('name');
// const email = document.getElementById('email');
// const phone = document.getElementById('phone');
// const message = document.getElementById('message');

const form = document.getElementById('form');

// const errorElement = document.getElementById('error');

function checkInputs() {
  const usernameValue = username.value.trim();
  // const emailValue = email.value.trim();
  // const phoneValue= phone.value.trim();
  // const messageValue= message.value.trim();

  if (usernameValue === '') {
    // show error
    // add error class
    setError(username);
  } else {
    // add successful class
    setSuccsess(username);
  }
}

function setError(input) {
  const formInput = document.querySelector('name');

  formInput.className = 'form__input error';
}

function setSuccsess(input) {
  const formInput = document.querySelector('name');

  formInput.className = 'form__input success';
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkInputs();
});

//   const messages = [];

// if (name.value === '' || name.value == null) {
//   messages.push('Fill out the form');
// }

//   if (phone.length < 13) {
//     messages.push('Number must be longer than 13 characters');
//   };

//   if (phone.length >= 14) {
//     messages.push('Number must be less than 14 characters');
//   };

//   if (messages.length > 0) {
//     e.preventDefault();

//     errorElement.innerHTML = messages.join(', ');
//   }
