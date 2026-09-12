// =========================================
// MENÚ MÓVIL
// =========================================

const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");

if (menuButton && nav) {

    menuButton.addEventListener("click", () => {

        nav.classList.toggle("open");

    });


    // Cerrar menú al pulsar un enlace

    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("open");

        });

    });

}


// =========================================
// ENLACES ACTIVOS
// =========================================

const sections = document.querySelectorAll("section[id]");
const links = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    links.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

});


// =========================================
// FORMULARIO
// =========================================

const form = document.querySelector(".contact-form");

if (form) {

    form.addEventListener("submit", () => {

        const button =
            form.querySelector("button");

        if (button) {

            button.textContent =
                "Enviando...";

            button.disabled = true;

        }

    });

}