document.addEventListener('DOMContentLoaded', function () {
  // AOS Animation
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
  });

  // Mobile Nav Toggle
  const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
  const navmenu = document.querySelector('.navmenu ul');
  if (mobileNavToggle) {
    mobileNavToggle.addEventListener('click', function () {
      navmenu.classList.toggle('show');
    });
  }

  // Scroll to anchor
  document.querySelectorAll('.scrollto').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });

  // Scroll Top Button
  const scrollTop = document.getElementById('scroll-top');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollTop.classList.add('visible');
    } else {
      scrollTop.classList.remove('visible');
    }
  });

  // Close mobile menu on click
  document.querySelectorAll('.navmenu a').forEach(link => {
    link.addEventListener('click', () => {
      if (navmenu.classList.contains('show')) {
        navmenu.classList.remove('show');
      }
    });
  });
});
