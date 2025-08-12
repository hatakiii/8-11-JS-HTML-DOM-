const body = document.querySelector("body");
const div = document.createElement("div");
const btn = document.createElement("button");

body.appendChild(div);
body.appendChild(btn);

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

btn.innerText = "Show numbers > 5";

const results = arr.filter((val) => {
  return val > 5;
});
