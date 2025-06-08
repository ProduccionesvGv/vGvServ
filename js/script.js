
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.modal-trigger').forEach(img => {
    img.addEventListener('click', () => {
      document.getElementById('modal-title').textContent = img.dataset.title;

      const ul = document.getElementById('modal-description-list');
      ul.innerHTML = "";
      const items = img.dataset.description.split(/\.\s*/);
      items.forEach(text => {
        if (text.trim()) {
          const li = document.createElement('li');
          li.textContent = text.trim();
          ul.appendChild(li);
        }
      });

      // Añadir precio al final
      if (img.dataset.price) {
        const li = document.createElement('li');
        li.className = "precio-final";
        li.textContent = `Precio: ${img.dataset.price}`;
        ul.appendChild(li);
      }

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
