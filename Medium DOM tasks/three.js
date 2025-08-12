const body = document.querySelector("body");
const div = document.createElement("div");
const btn = document.createElement("button");

const numArray = [8, 3, 7, 1, 5];

body.appendChild(div);
body.appendChild(btn);

btn.innerText = "Sort Ascending";
div.innerHTML = `Numbers: ${numArray}`;

const sortedArray = numArray.sort((a, b) => a - b);

btn.addEventListener("click", () => {
  div.innerHTML = `Sorted numbers: ${sortedArray}`;
});
