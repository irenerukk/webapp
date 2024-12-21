// script.js
const customCursor = document.querySelector(".custom-cursor");

document.addEventListener("mousemove", (event) => {
  const { clientX, clientY } = event;
  customCursor.style.left = `${clientX}px`;
  customCursor.style.top = `${clientY}px`;
});
