function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector(".change-color");
const currentColorMessage = document.querySelector(".color");

changeColorBtn.addEventListener("click", () => {
  const currentColor = getRandomHexColor();
  currentColorMessage.textContent = currentColor;
  document.body.style.backgroundColor = `${currentColor}`;
});
