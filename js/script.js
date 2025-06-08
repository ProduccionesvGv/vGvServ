document.getElementById('form-contacto').addEventListener('submit', function (e) {
  e.preventDefault();
  alert("Mensaje enviado correctamente. Nos pondremos en contacto pronto.");
  this.reset();
});


document.querySelectorAll('.modal-trigger').forEach(img => {
  img.addEventListener('click', () => {
    document.getElementById('modal-title').textContent = img.dataset.title;
    document.getElementById('modal-description').textContent = img.dataset.description;
    document.getElementById('image-modal').style.display = 'block';
  });
});

document.querySelector('.close-button').addEventListener('click', () => {
  document.getElementById('image-modal').style.display = 'none';
});

window.addEventListener('click', (event) => {
  const modal = document.getElementById('image-modal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
