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

  // Attach toggle button event
  const menuToggle = document.getElementById('menuToggle');
  const sidebar = document.getElementById('sidebar');

  // Listen for clicking of menu button
  menuToggle?.addEventListener('click', () => {
    sidebar?.classList.toggle('show');
  });

  // Load menu
  fetch('/resume-site/menu.html')
    .then(response => response.text())
    .then(html => {
      document.getElementById('sidebar').innerHTML = html;

    // Create function to find sidebar links for where ever you are in the website
    const links = sidebar.querySelectorAll('a[data-page]');
    links.forEach(link => {
      const page = link.getAttribute('data-page');
      link.setAttribute('href', new URL(page, window.location.origin + '/resume-site/').pathname);
    });
  })
  .catch(error => console.error('Failed to load menu:', error));

});
