document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("mobile-menu");
    const navMenu = document.querySelector(".nav-menu");
  
    menuToggle.addEventListener("click", function() {
      navMenu.classList.toggle("active");
    });
  });
  