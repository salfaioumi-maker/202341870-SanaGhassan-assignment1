
// Run these setup functions as soon as the HTML page finishes loading
document.addEventListener('DOMContentLoaded', () => {
  setFooterYear();
  setGreeting();
  initThemeToggle();
  initContactForm();
});


// Automatically update the copyright year in the footer so it never goes out of date
function setFooterYear() {
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}


// Display a dynamic greeting (morning, afternoon, etc.) based on the visitor's local time
function setGreeting() {
  const greetingEl = document.getElementById('greeting');
  if (!greetingEl) return;

  const hour = new Date().getHours();
  let greeting = 'Hello';

  if (hour < 5) {
    greeting = 'Still up late';
  } else if (hour < 12) {
    greeting = 'Good morning';
  } else if (hour < 18) {
    greeting = 'Good afternoon';
  } else {
    greeting = 'Good evening';
  }

  greetingEl.textContent = greeting;
}

// Enable the dark/light mode toggle and remember the user's preference

function initThemeToggle() {
  const toggleBtn = document.getElementById('themeToggle');
  const label = toggleBtn?.querySelector('.theme-toggle__label');
  const icon = toggleBtn?.querySelector('.theme-toggle__icon');
  if (!toggleBtn) return;

  const storedTheme = localStorage.getItem('portfolio-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = storedTheme || (prefersDark ? 'dark' : 'light');

  applyTheme(initialTheme);

  toggleBtn.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const nextTheme = isDark ? 'light' : 'dark';
    applyTheme(nextTheme);
    localStorage.setItem('portfolio-theme', nextTheme);
  });

  function applyTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      toggleBtn.setAttribute('aria-pressed', 'true');
      if (icon) icon.textContent = '☀';
      if (label) label.textContent = 'Light mode';
    } else {
      document.documentElement.removeAttribute('data-theme');
      toggleBtn.setAttribute('aria-pressed', 'false');
      if (icon) icon.textContent = '☾';
      if (label) label.textContent = 'Dark mode';
    }
  }
}
