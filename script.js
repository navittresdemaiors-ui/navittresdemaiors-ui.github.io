// Script simples para galeria modal, menu e atualização de ano
document.addEventListener('DOMContentLoaded', function(){
  // Ano no footer
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // Galeria modal
  const imgs = document.querySelectorAll('.gallery-grid img');
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  const modalClose = document.getElementById('modal-close');

  function openModal(src, alt){
    modalImg.src = src;
    modalImg.alt = alt || '';
    modal.setAttribute('aria-hidden','false');
    document.body.style.overflow = 'hidden';
    modalClose.focus();
  }
  function closeModal(){
    modal.setAttribute('aria-hidden','true');
    modalImg.src = '';
    document.body.style.overflow = '';
  }

  imgs.forEach(img=>{
    img.addEventListener('click', ()=> openModal(img.src, img.alt));
    img.addEventListener('keydown', (e)=> {
      if(e.key === 'Enter' || e.key === ' ') { openModal(img.src, img.alt); e.preventDefault(); }
    });
  });

  if(modalClose){
    modalClose.addEventListener('click', closeModal);
  }
  if(modal){
    modal.addEventListener('click', (e)=> {
      if(e.target === modal) closeModal();
    });
  }

  document.addEventListener('keydown', (e)=> {
    if(e.key === 'Escape' && modal && modal.getAttribute('aria-hidden') === 'false') closeModal();
  });

  // Mobile menu toggle (simples)
  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  if(menuToggle){
    menuToggle.addEventListener('click', ()=>{
      const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!expanded));
      if(mainNav) mainNav.style.display = expanded ? 'none' : 'flex';
    });
  }
});
