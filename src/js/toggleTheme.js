function setTheme(theme) {
    if (theme === 'dark') {
      document.body.setAttribute('data-bs-theme', 'dark');
    } else if (theme === 'light') {
      document.body.setAttribute('data-bs-theme', 'light');
    } else {
      const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (userPrefersDark) {
        document.body.setAttribute('data-bs-theme', 'dark');
      } else {
        document.body.setAttribute('data-bs-theme', 'light');
      }
    }
  }

  document.getElementById('lightMode').addEventListener('click', function() {
    setTheme('light');
  });

  document.getElementById('darkMode').addEventListener('click', function() {
    setTheme('dark');
  });

  document.getElementById('systemMode').addEventListener('click', function() {
    setTheme('system');
  });

  setTheme('system');