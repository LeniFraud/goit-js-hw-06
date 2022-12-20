const listEl = document.querySelector("#categories");
console.log("Number of categories: ", listEl.children.length);

const listItemEl = listEl.querySelectorAll(".item");

listItemEl.forEach((element) => {
  console.log("Category: ", element.querySelector("h2").textContent);
  console.log("Elements: ", element.querySelector("ul").children.length);
});
