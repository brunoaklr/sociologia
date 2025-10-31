// Animação suave nos botões ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".links a");
  links.forEach((link, i) => {
    link.style.opacity = "0";
    link.style.transform = "translateY(20px)";
    setTimeout(() => {
      link.style.transition = "all 0.6s ease";
      link.style.opacity = "1";
      link.style.transform = "translateY(0)";
    }, i * 200);
  });
});
// script.js - responsável por abrir a janela popup limpa
const formularios = {
    1: { url: "https://forms.gle/EDvSTrgpwWbvuntW7", qr: "https://imgur.com/a/4ZuLl9s.jpeg" },
    2: { url: "https://forms.gle/mHtv7aTRtGkPmpJ48", qr: "https://i.imgur.com/SeuQRCode2.png" },
    3: { url: "https://forms.gle/kV4zPfAh4Du41SFSA", qr: "https://imgur.com/a/mn5wDja.jpeg" },
    4: { url: "https://forms.gle/WjawTjpoMqaars3f9", qr: "https://imgur.com/a/cVyJEPU.jpeg" },
    6: { url: "https://forms.gle/Tr4ksZXMx3HZsZaY9", qr: "https://imgur.com/a/iXV8mda.jpeg" },
    7: { url: "https://forms.gle/ydBttyzuUBU6SLF4A", qr: "https://imgur.com/a/iXV8mda.jpeg" }
};

function abrirFormulario(grupo) {
  // abre popup passando o numero do grupo como query string
  const opts = "toolbar=no,menubar=no,location=no,resizable=yes,scrollbars=yes,width=1000,height=800";
  window.open(`popup.html?grupo=${grupo}`, `_blank`, opts);
}
