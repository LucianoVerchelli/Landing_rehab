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

/**
 * Lógica Profesional de Contacto - Rehab Landing
 * Incluye: Validación guiada, SweetAlert2, Regex AR y Prevención de Spam.
 */

document.addEventListener('DOMContentLoaded', () => {
    const contactoForm = document.getElementById('contactoForm');
    const btnEnviar = document.getElementById('btnEnviar');

    if (!contactoForm) return;

    contactoForm.addEventListener('submit', async function (e) {
        e.preventDefault();

        // 1. CAPTURA DE CAMPOS
        const nombre = document.getElementById('nombre');
        const email = document.getElementById('email');
        const telefono = document.getElementById('telefono');
        const mensaje = document.getElementById('mensaje');

        // 2. VALIDACIÓN GUIADA (REEMPLAZA AL REQUIRED)
        
        // Validar Nombre (Mínimo 3 letras, solo texto)
        const nombreRegex = /^[a-zA-ZÀ-ÿ\s]{3,40}$/;
        if (!nombreRegex.test(nombre.value.trim())) {
            return mostrarGuia('Por favor, ingresá tu nombre completo (solo letras, mín. 3).');
        }

        // Validar Email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value.trim())) {
            return mostrarGuia('Necesitamos un email válido para poder responderte.');
        }

        // Validar Teléfono (Formato Argentina)
        const telRegex = /^(?:(?:00)?549?)?0?(?:11|[23]\d{2,3})\d{6,8}$/;
        if (!telRegex.test(telefono.value.trim())) {
            return mostrarGuia('El teléfono parece incorrecto. Ejemplo: 11 1234 5678');
        }

        // Validar Mensaje (Mínimo 10 caracteres)
        if (mensaje.value.trim().length < 10) {
            return mostrarGuia('Por favor, contanos un poco más sobre tu consulta (mín. 10 caracteres).');
        }

        // 3. PROCESO DE ENVÍO (ANTISPAM)
        const originalText = btnEnviar.innerText;
        btnEnviar.disabled = true;
        btnEnviar.innerText = "Enviando...";

        try {
            // Simulación de envío al servidor (puedes reemplazar esto por un fetch a Formspree)
            await new Promise(resolve => setTimeout(resolve, 1500));

            // EXITO
            Swal.fire({
                title: '¡Mensaje enviado!',
                text: 'Gracias por contactarnos. Nos comunicaremos con usted a la brevedad.',
                icon: 'success',
                confirmButtonColor: '#be7dbe',
                background: '#fff',
                backdrop: `rgba(45, 122, 94, 0.3)`
            });

            contactoForm.reset();

        } catch (error) {
            // ERROR DE RED
            Swal.fire({
                title: 'Error',
                text: 'Hubo un problema al enviar el mensaje. Intentá de nuevo más tarde.',
                icon: 'error',
                confirmButtonColor: '#d33'
            });
        } finally {
            // RESTAURAR BOTÓN
            btnEnviar.disabled = false;
            btnEnviar.innerText = originalText;
        }
    });

    // Función auxiliar para mostrar mensajes amigables
    function mostrarGuia(texto) {
        Swal.fire({
            title: 'Falta un detalle',
            text: texto,
            icon: 'info',
            confirmButtonColor: '#be7dbe',
            confirmButtonText: 'Entendido'
        });
    }
});