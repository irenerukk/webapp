// script.js
const customCursor = document.querySelector(".custom-cursor");

document.addEventListener("mousemove", (event) => {
  const { clientX, clientY } = event;
  customCursor.style.left = `${clientX}px`;
  customCursor.style.top = `${clientY}px`;
});
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menu-btn");
  const menuContent = document.querySelector(".menu-content");

  // Alternar la visibilidad del menú al hacer clic en el botón
  menuBtn.addEventListener("click", () => {
    menuContent.style.display =
      menuContent.style.display === "block" ? "none" : "block";
  });

  // Cerrar el menú si se hace clic fuera de él
  window.addEventListener("click", (e) => {
    if (!menuBtn.contains(e.target) && !menuContent.contains(e.target)) {
      menuContent.style.display = "none";
    }
  });
});
