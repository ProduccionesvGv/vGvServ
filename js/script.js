
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.modal-trigger').forEach(img => {
    img.addEventListener('click', () => {
      document.getElementById('modal-title').textContent = img.dataset.title;
      document.getElementById('modal-description').textContent = img.dataset.description;
      const modal = document.getElementById('image-modal');
      modal.style.display = 'block';
      modal.querySelector('.modal-content').classList.add('modal-slide-in');
    });
  });

  document.querySelector('.close-button').addEventListener('click', () => {
    const modal = document.getElementById('image-modal');
    modal.style.display = 'none';
    modal.querySelector('.modal-content').classList.remove('modal-slide-in');
  });

  window.addEventListener('click', (event) => {
    const modal = document.getElementById('image-modal');
    if (event.target === modal) {
      modal.style.display = 'none';
      modal.querySelector('.modal-content').classList.remove('modal-slide-in');
    }
  });
});
