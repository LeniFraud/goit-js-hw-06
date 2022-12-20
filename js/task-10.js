function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBoxesBtn = document.querySelector("[data-create]");
const destroyBoxesBtn = document.querySelector("[data-destroy]");
const inputEl = document.querySelector("input");

let ourNumber;

inputEl.addEventListener("input", (event) => {
  ourNumber = Number(event.target.value);
  return ourNumber;
});
console.log(ourNumber);

const boxesWrap = document.querySelector("#boxes");

const boxes = [];

const createBoxes = (amount) => {
  for (let i = 0, boxSize = 30; i < amount; i += 1, boxSize += 10) {
    const currentBoxColor = getRandomHexColor();
    boxes[
      i
    ] = `<div style="background-color: ${currentBoxColor}; width: ${boxSize}px; height: ${boxSize}px"></div>`;
  }

  const boxesString = boxes.join("");
  boxesWrap.insertAdjacentHTML("afterbegin", boxesString);
};

createBoxesBtn.addEventListener("click", () => {
  createBoxes(ourNumber);
});

destroyBoxesBtn.addEventListener("click", () => {
  const createdBoxes = document.querySelectorAll("#boxes div");
  for (let i = 0; i < createdBoxes.length; i += 1) {
    createdBoxes[i].remove();
  }
});
