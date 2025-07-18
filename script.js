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

  // Load menu
  fetch('project/pages/menu.html')
    .then(response => response.text())
    .then(html => {
      // Load into menu container (outside of sidebar)
      document.getElementById('menu-container').innerHTML = html;

      // Add event listener for toggle
      const menuToggle = document.getElementById('menuToggle');
      const sidebar = document.getElementById('sidebar');

      menuToggle?.addEventListener('click', () => {
        sidebar.classList.toggle('show');
      });
    })
    .catch(error => console.error('Failed to load menu:', error));
  
});
