let data = [
  { name: "orange", category: "fruit" },
  { name: "banana", category: "fruit" },
  { name: "potato", category: "vegetable" },
  { name: "celery", category: "vegetable" },
];

const select = document.querySelector("select");
const uul = document.querySelector("ul");

// Function to render the list
const renderList = (items) => {
  uul.innerHTML = ""; // Clear the list
  items.forEach((food) => {
    let li = document.createElement("li");
    li.innerText = food.name;
    uul.appendChild(li);
  });
};

// No initial render → list is empty until change happens

select.addEventListener("change", () => {
  const selectedValue = select.value;

  if (selectedValue === "all") {
    renderList(data); // Show all items
  } else {
    const filtered = data.filter((item) => item.category === selectedValue);
    renderList(filtered); // Show filtered items
  }
});
