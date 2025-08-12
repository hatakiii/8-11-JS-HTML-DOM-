const body = document.querySelector("body");
let div = document.createElement("div");
const btn = document.createElement("button");

body.appendChild(div);
body.appendChild(btn);

div.innerText = "You can hide and show me";
btn.innerText = "Hide/Show";

btn.addEventListener("click", myFunction);

function myFunction() {
  if (div.innerText === "You can hide and show me") {
    div.innerText = null;
  } else {
    div.innerText = "You can hide and show me";
  }
}
