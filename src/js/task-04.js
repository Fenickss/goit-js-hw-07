// let valueEl = Number(document.querySelector("#value").textContent);

// let counterValue = document.querySelector("#value");

// const dekrBtn = document.querySelector("#counter").firstElementChild;
// const inkrBtn = document.querySelector("#counter").lastElementChild;

// inkrBtn.addEventListener("click", (event) => {
//   //   console.log("Вешаю слушателя события на целевую кнопку");
//   valueEl += 1;

//   counterValue.innerText = valueEl;
// });

// dekrBtn.addEventListener("click", (event) => {
//   //   console.log("Снимаю слушателя события с целевой кнопки");
//   valueEl -= 1;

//   counterValue.innerText = valueEl;
//   //   console.log("counterValue", counterValue);
// });


const counterValue = document.querySelector("#value");
const buttons = document.querySelectorAll("#counter button");

const decrementBtn = buttons[0];
const incrementBtn = buttons[1];

const step = 1;
let calcValue = 0;

decrementBtn.addEventListener("click", () => {
  calcValue -= step;
  counterValue.innerHTML = calcValue;
});

incrementBtn.addEventListener("click", () => {
  calcValue += step;
  counterValue.innerHTML = calcValue;
});