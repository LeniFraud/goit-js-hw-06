const textInputRef = document.querySelector("#name-input");
const textOutputRef = document.querySelector("#name-output");

textInputRef.addEventListener("input", (event) => {
  const name = event.currentTarget.value;
  textOutputRef.textContent = name ? name : "Anonymous";
});
