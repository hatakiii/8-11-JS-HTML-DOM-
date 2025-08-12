const body = document.querySelector("body");
const div = document.createElement("div");
const btn = document.createElement("button");

btn.innerText = "Count button clicks";

let count = 0;
btn.addEventListener("click", () => {
  count++;
  div.innerText = count;
});

body.appendChild(div);
body.appendChild(btn);
