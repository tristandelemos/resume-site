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
  
  fetch('project/pages/menu.html')  
    .then(response => response.text()) 
    .then(html => {
      console.log('Menu HTML loaded:', html);

      document.getElementById('sidebar').innerHTML = html;
      
      const sidebar = document.getElementById('sidebar');
      
      console.log('Sidebar innerHTML:', sidebar.innerHTML);
      
      const menuToggle = document.getElementById('menuToggle');

      console.log('menuToggle:', menuToggle);

    // Side bar Toggle
    
    

    menuToggle?.addEventListener('click', () => {
      sidebar?.classList.toggle('show');
    });
  });
  
  
});
