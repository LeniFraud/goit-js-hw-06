const inputSliderRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

textRef.style.fontSize = `${inputSliderRef.value}px`;

inputSliderRef.addEventListener("input", (event) => {
  textRef.style.fontSize = `${event.target.value}px`;
});
