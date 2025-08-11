let input = document.getElementById("input");
let output = document.getElementById("output");
// numbers
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const zero = document.getElementById("zero");
//math functions
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
//additionals
const fraction = document.getElementById("fraction");
const clear = document.getElementById("clear");
const minusPlus = document.getElementById("minusPlus");
const percentage = document.getElementById("percentage");
const equals = document.getElementById("equals");

// variables
let n1 = null;
let n2 = null;

one.addEventListener("click", () => {
  input.innerText += "1";
});

two.addEventListener("click", () => {
  input.innerText += "2";
});
