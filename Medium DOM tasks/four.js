// const body = document.querySelector("body");
// const input = document.createElement("input");
// const div = document.createElement("div");

// body.appendChild(input);
// body.appendChild(div);
const input = document.getElementById("input");
const result = document.getElementById("result");
function onChange() {
  console.log("onCHange ajillaaa");
  let x = input;
  let letterCount = x.value.length;
  result.innerHTML = `Characters: ${letterCount}`;
}

// input.addEventListener("change", () => {
//   console.log("onCHange ajillaaa");
//   let x = input;
//   let letterCount = x.value.length;
//   div.innerHTML = `Characters: ${letterCount}`;
// });
