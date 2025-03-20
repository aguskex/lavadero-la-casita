// scroll-to-top.js

document.addEventListener("DOMContentLoaded", function() {
    const scrollToTopButton = document.querySelector('.scroll-to-top');
  
    // Mostrar u ocultar el botón basado en el scroll
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        scrollToTopButton.style.display = 'flex';
      } else {
        scrollToTopButton.style.display = 'none';
      }
    });
  
    // Scroll suave al hacer clic en el botón
    scrollToTopButton.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });