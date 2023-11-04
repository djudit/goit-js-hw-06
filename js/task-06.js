const inputSymbols = document.querySelector("#validation-input");

const handleInput = (event) => {
  if (inputSymbols.textContent.length === 6) {
    inputSymbols.classList.add("valid");
  } else {
    inputSymbols.classList.add("invalid");
  }
  //   inputSymbols.textContent = event.currentTarget.value;
};

inputSymbols.addEventListener("blur", handleInput);
