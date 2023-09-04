// variabele maken waar 5 getallen in zitten. 
const diceArray = [1, 5, 1, 2, 3];
//console.log(countingScore());
console.log(generateDice());



const onesScore = document.getElementById("klik");
onesScore.addEventListener("click", function() {
  ones.innerText = calculateScoreForNumber(1);
})

const twosScore = document.getElementById("klik");
twosScore.addEventListener("click", function() {
  twos.innerText = calculateScoreForNumber(2);
})

const threesScore = document.getElementById("klik");
threesScore.addEventListener("click", function() {
  threes.innerText = calculateScoreForNumber(3);
})

const foursScore = document.getElementById("klik");
foursScore.addEventListener("click", function() {
  fours.innerText = calculateScoreForNumber(4);
})

const fivesScore = document.getElementById("klik");
fivesScore.addEventListener("click", function() {
  fives.innerText = calculateScoreForNumber(5);
})

const sixesScore = document.getElementById("klik");
sixesScore.addEventListener("click", function() {
  sixes.innerText = calculateScoreForNumber(6);
})

const chanceScore = document.getElementById("klik");
chanceScore.addEventListener("click", function() {
  chance.innerText = calculateScoreForChance();
})

const fourOfaKindScore = document.getElementById("klik");
fourOfaKindScore.addEventListener("click", function(){
  fourOfaKind.innerText = calculateFourOfaKind();
})

const yahtzeeScore = document.getElementById("klik");
yahtzeeScore.addEventListener("click", function() {
  yahtzee.innerText = calculateYahtzee();
})

const fullhouseScore = document.getElementById("klik");
fullhouseScore.addEventListener("click", function() {
  fullhouse.innerText = calculateFullhouse();
})

const kleinestraatScore = document.getElementById("klik");
kleinestraatScore.addEventListener("click", function() {
  kleineStraat.innerText = calculateKleineStraat();
})



// het woordje functie, functie naam (argumenten) {scope}
function generateDice() {
  for (let i = 0; i < diceArray.length; i++) {
      //maakt gelijk aan een afgerond willekeurig getal tussen de 1 en 6
      diceArray[i] = Math.floor(Math.random() * 6) + 1;
  }
}
    //console.log(`index: ${index} diceValue: ${dice[index]}`);


function countNumber(num) {
  let result = 0;
  // voor iedere dobbelsteen
  for (let index = 0; index < diceArray.length; index++) {
  // als de dobbelsteen 2 is
    if (diceArray[index] === num) {
      result++; // result = result + 1; result += 1;
    }
  }
  return result;
}

function calculateScoreForNumber(num) {
  // resultaat = ogen * frequentie
  return countNumber(num) * num;
}

function calculateScoreForChance(){
  let result = 0;
  for (let index = 0; index < diceArray.length; index++) {
    result = result + diceArray[index];
  }

  return result;  
}

// Bereken Four of a Kind
function calculateFourOfaKind(){
  let result = 0;
  if (diceArray === 4){
    result++;
  }// else {
    //result = false;
    return result
}

// Bereken Yahtzee
function calculateYahtzee(){
  let result = 0;
  if (diceArray === 5){
    result = 50;
  }// else {
    //result = false;
    return result;
}

// Bereken Full House
function calculateFullhouse(){
  let result = 0;
  if (diceArray === 3 && diceArray === 2){
    result = 25;
  }
  return result;
}

// Bereken kleine straat
function calculateKleineStraat(){
  let index = 1, difference;
  let result = 0;
 
  while (index < diceArray.length) {
    difference = diceArray[index - 1] - diceArray[index - 2];
    if (Math.abs(difference) === 1 && difference === diceArray[index] - diceArray[index - 1]){
      result = true;
    }
    index++
  }
  return result;
    console.log(result);
}







  


/*
function countingScore(){
  const eyes = [
  countEyeAmount(1),
  countEyeAmount(2),
  countEyeAmount(3),
  countEyeAmount(4),
  countEyeAmount(5),
  countEyeAmount(6)
  ];

  return eyes;

}

function countEyeAmount(number){
  let count = 0;
  for(let i = 0; i < diceArray.length; i++){
    if(diceArray[i] === number) count++;
  }
  return count;
}*/









/* Mogelijk volgende stappen:

- functie die dice array met random getallen (tussen 1 en 6) vult
- Als ik op de 'gooien' button klik, dan moet het array worden gevuld met random waarden
- Zorg dat de waarden in het dice array op het scherm getoond worden (dat zijn dan de ogen op de dobbelstenen)
- Maak functies om score te berekenen (en dus soms om te bepalen of datgene gegooid is):
  - 1 t/m 6
  - 4 of a kind
  - yahtzee
  - full house
  - kleine straat
  - grote straat
- laat bij elke worp alle scores zien op het scherm
- maak het mogelijk om na een 'worp' bepaalde dobbelstenen 'vast te zetten' (Dit mag ook  hardcoded, dus een datasteructuur waarin staat wat wordt vastegehouden en waar dus rekening mee wordt gehouden bij het gooien)

*/