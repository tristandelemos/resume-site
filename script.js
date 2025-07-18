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
  
  // Load menu dynamically
  fetch('project/pages/menu.html')
    .then(response => response.text())
    .then(html => {
      const sidebar = document.getElementById('sidebar');
      sidebar.innerHTML = html;

      // After menu is loaded, attach toggle
      const menuToggle = document.getElementById('menuToggle');
      menuToggle?.addEventListener('click', () => {
        sidebar.classList.toggle('show');
      });
    })
    .catch(error => console.error('Failed to load menu:', error));
  
  
});
