const body = document.querySelector("body");

const btn = document.createElement("button");

body.appendChild(btn);

btn.innerText = "Change color";

const colors = ["blue", "yellow", "green", "red"];

let count = 0;
btn.addEventListener("click", () => {
  body.style.backgroundColor = colors[count];
  if (count > colors.length - 1) count = 0;
  count++;
});
