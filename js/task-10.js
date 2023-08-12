function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const amountEl = document.querySelector("#controls input");
const createEl = document.querySelector("[data-create]");
const destroyEl = document.querySelector("[data-destroy]");
const boxesEl = document.querySelector("#boxes");

function createBoxes(amount) {
  let text = "";
  let blockWidth = 30;
  let blockHeight = 30;

  const inputMin = parseInt(amountEl.getAttribute("min"));
  const inputMax = parseInt(amountEl.getAttribute("max"));
  const inputStep = parseInt(amountEl.getAttribute("step"));

  if (amount < inputMin || amount > inputMax) {
    alert("Amout should be between 1 and 100");
  } else {
    for (let i = 0; i < amount; i += inputStep) {
      console.log(amount);
      text += `<div style="height:${blockHeight}px; width:${blockWidth}px; background:${getRandomHexColor()}"></div>`;
      blockHeight += 10;
      blockWidth += 10;
    }
    boxesEl.insertAdjacentHTML("beforeend", text);
  }
}

createEl.addEventListener("click", () => {
  const amount = amountEl.value;
  createBoxes(amount);
});

destroyEl.addEventListener("click", () => {
  boxesEl.innerHTML = "";
  amountEl.value = "";
});
