const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const listRef = document.querySelector("#ingredients");

const createListItems = (itemNames) => {
  return itemNames.map((element) => {
    const itemEl = document.createElement("li");
    itemEl.textContent = element;
    itemEl.classList.add("item");

    return itemEl;
  });
};

const listItems = createListItems(ingredients);

listRef.append(...listItems);

// const listItemsEl = ingredients.map((element) => {
//   const itemEl = document.createElement("li");
//   itemEl.textContent = element;
//   itemEl.classList.add("item");

//   return itemEl;
// });

// listEl.append(...listItemsEl);
