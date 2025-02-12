const display = document.querySelector(".display");
const reset = document.querySelector("#reset");
const addingHalf = document.querySelector("#addingHalf");
const subtractionHalf = document.querySelector("#subtractionHalf");
const addingOne = document.querySelector("#addingOne");
const subtractionOne = document.querySelector("#subtractionOne");
const addingTwo = document.querySelector("#addingTwo");
const subtractionTwo = document.querySelector("#subtractionTwo");
const addingFive = document.querySelector("#addingFive");
const subtractionFive = document.querySelector("#subtractionFive");
const addingTen = document.querySelector("#addingTen");
const subtractionTen = document.querySelector("#subtractionTen");
const addingHundred = document.querySelector("#addingHundred");
const subtractionHundred = document.querySelector("#subtractionHundred");

const updateDisplay = (value) => {
  if (value > 99999999) value = 99999999;
  if (value < -9999999) value = -9999999;

  display.textContent = String(value).slice(0, 8);
  localStorage.setItem("displayValue", value);
};


window.addEventListener("load", () => {
  const savedValue = localStorage.getItem("displayValue");
  if (savedValue !== null) {
    updateDisplay(parseFloat(savedValue));
  } else {
    updateDisplay(parseFloat(display.textContent));
  }
});

// +0.5/-0.5
addingHalf.addEventListener("click", () => {
  updateDisplay(parseFloat(display.textContent) + 0.5);
});
subtractionHalf.addEventListener("click", () => {
  updateDisplay(parseFloat(display.textContent) - 0.5);
});
// +1/-1
addingOne.addEventListener("click", () => {
  updateDisplay(parseFloat(display.textContent) + 1);
});
subtractionOne.addEventListener("click", () => {
  updateDisplay(parseFloat(display.textContent) - 1);
});
// +2/-2
addingTwo.addEventListener("click", () => {
  updateDisplay(parseFloat(display.textContent) + 2);
});
subtractionTwo.addEventListener("click", () => {
  updateDisplay(parseFloat(display.textContent) - 2);
});
// +5/-5
addingFive.addEventListener("click", () => {
  updateDisplay(parseFloat(display.textContent) + 5);
});
subtractionFive.addEventListener("click", () => {
  updateDisplay(parseFloat(display.textContent) - 5);
});
// +10/-10
addingTen.addEventListener("click", () => {
  updateDisplay(parseFloat(display.textContent) + 10);
});
subtractionTen.addEventListener("click", () => {
  updateDisplay(parseFloat(display.textContent) - 10);
});
// +100/-100
addingHundred.addEventListener("click", () => {
  updateDisplay(parseFloat(display.textContent) + 100);
});
subtractionHundred.addEventListener("click", () => {
  updateDisplay(parseFloat(display.textContent) - 100);
});
// Reset
reset.addEventListener("click", () => {
  updateDisplay(0);
});
