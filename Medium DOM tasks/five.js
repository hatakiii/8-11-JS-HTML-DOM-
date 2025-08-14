let data = [
  { name: "orange", category: "fruit" },
  { name: "banana", category: "fruit" },
  { name: "potato", category: "vegetable" },
  { name: "celery", category: "vegetable" },
];

const select = document.querySelector("select");
const uul = document.querySelector("ul");

const renderList = (items) => {
  uul.innerHTML = "";
  items.forEach((food) => {
    let li = document.createElement("li");
    li.innerText = food.name;
    uul.appendChild(li);
  });
};

select.addEventListener("change", () => {
  const selectedValue = select.value;

  if (selectedValue === "all") {
    renderList(data);
  } else {
    const filtered = data.filter((item) => item.category === selectedValue);
    renderList(filtered);
  }
});
