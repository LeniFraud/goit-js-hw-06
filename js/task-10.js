function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBoxesBtn = document.querySelector("[data-create]");
const destroyBoxesBtn = document.querySelector("[data-destroy]");
const inputRef = document.querySelector("input");
const boxesWrap = document.querySelector("#boxes");

let numberOfBoxes;
let nextBoxSize;

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
    for (let i = 0, boxSize = 30; i < amount; i += 1, boxSize += 10) {
      const currentBoxColor = getRandomHexColor();

      boxes[
        i
      ] = `<div style="background-color: ${currentBoxColor}; width: ${boxSize}px; height: ${boxSize}px"></div>`;
      nextBoxSize = boxSize + 10;
    }
  } else {
    for (let i = 0, boxSize = nextBoxSize; i < amount; i += 1, boxSize += 10) {
      const currentBoxColor = getRandomHexColor();

      boxes[
        i
      ] = `<div style="background-color: ${currentBoxColor}; width: ${boxSize}px; height: ${boxSize}px"></div>`;
      nextBoxSize = boxSize + 10;
    }
  }

  const boxesString = boxes.join("");
  boxesWrap.insertAdjacentHTML("beforeend", boxesString);
}

function destroyBoxes() {
  boxesWrap.innerHTML = "";
}

// const destroyBoxes = () => {
//   const createdBoxes = document.querySelectorAll("#boxes div");
//   for (let i = 0; i < createdBoxes.length; i += 1) {
//     createdBoxes[i].remove();
//   }
// };
