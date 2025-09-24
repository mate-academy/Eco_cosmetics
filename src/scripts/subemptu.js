document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('message__form');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = form.querySelector('input[name="name"]').value.trim();
    const email = form.querySelector('input[name="email"]').value.trim();
    message = form.querySelector('number[name="phone"]').value.trim();
    const message = form.querySelector('textarea[name="message"]').value.trim();

    if (!name || !email || !phone || !message) {
      alert('Please fill in all required fields!');
      return;
    }

    form.reset();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
