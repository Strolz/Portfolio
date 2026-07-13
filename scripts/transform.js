// After typing animation finishes
setTimeout(() => {
  document.getElementById('about').classList.add('show');
}, 3000); // slight pause after typing

// Then show projects
setTimeout(() => {
  document.getElementById('projects').classList.add('show');
}, 5500); // 5 seconds later
