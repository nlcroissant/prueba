document.addEventListener('DOMContentLoaded', () => {
  const themeToggleButton = document.getElementById('theme-toggle-button');
  const bodyElement = document.body;

  // Function to apply the saved theme or default to light
  const applyTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      bodyElement.classList.add('dark-mode');
    } else {
      bodyElement.classList.remove('dark-mode'); // Ensure light mode if no preference or preference is 'light'
    }
  };

  // Apply theme on initial load
  applyTheme();

  // Add event listener to the toggle button
  if (themeToggleButton) {
    themeToggleButton.addEventListener('click', () => {
      bodyElement.classList.toggle('dark-mode');

      if (bodyElement.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
      } else {
        localStorage.setItem('theme', 'light');
      }
    });
  }
});
