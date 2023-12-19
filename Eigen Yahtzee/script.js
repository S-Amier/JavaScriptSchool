// Dice values
let dice = [1, 2, 3, 4, 5];

// Event listener for rolling dice
document.getElementById("klik").addEventListener("click", rollDice);

// Event listener for holding dice
document.querySelectorAll(".die").forEach((die) => {
  die.addEventListener("click", toggleHold);
});

// Function to roll the dice
function rollDice() {
  for (let i = 0; i < dice.length; i++) {
    if (!diceHeld(i)) {
      dice[i] = Math.floor(Math.random() * 6) + 1;
      document.getElementById(`die${i + 1}`).textContent = dice[i];
    }
  }
}

function diceHeld(diceIndex) {
  return document
    .getElementById(`die${diceIndex + 1}`)
    .classList.contains("held");
}

// Function to toggle hold on a die
function toggleHold(event) {
  const die = event.target;
  die.classList.toggle("held");
}

//Laat score zien bij alle dobbelstenen
const diceOne = document.getElementById("klik");
diceOne.addEventListener("click", function () {
  die1.innerText = dice[0];
});

const diceTwo = document.getElementById("klik");
diceTwo.addEventListener("click", function () {
  die2.innerText = dice[1];
});

const diceThree = document.getElementById("klik");
diceThree.addEventListener("click", function () {
  die3.innerText = dice[2];
});

const diceFour = document.getElementById("klik");
diceFour.addEventListener("click", function () {
  die4.innerText = dice[3];
});

const diceFive = document.getElementById("klik");
diceFive.addEventListener("click", function () {
  die5.innerText = dice[4];
});

// single scores
const onesScore = document.getElementById("klik");
onesScore.addEventListener("click", function () {
  ones.innerText = calculateScoreForNumber(1);
});

const twosScore = document.getElementById("klik");
twosScore.addEventListener("click", function () {
  twos.innerText = calculateScoreForNumber(2);
});

const threesScore = document.getElementById("klik");
threesScore.addEventListener("click", function () {
  threes.innerText = calculateScoreForNumber(3);
});

const foursScore = document.getElementById("klik");
foursScore.addEventListener("click", function () {
  fours.innerText = calculateScoreForNumber(4);
});

const fivesScore = document.getElementById("klik");
fivesScore.addEventListener("click", function () {
  fives.innerText = calculateScoreForNumber(5);
});

const sixesScore = document.getElementById("klik");
sixesScore.addEventListener("click", function () {
  sixes.innerText = calculateScoreForNumber(6);
});

const chanceScore = document.getElementById("klik");
chanceScore.addEventListener("click", function () {
  chance.innerText = calculateScoreForChance();
});

//speciale scores
const threeOfaKindScore = document.getElementById("klik");
threeOfaKindScore.addEventListener("click", function () {
  threeOfaKind.innerText = isXofAKind(3) || isXofAKind(4) || isXofAKind(5);
});

const fourOfaKindScore = document.getElementById("klik");
fourOfaKindScore.addEventListener("click", function () {
  fourOfaKind.innerText = isXofAKind(4) || isXofAKind(5);
});

const yahtzeeScore = document.getElementById("klik");
yahtzeeScore.addEventListener("click", function () {
  yahtzee.innerText = isXofAKind(5);
});

const fullhouseScore = document.getElementById("klik");
fullhouseScore.addEventListener("click", function () {
  fullhouse.innerText = calculateFullHouse();
});

const kleinestraatScore = document.getElementById("klik");
kleinestraatScore.addEventListener("click", function () {
  kleineStraat.innerText = calculateSmallStraight();
});

const grotestraatScore = document.getElementById("klik");
grotestraatScore.addEventListener("click", function () {
  groteStraat.innerText = calculateBigStraight();
});

//functie tellen van nummers
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

//functie number bij specifieke score
function calculateScoreForNumber(num) {
  // resultaat = ogen * frequentie
  return countNumber(num) * num;
}

//funcite score voor chance
function calculateScoreForChance() {
  let result = 0;
  for (let index = 0; index < dice.length; index++) {
    result = result += dice[index];
  }
  return result;
}

// Functie check x of a kind
function isXofAKind(x) {
  if (
    countNumber(1) == x ||
    countNumber(2) == x ||
    countNumber(3) == x ||
    countNumber(4) == x ||
    countNumber(5) == x ||
    countNumber(6) == x
  ) {
    return true;
  } else {
    return false;
  }
}

// Functie check kleine straat
function calculateSmallStraight() {
  const sortedDice = dice.slice().sort();
  return (
    (sortedDice[0] === 1 &&
      sortedDice[1] === 2 &&
      sortedDice[2] === 3 &&
      sortedDice[3] === 4) ||
    (sortedDice[1] === 1 &&
      sortedDice[2] === 2 &&
      sortedDice[3] === 3 &&
      sortedDice[4] === 4) ||
    (sortedDice[0] === 2 &&
      sortedDice[1] === 3 &&
      sortedDice[2] === 4 &&
      sortedDice[3] === 5) ||
    (sortedDice[1] === 2 &&
      sortedDice[2] === 3 &&
      sortedDice[3] === 4 &&
      sortedDice[4] === 5) ||
    (sortedDice[0] === 3 &&
      sortedDice[1] === 4 &&
      sortedDice[2] === 5 &&
      sortedDice[3] === 6) ||
    (sortedDice[1] === 3 &&
      sortedDice[2] === 4 &&
      sortedDice[3] === 5 &&
      sortedDice[4] === 6)
  );
}

// Functie check grote straat
function calculateBigStraight() {
  const sortedDice = dice.slice().sort();
  return sortedDice.join("") === "12345" || sortedDice.join("") === "23456";
}

// Functie check Full House
function calculateFullHouse() {
  return isXofAKind(3) && isXofAKind(2);
}

// Functies laten zien in console
rollDice();
console.log("Rolled dice:", dice);

console.log("Three of a Kind:", calculateThreeOfaKind());
console.log("Four of a Kind:", calculateFourOfaKind());
console.log("Yahtzee:", calculateYahtzee());
console.log("Small Straight:", calculateSmallStraight());
console.log("Big Straight:", calculateBigStraight());
console.log("Full House:", calculateFullHouse());
