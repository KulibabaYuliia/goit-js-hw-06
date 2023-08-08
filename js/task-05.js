const inputEl = document.querySelector("#name-input");
const ouputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", (event) => {
  ouputEl.textContent = event.currentTarget.value;
  if (ouputEl.textContent === "") {
    ouputEl.textContent = "Anonymus";
  }
});
