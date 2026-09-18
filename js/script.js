
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
