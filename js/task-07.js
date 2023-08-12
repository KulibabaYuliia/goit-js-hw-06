const sizeControlEl = document.querySelector("input#font-size-control");
const spanTextEl = document.querySelector("span#text");

sizeControlEl.addEventListener("input", onInputHandler);

function onInputHandler() {
  spanTextEl.style.fontSize = `${sizeControlEl.value}px`;
}

onInputHandler();
