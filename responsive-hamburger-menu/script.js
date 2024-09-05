const menuToggle = document.getElementById("mobile-menu");
const sidebar = document.getElementById("sidebar");
const closeBtn = document.getElementById("close-btn");

menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("active"); 
});

closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("active"); 
});
