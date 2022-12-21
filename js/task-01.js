const listRef = document.querySelector("#categories");
const listItemsRef = listRef.querySelectorAll(".item");

const showListInfo = (list, listItems) => {
  console.log("Number of categories: ", list.children.length);

  listItems.forEach((element) => {
    console.log("Category: ", element.querySelector("h2").textContent);
    console.log("Elements: ", element.querySelector("ul").children.length);
  });
};

showListInfo(listRef, listItemsRef);

// console.log("Number of categories: ", listEl.children.length);

// listItemEl.forEach((element) => {
//   console.log("Category: ", element.querySelector("h2").textContent);
//   console.log("Elements: ", element.querySelector("ul").children.length);
// });
