document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const resetButton = document.getElementById("form-reset");

  if (!form || !resetButton) return;

  resetButton.addEventListener("click", function (event) {
    // Se o formulário for inválido, não reseta
    if (!form.checkValidity()) {
      event.preventDefault(); // impede qualquer ação extra
      alert("Por favor, preencha todos os campos corretamente antes de enviar o formulário.");
      return;
    }

    // Se for válido, então reseta
    form.reset();

    // Força os campos a perderem o foco para remover pseudo-classes
    const fields = form.querySelectorAll("input, textarea");
    fields.forEach((field) => {
      field.blur();
    });
  });
});
