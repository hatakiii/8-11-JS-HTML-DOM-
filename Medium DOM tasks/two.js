let listData = [];

const body = document.querySelector("body");
const input = document.createElement("input");
const btn = document.createElement("button");
const ul = document.createElement("ul");

body.appendChild(input);
body.appendChild(btn);
body.appendChild(ul);

btn.innerText = "Add";

const render = () => {
  ul.innerHTML = "";
  listData.map((element) => {
    const li = document.createElement("li");
    li.innerHTML = element;
    ul.appendChild(li);
  });
};

const printInputValue = (value) => {
  listData.push(value);
};

btn.addEventListener("click", () => {
  printInputValue(input.value);
  render();
});
