// TODO:optimiser les fonctions et les rendrent plus propre
//TODO: reecrire toute la logique de facon propre

const validationButton = document.getElementById("validation-button");
const numbersDisplayed = document.querySelector("#info-display");
let playerEntries = [];

function handleShowNumberClick() {
  function createListOfNumber() {
    let listOfNum = [];
    for (let i = 0; i < 10; i++) {
      let rnd = Math.floor(Math.random() * 10 + 1);
      listOfNum.push(rnd);
    }
    numbersDisplayed.innerHTML = `<p>${listOfNum.join(" ' ")}</p>`;
    return listOfNum;
  }
  function checkPlayerScore() {}

  createListOfNumber();
}
function handleValidation() {
  const entries = document.querySelector("#user-input").value;
  console.log(Number(entries));

 
}
