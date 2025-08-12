const body = document.querySelector("body");
const div = document.createElement("div");
const btn = document.createElement("button");

btn.innerText = "Change to 'Hi there'";

btn.addEventListener("click", () => {
  div.innerText = "Hi there!";
});

body.appendChild(div);
body.appendChild(btn);
