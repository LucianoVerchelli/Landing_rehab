// Botón hamburguesa
const navToggle = document.querySelector(".nav-toggle");

// El <nav> que vamos a mostrar/ocultar
const mobileNav = document.getElementById("mobileNav");

// Toggle del menú
navToggle.addEventListener("click", () => {
    mobileNav.classList.toggle("active");
});

const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach((btn) => {
    btn.addEventListener('click', () => {
        const answer = btn.nextElementSibling;
        const icon = btn.querySelector('.faq-icon');

        // Cerrar otros abiertos
        document.querySelectorAll('.faq-answer').forEach((other) => {
            if (other !== answer) {
                other.style.maxHeight = null;
                other.previousElementSibling.querySelector('.faq-icon').textContent = '+';
            }
        });

        // Toggle del seleccionado
        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
            icon.textContent = '+';
        } else {
            answer.style.maxHeight = answer.scrollHeight + "px";
            icon.textContent = '-';
        }
    });
});