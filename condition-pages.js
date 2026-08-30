const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const primaryNavigation = document.getElementById('primary-navigation');
const conditionsDropdown = document.querySelector('.dropdown');
const conditionsToggle = document.querySelector('.dropdown-toggle');

mobileMenuToggle.addEventListener('click', () => {
  const isOpen = primaryNavigation.classList.toggle('open');
  mobileMenuToggle.setAttribute('aria-expanded', isOpen);
});

conditionsToggle.addEventListener('click', () => {
  if (window.innerWidth <= 900) {
    const isOpen = conditionsDropdown.classList.toggle('open');
    conditionsToggle.setAttribute('aria-expanded', isOpen);
  }
});
