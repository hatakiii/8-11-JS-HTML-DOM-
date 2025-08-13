// Click to remove item in the list
// jagsaalt hiigeed ter neg jagsaalt deer darah uyd ustah cod bichne

let arr = ["one", "two", "three", "four", "five", "six"];
const list = document.getElementById("ul");
const li = document.createElement("li");

const render = () => {
  list.innerHTML = ""; //Clear existing list
  arr.forEach((element) => {
    const li = document.createElement("li");
    li.textContent = element;

    li.addEventListener("click", () => {
      arr = arr.filter((el) => el !== element);
      render(); // re-render after removal
    });

    list.appendChild(li);
  });
};

render();
