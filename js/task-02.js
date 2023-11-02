const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listIngredients = document.querySelector("#ingredients");

function createProducts(arr) {
  const markup = arr.map((ingredient) => {
    const itemElem = document.createElement("li");
    itemElem.textContent = ingredient;
    listIngredients.append(itemElem);
    itemElem.classList.add("item");
    return itemElem;
  });
}
createProducts(ingredients);
