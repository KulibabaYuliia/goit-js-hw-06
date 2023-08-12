const listEl = document.querySelector("#categories");
const listArrayEl = Array.from(listEl.children);

console.log(`Number of categories: ${listArrayEl.length}`);

listArrayEl.forEach((element) => {
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.lastElementChild.children.length}`);
});
