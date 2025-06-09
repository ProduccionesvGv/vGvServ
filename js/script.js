
document.addEventListener('DOMContentLoaded', function () {
  // Asegurar que el modal inicia oculto
  const imageModal = document.getElementById('image-modal');
  if (imageModal) {
    imageModal.style.display = 'none';
    document.body.style.overflow = '';
  }

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
        li.innerHTML = `<strong>Precio:</strong> ${img.dataset.price}`;
        ul.appendChild(li);
      }

      imageModal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
      imageModal.querySelector('.modal-content').classList.add('modal-slide-in');
    });
  });

  document.querySelector('.close-button').addEventListener('click', () => {
    imageModal.style.display = 'none';
    imageModal.querySelector('.modal-content').classList.remove('modal-slide-in');
    document.body.style.overflow = '';
  });

  window.addEventListener('click', (event) => {
    if (event.target === imageModal) {
      imageModal.style.display = 'none';
      imageModal.querySelector('.modal-content').classList.remove('modal-slide-in');
      document.body.style.overflow = '';
    }
  });

  // Lift automático para móviles
  if (window.innerWidth <= 768) {
    const imgs = document.querySelectorAll('.servicio img');
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.classList.add('lift-once');
          setTimeout(() => {
            img.classList.remove('lift-once');
          }, 1000);
          obs.unobserve(img);
        }
      });
    }, {
      root: null,
      rootMargin: '0px 0px -100px 0px',
      threshold: 0.1
    });
    imgs.forEach(img => observer.observe(img));
  }

  // Reset transform al terminar la animación
  document.addEventListener('animationend', function (e) {
    if (e.target.classList.contains('lift-once')) {
      e.target.style.transform = 'none';
      e.target.style.boxShadow = 'none';
    }
  });
});
