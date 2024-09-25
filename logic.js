// TODO: faire en sorte que sameNumber ne contienne pas de doublons
// TODO: faire une fonction qui verifie le score du joueur et l'affiche

const playBtn = document.getElementById("play-button");
const result = document.getElementById("info-display");
let entries = document.getElementById("user-inputnum").value;

function listComparison(listA, listB) {
  let sameNumber = [];
  for (let i = 0; i < listA.length; i++) {
    for (let j = 0; j < listB.length; j++) {
      if (listA[i] === listB[j]) {
        sameNumber.push(listA[i]);
      }
    }
  }
alert("votre score est de : " + Array.from(new Set(sameNumber)).length);
  return sameNumber;
}

function createListOfNumber() {
  let listOfNum = [];
  for (let i = 0; i < 10; i++) {
    let rnd = Math.floor(Math.random() * 9 + 1);
    listOfNum.push(rnd);
  }
  return listOfNum;
}

function displayResult() {
  result.innerHTML = `<p>${createListOfNumber().join(" ' ")}</p>`;
}

function play() {
  let entries = document.getElementById("user-inputnum").value;
  entries = Array.from(String(Math.abs(entries)), Number);
  // Math.absolute to ensure that we are working with a positive number even if it is negative
  // the second arg of from map all element in the first arg to number
  listComparison(entries, createListOfNumber());
  displayResult();
}
