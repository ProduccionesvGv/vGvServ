document.addEventListener('DOMContentLoaded', function () {
  // Modal al hacer clic en imágenes
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

      if (img.dataset.price) {
        const li = document.createElement('li');
        li.innerHTML = `<strong>Precio:</strong> ${img.dataset.price}`;
        ul.appendChild(li);
      }

      const modal = document.getElementById('image-modal');
      modal.style.display = 'block';
      modal.querySelector('.modal-content').classList.add('modal-slide-in');
    });
  });

  const closeBtn = document.querySelector('.close-button');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      const modal = document.getElementById('image-modal');
      modal.style.display = 'none';
      modal.querySelector('.modal-content').classList.remove('modal-slide-in');
    });
  }

  window.addEventListener('click', (event) => {
    const modal = document.getElementById('image-modal');
    if (event.target === modal) {
      modal.style.display = 'none';
      modal.querySelector('.modal-content').classList.remove('modal-slide-in');
    }
  });

  // Animación personalizada al hacer scroll
  const servicios = document.querySelectorAll('.servicio');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // solo una vez
      }
    });
  }, {
    threshold: 0.2
  });

  servicios.forEach(servicio => observer.observe(servicio));
});