const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector("#value");
let counterValue = 0;

decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
});

incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
});

// const counter = {
//   value: 0,
//   decrement() {
//     this.value -= 1;
//   },
//   increment() {
//     this.value += 1;
//   },
// };

// const decrementBtn = document.querySelector('button[data-action="decrement"]');
// const incrementBtn = document.querySelector('button[data-action="increment"]');
// const valueEl = document.querySelector("#value");

// decrementBtn.addEventListener("click", () => {
//   counter.decrement();
//   valueEl.textContent = counter.value;
// });

// incrementBtn.addEventListener("click", () => {
//   counter.increment();
//   valueEl.textContent = counter.value;
// });
