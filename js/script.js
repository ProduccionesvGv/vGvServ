
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.modal-trigger').forEach(img => {

  // Asegurar que el modal inicia oculto
  const imageModal = document.getElementById('image-modal');
  if (imageModal) {
    imageModal.style.display = 'none';
    document.body.style.overflow = '';
  }
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

      const modal = document.getElementById('image-modal');
      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden';;
      modal.querySelector('.modal-content').classList.add('modal-slide-in');
    });
  });

  document.querySelector('.close-button').addEventListener('click', () => {
    const modal = document.getElementById('image-modal');
    modal.style.display = 'none';
    modal.querySelector('.modal-content').classList.remove('modal-slide-in');
      document.body.style.overflow = '';
  });

  window.addEventListener('click', (event) => {
    const modal = document.getElementById('image-modal');
    if (event.target === modal) {
      modal.style.display = 'none';
      modal.querySelector('.modal-content').classList.remove('modal-slide-in');
      document.body.style.overflow = '';
    }
  });
});

// Efecto lift automático en móviles
if (window.innerWidth <= 768) {
  document.addEventListener('DOMContentLoaded', () => {
    const imgs = document.querySelectorAll('.servicio img');
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('lift-animation');
          obs.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: '0px 0px -100px 0px',
      threshold: 0.1
    });
    imgs.forEach(img => observer.observe(img));
  });
}


// Animación lift temporal al hacer scroll (más notorio)
if (window.innerWidth <= 768) {
  document.addEventListener('DOMContentLoaded', () => {
    const imgs = document.querySelectorAll('.servicio img');
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('lift-once');
          setTimeout(() => {
            entry.target.classList.remove('lift-once');
          }, 1300);
          obs.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: '0px 0px -100px 0px',
      threshold: 0.1
    });
    imgs.forEach(img => observer.observe(img));
  });
}


// Animación lift temporal corregida (una sola vez)
document.addEventListener('DOMContentLoaded', () => {
  if (window.innerWidth <= 768) {
    const imgs = document.querySelectorAll('.servicio img');
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.classList.add('lift-once');
          setTimeout(() => {
            img.classList.remove('lift-once');
          }, 1200);
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
});

// Garantizar que el transform se resetee al final de la animación
document.addEventListener('animationend', function (e) {
  if (e.target.classList.contains('lift-once')) {
    e.target.style.transform = 'none';
    e.target.style.boxShadow = 'none';
  }
});
