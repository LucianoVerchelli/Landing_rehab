// Botón hamburguesa
const navToggle = document.querySelector(".nav-toggle");

// mostrar/ocultar el <nav>
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


// animacion quote card y imagen 

// Animación quote card, imagen y texto
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".anim-img, .anim-text, .anim-quote");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { // animamos al entrar en viewport, sin depender del scroll
          entry.target.classList.add("appear");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 } // detecta cuando 10% del elemento entra en viewport
  );

  elements.forEach(el => observer.observe(el));
});