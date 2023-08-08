const sizeControlEl = document.querySelector("input#font-size-control");
const spanTextEl = document.querySelector("span#text");

sizeControlEl.addEventListener("input", () => {
  console.log(sizeControlEl.value);
  spanTextEl.style.fontSize = `${sizeControlEl.value}px`;
});
