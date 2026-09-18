
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
