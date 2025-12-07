const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button[data-number]");
const reset = document.querySelector("#reset");

let currentValue = 0;

const MAX_VALUE = 999_999;
const MIN_VALUE = -999_999;

const updateDisplay = (value) => {
  value = Math.max(MIN_VALUE, Math.min(MAX_VALUE, value));

  currentValue = value;
  display.textContent = Number.isInteger(value) ? value : value.toFixed(1);

  localStorage.setItem("displayValue", value);
};

document.addEventListener("DOMContentLoaded", () => {
  const savedValue = localStorage.getItem("displayValue");

  if (savedValue !== null && !isNaN(savedValue)) {
    updateDisplay(parseFloat(savedValue));
  } else updateDisplay(0);
});

buttons.forEach((btn) =>
  btn.addEventListener("click", () =>
    updateDisplay(currentValue + Number(btn.dataset.number))
  )
);

reset.addEventListener("click", () => updateDisplay(0));
