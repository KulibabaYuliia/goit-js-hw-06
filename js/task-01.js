const listEl = document.querySelectorAll("li.item");
console.log(`Number of categories: ${listEl.length}`);

listEl.forEach((element) => {
  console.log(`Category: ${element.querySelector("h2").textContent}`);
  console.log(`Elements: ${element.querySelectorAll("ul li").length}`);
});
