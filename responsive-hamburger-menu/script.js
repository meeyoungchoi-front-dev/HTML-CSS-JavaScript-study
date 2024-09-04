const mobileMenu = document.getElementById('mobile-menu');
const sidebar = document.getElementById('sidebar');

mobileMenu.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});
