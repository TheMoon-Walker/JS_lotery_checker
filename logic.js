// TODO:optimiser les fonctions et les rendrent plus propre
//TODO: reecrire toute la logique de facon propre

// const validationButton = document.getElementById("validation-button");
// const numbersDisplayed = document.querySelector("#info-display");
// let playerEntries = [];

//TODO: shuffle button afficher une alerte avec le score puis lancer l'annimation avec les paillettes windows

const listA = [1, 2, 3, 4, 5, 6];
const listB = [2, 4, 0,3];


function listComparison(listA,listB){
  const sameN = [];
  for (let i = 0; i < listA.length; i++) {
  for (let j = 0; j < listB.length; j++) {
    if(listA[i] === listB[j]){
      sameN.push(listA[i])
    }
  }
}
console.log(sameN)
}
listComparison(listA,listB)



// function handleShowNumberClick() {
//   function createListOfNumber() {
//     let listOfNum = [];
//     for (let i = 0; i < 10; i++) {
//       let rnd = Math.floor(Math.random() * 10 + 1);
//       listOfNum.push(rnd);
//     }
//     numbersDisplayed.innerHTML = `<p>${listOfNum.join(" ' ")}</p>`;
//     return listOfNum;
//   }
//   createListOfNumber();
// }
// function handleValidationClick() {
//   //role juste recuperer les entrees du joueur
//   const entries = document.querySelector("#user-input").value;
//   if (entries == !3) {
//     alert("vous devez entrer 3 chiffres");
//     playerEntries.push(entries);
//     console.log(playerEntries);
//   }
//   console.log(Number(entries));
// }
