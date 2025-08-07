// Custom JavaScript for American Star Driving School website
// Collapse navbar on link click when in mobile view
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  const navbarCollapse = document.getElementById('navbarNav');
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (window.getComputedStyle(document.querySelector('.navbar-toggler')).display !== 'none') {
        const collapse = new bootstrap.Collapse(navbarCollapse);
        collapse.hide();
      }
    });
  });
});