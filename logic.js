//TODO: refaire des test sur la fonction listComparison pour voir le typeOf des parametre puis convertir les entries et les nombres aleatoir aux normes de la fonction listComparison

const playBtn = document.getElementById("play-button");
const result = document.getElementById("info-display");
let entries = document.getElementById("user-inputnum").value;

function listComparison(listA, listB) {
  const sameNumber = [];
  for (let i = 0; i < listA.length; i++) {
    for (let j = 0; j < listB.length; j++) {
      if (listA[i] === listB[j]) {
        sameNumber.push(listA[i]);
      }
    }
  }
  console.log(sameNumber);
  return sameNumber;
}

listComparison([1, 2, 3, 4, 5], [0.1, 3, 90, 4, 200]);

function createListOfNumber() {
  let listOfNum = [];
  for (let i = 0; i < 10; i++) {
    let rnd = Math.floor(Math.random() * 7 + 1);
    listOfNum.push(rnd);
  }
  return listOfNum;
}

function displayResult() {
  result.innerHTML = `<p>${createListOfNumber().join(" ' ")}</p>`;
}

function play() {
  let entries = document.getElementById("user-inputnum").value;
  entries = Array.from(String(Math.abs(entries)), Number)
// Math.absolute to ensure that we are working with a positive number even if it is negative 
// the second arg of from map all element in the first arg to number

  listComparison(entries,createListOfNumber())


  displayResult();
}
