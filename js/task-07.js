const inputSliderEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

// const textFontSize = inputSliderEl.value;
textEl.style.fontSize = `${inputSliderEl.value}px`;

inputSliderEl.addEventListener("input", (event) => {
  //   const textFontSize = event.target.value;
  textEl.style.fontSize = `${event.target.value}px`;
});
