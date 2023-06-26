// variabele maken waar 5 getallen in zitten.
let dice = [1, 5, 1, 2, 3];

let oneScore = document.getElementById("ones");
oneScore.addEventListener("click", function (event) {
  //console.log("ik werk");
  //console.log(event.target);
  oneScore.innerText = scoreNumber(1);
});

let twoScore = document.getElementById("twos");
twoScore.addEventListener("click", function (event) {
  //console.log("ik werk");
  //console.log(event.target);
  twoScore.innerText = scoreNumber(2);
});

let threeScore = document.getElementById("threes");
threeScore.addEventListener("click", function (event) {
  //console.log("ik werk");
  //console.log(event.target);
  threeScore.innerText = scoreNumber(3);
});

let fourScore = document.getElementById("fours");
fourScore.addEventListener("click", function (event) {
  //console.log("ik werk");
  //console.log(event.target);
  fourScore.innerText = scoreNumber(4);
});

let fiveScore = document.getElementById("fives");
fiveScore.addEventListener("click", function (event) {
  //console.log("ik werk");
  //console.log(event.target);
  fiveScore.innerText = scoreNumber(5);
});

let sixScore = document.getElementById("sixes");
sixScore.addEventListener("click", function (event) {
  //console.log("ik werk");
  //console.log(event.target);
  sixScore.innerText = scoreNumber(6);
});

let chanceScore = document.getElementById("chance");
chanceScore.addEventListener("click", function (event) {
  //console.log("ik werk");
  //console.log(event.target);
  chanceScore.innerHTML = scoreNumber();
});

// maak het skelet van een functie die sum heet
function sum() {
  // let result = dice[0] + dice[1] + dice[2] + dice[3] + dice[4];
  let result = 0;
  // 1. index variabele aanmaken
  // 2. Evaluatie: Gaan we nog door met loopen of niet?
  // 3. increment: Ophogen van index variabele
  for (let index = 0; index < dice.length; index++) {
    // console.log(index)
    // console.log(dice[index]);
    result += dice[index];
  }
  console.log(result);
}

// stel 5, 5, 1, 2, 3 -> countNumber(5)
// verwachte uitkomst? 2
// Uitkomst: 1

// stel 5, 4, 1, 2, 3 -> countNumber(5)
// verwachte uitkomst? 1
// Uitkomst: 1

// stel 1, 5, 1, 2, 3 -> countNumber(4)
// verwachte uitkomst? 0
// Uitkomst:

function countNumber(num) {
  let result = 0;
  // voor iedere dobbelsteen
  for (let index = 0; index < dice.length; index++) {
    // als de dobbelsteen 2 is
    if (dice[index] === num) {
      result++; // result = result + 1; result += 1;
    }
  }
  return result;
}

function scoreNumber(num) {
  // resultaat = ogen * frequentie
  return countNumber(num) * num;
}
