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
  createListOfNumber();
}
function handleValidationClick() {
  //role juste recuperer les entrees du joueur
  const entries = document.querySelector("#user-input").value;
  if (entries == !3) {
    alert("vous devez entrer 3 chiffres");
    playerEntries.push(entries);
    console.log(playerEntries);
  }
  console.log(Number(entries));
}
