
//TODO: refaire des test sur la fonction listComparison pour voir le typeOf des parametre puis convertir les entries et les nombres aleatoir aux normes de la fonction listComparison


const playBtn = document.getElementById("play-button");
const result = document.getElementById("info-display");
const entries = document.getElementById("user-inputnum");

function listComparison(listA, listB) {
  const sameNumber = [];
  for (let i = 0; i < listA.length; i++) {
    for (let j = 0; j < listB.length; j++) {
      if (listA[i] === listB[j]) {
        sameNumber.push(listA[i]);
      }
    }
  }
  return sameNumber;
}

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
  console.log(createListOfNumber());
  console.log(entries.value.split(""));
  console.log(createListOfNumber() == Array(entries.value.split("")));
  console.log(
    listComparison(createListOfNumber(), Array(entries.value.split("")))
  );
  displayResult();
}
