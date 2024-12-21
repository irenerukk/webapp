// script.js
const customCursor = document.querySelector(".custom-cursor");

document.addEventListener("mousemove", (event) => {
  const { clientX, clientY } = event;
  customCursor.style.left = `${clientX}px`;
  customCursor.style.top = `${clientY}px`;
});

// Deshabilitar arrastre para todas las imágenes en la página
document.querySelectorAll("img").forEach((img) => {
  img.addEventListener("dragstart", (event) => {
    event.preventDefault(); // Prevenir el evento dragstart
  });
});
document.querySelectorAll("img").forEach((img) => {
  img.addEventListener("contextmenu", (event) => {
    event.preventDefault(); // Prevenir el clic derecho
  });
});
