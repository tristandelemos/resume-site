document.addEventListener('DOMContentLoaded', () => {
  
  // Dark Mode Toggle
  const toggle = document.getElementById('darkModeToggle');
  const body = document.body;

  // Load saved theme
  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
  }

  toggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Save preference
    if (body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  });

  // fetch allows for sidebar menu to be dynamically loaded for each page
  fetch('/resume-site/pages/menu.html')  
    .then(response => response.text()) 
    .then(html => {
      document.getElementById('menu').innerHTML = html;
    

    // Side bar Toggle
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');

    menuToggle?.addEventListener('click', () => {
      sidebar?.classList.toggle('show');
    });
  });
  
  
});
