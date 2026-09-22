const phone = "555137625272";

function openWhatsApp(message) {
  const text = encodeURIComponent(message);
  window.open(`https://wa.me/${phone}?text=${text}`, "_blank", "noopener,noreferrer");
}

document.querySelectorAll(".whatsapp-link").forEach(link => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const message = link.dataset.message ||
      "Olá! Vim pelo site da Vida Clínica Odontológica e gostaria de agendar uma avaliação.";
    openWhatsApp(message);
  });
});

const menuButton = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");

menuButton?.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
});

document.querySelectorAll(".mobile-menu a:not(.whatsapp-link)").forEach(link => {
  link.addEventListener("click", () => mobileMenu.classList.remove("open"));
});

const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
  header.style.boxShadow = window.scrollY > 20
    ? "0 8px 30px rgba(15,55,52,.06)"
    : "none";
});
