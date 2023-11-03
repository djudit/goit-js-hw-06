const inputName = document.querySelector("#name-input");
const spanName = document.querySelector("#name-output");
// console.dir();

const handleInput = (event) => {
  spanName.textContent = event.currentTarget.value;
};

inputName.addEventListener("input", handleInput);
