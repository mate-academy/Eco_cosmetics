document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('message-form');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    form.reset();

    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
