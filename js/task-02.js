const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listIngredients = document.querySelector("#ingredients");

const firstElem = document.createElement("li");
firstElem.textContent = "Potatoes";
listIngredients.append(firstElem);
