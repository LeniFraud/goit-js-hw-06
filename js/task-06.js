const textInputEl = document.querySelector("#validation-input");
const textInputLength = Number(textInputEl.dataset.length);

textInputEl.addEventListener("blur", () => {
  if (textInputEl.value.length !== textInputLength) {
    textInputEl.classList.remove("valid");
    textInputEl.classList.add("invalid");
  } else {
    textInputEl.classList.remove("invalid");
    textInputEl.classList.add("valid");
  }
});
