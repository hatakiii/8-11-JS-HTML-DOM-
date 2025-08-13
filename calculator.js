const inputDisplay = document.getElementById("input");
const resultDisplay = document.getElementById("result");

let input = "";
let result = 0;
let resetNext = false;

// Get all buttons
const buttons = document.querySelectorAll(".btn");

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    let id = button.id;
    let value = button.innerText;

    if (
      resetNext &&
      id !== "plus" &&
      id !== "minus" &&
      id !== "multiply" &&
      id !== "divide" &&
      id !== "equals"
    ) {
      input = "";
      resetNext = false;
    }

    if (id === "clear") {
      input = "";
      result = 0;
      updateDisplay();
    } else if (id === "minusPlus") {
      if (input) {
        if (input.startsWith("-")) {
          input = input.slice(1);
        } else {
          input = "-" + input;
        }
        updateDisplay();
      }
    } else if (id === "percentage") {
      try {
        result = eval(replaceOperators(input)) / 100;
        input = result.toString(); // you might want to keep this, since percentage is a transformation
        updateDisplay();
        resetNext = true;
      } catch {
        showError();
      }
    } else if (id === "equals") {
      try {
        result = eval(replaceOperators(input));
        // Don't reset input, just show result
        updateDisplay();
        resetNext = true;
      } catch {
        showError();
      }
    } else if (
      id === "plus" ||
      id === "minus" ||
      id === "multiply" ||
      id === "divide"
    ) {
      // If an operator is pressed after a calculation, start new input with the result
      if (resetNext) {
        input = result.toString();
        resetNext = false;
      }
      input += value;
      updateDisplay();
    } else if (
      id === "fraction" ||
      id === "zero" ||
      id === "one" ||
      id === "two" ||
      id === "three" ||
      id === "four" ||
      id === "five" ||
      id === "six" ||
      id === "seven" ||
      id === "eight" ||
      id === "nine"
    ) {
      if (resetNext) {
        input = ""; // clear only for digits after equals
        resetNext = false;
      }
      input += value;
      updateDisplay();
    }
  });  // <-- close event listener function
});    // <-- close buttons.forEach

function updateDisplay() {
  inputDisplay.textContent = input || "0";
  resultDisplay.textContent = result || "0";
}

function showError() {
  inputDisplay.textContent = "Error";
  resultDisplay.textContent = "0";
  input = "";
  resetNext = true;
}

function replaceOperators(str) {
  return str.replace(/×/g, "*").replace(/÷/g, "/").replace(/−/g, "-");
}
