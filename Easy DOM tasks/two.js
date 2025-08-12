const body = document.querySelector("body");
const div = document.createElement("div");
const btn = document.createElement("button");

btn.innerText = "Change color";
div.style.width = "300px";
div.style.height = "100px";
div.style.backgroundColor = "red";

btn.addEventListener("click", () => {
  div.style.backgroundColor = "green";
});

body.appendChild(div);
body.appendChild(btn);
