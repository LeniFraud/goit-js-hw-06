const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const listEl = document.querySelector("#ingredients");

const listItemsEl = [];

for (let i = 0; i < ingredients.length; i += 1) {
  const item = document.createElement("li");
  item.textContent = ingredients[i];
  item.classList.add("item");
  listItemsEl.push(item);
}

listEl.append(...listItemsEl);
