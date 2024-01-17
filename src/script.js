document.addEventListener('DOMContentLoaded', function() {
  const labelChars = document.querySelectorAll('.label-char');

  labelChars.forEach((char, index) => {
    char.classList.add(`index-${index}`);
  });
});

// document.addEventListener('DOMContentLoaded', function() {
//   const menu = document.querySelector('.shop__list');
//   const cards = document.querySelectorAll('.shop__content--card');

//   menu.addEventListener('click', function(event) {
//     event.preventDefault();

//     const clickedLink = event.target;
//     const cardCategory = clickedLink.dataset.category;

//     if (cardCategory) {
//       cards.forEach(card => {
//         card.style.display = 'none';
//       });

//       const selectedCards = document.querySelectorAll
// (`.shop__content--card[data-category="${cardCategory}"]`);

//       if (selectedCards.length > 0) {
//         selectedCards.forEach(card => {
//           card.style.display = 'block';
//         });
//       }
//     }
//   });
// });

document.addEventListener('DOMContentLoaded', function() {
  const menu = document.querySelector('.shop__list');
  const cards = document.querySelectorAll('.shop__content--card');
  const showAllButton = document.querySelector('.shop__button');

  function showCards(cardCategory) {
    cards.forEach(card => {
      card.style.display = 'none';
    });

    const selectedCards = document.querySelectorAll(`.shop__content--card[data-category="${cardCategory}"]`);

    if (selectedCards.length > 0) {
      selectedCards.forEach(card => {
        card.style.display = 'block';
      });
    }
  }

  showCards('face');

  menu.addEventListener('click', function(event) {
    event.preventDefault();

    const clickedLink = event.target;
    const cardCategory = clickedLink.dataset.category;

    if (cardCategory) {
      showCards(cardCategory);
    }
  });

  if (showAllButton) {
    showAllButton.addEventListener('click', function(event) {
      event.preventDefault();

      cards.forEach(card => {
        card.style.display = 'block';
      });

      showAllButton.style.display = 'none';
    });
  }
});
