const createBoxesBtn = document.querySelector("[data-create]");
const destroyBoxesBtn = document.querySelector("[data-destroy]");
const inputRef = document.querySelector("input");
const boxesWrap = document.querySelector("#boxes");

let numberOfBoxes;
let boxSize;

inputRef.addEventListener("input", (event) => {
  numberOfBoxes = Number(event.target.value);
  return numberOfBoxes;
});

createBoxesBtn.addEventListener("click", () => {
  createBoxes(numberOfBoxes);
});

destroyBoxesBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  const boxes = [];

  if (!boxesWrap.lastElementChild) {
    boxSize = 30;
  }

  for (let i = 0; i < amount; i += 1) {
    boxes[
      i
    ] = `<div style="background-color: ${getRandomHexColor()}; width: ${boxSize}px; height: ${boxSize}px"></div>`;
    boxSize += 10;
  }

  boxesWrap.insertAdjacentHTML("beforeend", boxes.join(""));
}

function destroyBoxes() {
  boxesWrap.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
