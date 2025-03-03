document.addEventListener('DOMContentLoaded', function() {
  
  const burger = document.querySelector('.burger');
  const navLinks = document.querySelector('.nav-links');
  

  burger.addEventListener('click', () => {
      navLinks.classList.toggle('nav-active');
      burger.classList.toggle('toggle');

      const links = document.querySelectorAll('.nav-links li');
      links.forEach((link, index) => {
          if (link.style.animation) {
              link.style.animation = '';
          } else {
              link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
          }
          link.style.opacity = link.style.animation ? '1' : '0';
      });
  });

  
  document.addEventListener('contextmenu', function(e) {
      e.preventDefault();
  });

  document.querySelectorAll('img').forEach(img => {
      img.addEventListener('contextmenu', function(e) {
          e.preventDefault();
      });
      img.addEventListener('dragstart', function(e) {
          e.preventDefault();
      });
  });

  document.addEventListener('copy', function(e) {
      e.preventDefault();
  });
});