document.getElementById('form-contacto').addEventListener('submit', function (e) {
  e.preventDefault();
  alert("Mensaje enviado correctamente. Nos pondremos en contacto pronto.");
  this.reset();
});
