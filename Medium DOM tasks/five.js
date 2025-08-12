// Dropdown Filter

let data = [
  { name: "orange", category: "fruit" },
  { name: "banana", category: "fruit" },
  { name: "potato", category: "vegetable" },
  { name: "celery", category: "vegetable" },
];

const select = document.querySelector("select");
const uul = document.querySelector("ul");

select.addEventListener("change", () => {
  uul.innerHTML = "";
  const selectedValue = select.value;
  if (selectedValue === "All") {
    data.map((food) => {
      let li = document.createElement("li");
      uul.appendChild("li");
      li.innerText = food.name;
    });
  } else {
    const filtered = data.filter((item) => {
      return item.category === selectedValue;
    });
    filtered.map((food) => {
      let li = document.createElement("li");
      uul.appendChild("li");
      li.innerText = food.name;
    });
  }
});
