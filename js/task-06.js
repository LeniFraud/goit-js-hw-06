const textInputRef = document.querySelector("#validation-input");
const textInputLength = Number(textInputRef.dataset.length);

textInputRef.addEventListener("blur", () => {
  if (textInputRef.value.length !== textInputLength) {
    textInputRef.classList.remove("valid");
    textInputRef.classList.add("invalid");
  } else {
    textInputRef.classList.remove("invalid");
    textInputRef.classList.add("valid");
  }
});
