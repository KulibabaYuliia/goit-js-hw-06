function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.querySelector("body");
const changeColorButton = bodyEl.querySelector(".change-color");
const colorEl = bodyEl.querySelector(".color");

changeColorButton.addEventListener("click", (event) => {
  colorEl.textContent = getRandomHexColor();
  bodyEl.style.backgroundColor = getRandomHexColor();
});
