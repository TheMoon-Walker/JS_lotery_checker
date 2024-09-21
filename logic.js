










let validationButton = document.querySelector("#validation-button");
let playerEntries = [];












function handleValidation() {
  const userInputValue = document.querySelector("#user-input").value;

  console.log(userInputValue)
  // validationButton.style.display = "hidden"; //une fois que le bouton valider est appuye , le faire disparaitre 
}

function handleClick() {
  const numbersDisplayed = document.querySelector("#info-display");
  const listOfNum = [];
  function randomNumber() {
    for (let i = 0; i < 10; i++) {
      let rnd = Math.floor(Math.random() * 10 + 1);
      listOfNum.push(rnd);
    }
    numbersDisplayed.innerHTML = `<p>${listOfNum.join(" ' ")}</p>`;
  }
  randomNumber();
}
