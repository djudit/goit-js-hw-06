const divInput = document.querySelector("#controls");
const inputNum = divInput.firstElementChild;
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

inputNum.addEventListener("input", handleInput);
inputNum.addEventListener("click", handleCreate);
inputNum.addEventListener("click", handleDestroy);

function handleInput(event) {
  console.log(event.data);
}

function handleCreate(event) {
  const itemEl = document.createElement("div");
  itemEl.textContent = "Hello";
  boxes.append(itemEl);
  itemEl.classList.add("item-box");
  return itemEl;
}

function handleDestroy(event) {
  // boxes.lastElementChild.remove();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
