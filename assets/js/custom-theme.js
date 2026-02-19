/**
 * Custom Theme Toggle - Mario García Terrazas
 * Modo Oscuro / Claro con persistencia en localStorage
 */

document.addEventListener('DOMContentLoaded', function() {
  
  // Verificar si ya existe una preferencia guardada
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Aplicar tema guardado o preferencia del sistema
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.body.classList.add('dark-mode');
  }
  
  // Función para toggle del tema
  window.toggleTheme = function() {
    document.body.classList.toggle('dark-mode');
    
    // Guardar preferencia
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  };
  
  // Smooth scroll para navegación interna
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#' && document.querySelector(href)) {
        e.preventDefault();
        document.querySelector(href).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
});
