// Botón hamburguesa
const navToggle = document.querySelector(".nav-toggle");

// El <nav> que vamos a mostrar/ocultar
const mobileNav = document.getElementById("mobileNav");

// Toggle del menú
navToggle.addEventListener("click", () => {
    mobileNav.classList.toggle("active");
});
