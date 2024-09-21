// TODO:optimiser les fonctions et les rendrent plus propre
//TODO: reecrire toute la logique de facon propre

let validationButton = document.getElementById("validation-button");
let playerEntries = [];
function handleClick() {
  const numbersDisplayed = document.querySelector("#info-display");
  function randomNumber() {
    let listOfNum = [];
    for (let i = 0; i < 10; i++) {
      let rnd = Math.floor(Math.random() * 10 + 1);
       listOfNum.push(rnd);
    }
   
   numbersDisplayed.innerHTML = `<p>${listOfNum.join(" ' ")}</p>`;
   return listOfNum
  }
  randomNumber();

}
function handleValidation() {
  const entries = document.querySelector("#user-input").value;
  console.log(Number(entries));
  console.log(randomNumber())

  //  validationButton.style.color = "red";//ce truc est lancee avant le button qui le declanche
}
