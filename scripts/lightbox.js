// Lightbox simples para a galeria
document.addEventListener('DOMContentLoaded', function () {
  const items = Array.from(document.querySelectorAll('.gallery-item'));
  const lb = document.getElementById('lightbox');
  const lbImage = document.getElementById('lightbox-image');
  const lbCaption = document.getElementById('lightbox-caption');
  const btnClose = document.querySelector('.lb-close');
  const btnPrev = document.querySelector('.lb-prev');
  const btnNext = document.querySelector('.lb-next');

  let currentIndex = -1;

  function openLightbox(index) {
    const item = items[index];
    if (!item) return;
    const full = item.getAttribute('data-full') || item.src;
    lbImage.src = full;
    lbImage.alt = item.alt || '';
    lbCaption.textContent = item.alt || '';
    lb.setAttribute('aria-hidden', 'false');
    currentIndex = index;
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lb.setAttribute('aria-hidden', 'true');
    lbImage.src = '';
    currentIndex = -1;
    document.body.style.overflow = '';
  }

  function showNext(delta) {
    if (currentIndex < 0) return;
    let next = (currentIndex + delta + items.length) % items.length;
    openLightbox(next);
  }

  items.forEach((el, i) => {
    el.addEventListener('click', () => openLightbox(i));
    el.addEventListener('keydown', (ev) => {
      if (ev.key === 'Enter' || ev.key === ' ') {
        ev.preventDefault();
        openLightbox(i);
      }
    });
    el.setAttribute('tabindex', '0');
  });

  btnClose.addEventListener('click', closeLightbox);
  btnPrev.addEventListener('click', () => showNext(-1));
  btnNext.addEventListener('click', () => showNext(1));

  document.addEventListener('keydown', (ev) => {
    if (lb.getAttribute('aria-hidden') === 'false') {
      if (ev.key === 'Escape') closeLightbox();
      if (ev.key === 'ArrowRight') showNext(1);
      if (ev.key === 'ArrowLeft') showNext(-1);
    }
  });

  lb.addEventListener('click', (e) => {
    if (e.target === lb) closeLightbox();
  });
});