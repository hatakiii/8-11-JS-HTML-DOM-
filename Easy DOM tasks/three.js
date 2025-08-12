const body = document.querySelector("body");
const div = document.createElement("div");
const btn = document.createElement("button");
const ul = document.createElement("ul");
let li = document.createElement("li");

body.appendChild(div);
body.appendChild(btn);
div.appendChild(ul);
ul.appendChild(li);

li.innerText = "Orange";
btn.innerText = "Add 'Banana'";

btn.addEventListener("click", () => {
  let newItem = document.createElement("li");
  newItem.innerText = "Banana";
  ul.appendChild(newItem);
});
