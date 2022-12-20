const textInputEl = document.querySelector("#name-input");
const textOutputEl = document.querySelector("#name-output");

textInputEl.addEventListener("input", (event) => {
  const name = event.currentTarget.value;
  textOutputEl.textContent = name ? name : "Anonymous";
});
