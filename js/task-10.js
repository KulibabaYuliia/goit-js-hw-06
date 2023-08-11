function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const amountEl = document.querySelector("#controls input");
const createEl = document.querySelector("[data-create]");
const destroyEl = document.querySelector("[data-destroy]");
const boxesEl = document.querySelector("#boxes");

let amount = 0;
amountEl.addEventListener("change", () => {
  amount = amountEl.value;
});

function createBoxes(amount) {
  let text = "";
  let blockWidth = 30;
  let blockHeight = 30;

  for (let i = 1; i <= amount; i += 1) {
    console.log(amount);
    text += `<div style="height:${blockHeight}px; width:${blockWidth}px; background:${getRandomHexColor()}"></div>`;
    blockHeight += 10;
    blockWidth += 10;
  }
  boxesEl.insertAdjacentHTML("afterbegin", text);
}

createEl.addEventListener("click", () => {
  createBoxes(amount);
});

destroyEl.addEventListener("click", () => {
  boxesEl.innerHTML = "";
});
