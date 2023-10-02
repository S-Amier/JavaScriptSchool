// variabele maken waar 5 getallen in zitten. 
const diceArray = [1, 5, 1, 2, 3];
const holdArray =[false,false,true,false,true];
//console.log(countingScore());
document.getElementById("klik").addEventListener("click", generateDice);
console.log(generateDice());


// het woordje functie, functie naam (argumenten) {scope}
function generateDice() {
  for (let i = 0; i < diceArray.length; i++) {
      //maakt gelijk aan een afgerond willekeurig getal tussen de 1 en 6
      if(holdArray[i] == false){
        diceArray[i] = Math.floor(Math.random() * 6) + 1;
      }
  }
}
// Nodig om dobbelstenen vast te zetten
const dice = document.querySelectorAll('.die');

//Laat score zien bij alle dobbelstenen
const diceOne = document.getElementById("klik");
diceOne.addEventListener("click", function() {
  diceFirst.innerHTML = diceArray[0];
})

const diceTwo = document.getElementById("klik");
diceTwo.addEventListener("click", function() {
  diceSecond.innerHTML = diceArray[1];
})

const diceThree = document.getElementById("klik");
diceThree.addEventListener("click", function() {
  diceThird.innerHTML = diceArray[2];
})

const diceFour = document.getElementById("klik");
diceFour.addEventListener("click", function() {
  diceFourth.innerHTML = diceArray[3];
})

const diceFive = document.getElementById("klik");
diceFive.addEventListener("click", function() {
  diceFifth.innerHTML = diceArray[4];
})

// single scores
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

//speciale scores
const threeOfaKindScore = document.getElementById("klik");
threeOfaKindScore.addEventListener("click", function(){
  threeOfaKind.innerText = calculateThreeOfaKind();
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

const grotestraatScore = document.getElementById("klik");
grotestraatScore.addEventListener("click", function() {
  groteStraat.innerText = calculateGroteStraat();
})

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
    result = result += diceArray[index];
  }
  return result;
}

//Berekend hoe vaak hetzelfde nummer voorkomt in de array
Array.prototype.countOfSameNum = function() {
  let count = 0;
  for (let i = 0; i < this.length; ++i) {
    if (this[i] === this[0]) count++;
  }
  return count;
}

function frequency(array) {
  let frequency = {};
  let max = 0; //Max frequency
  let most; //Houdt Max frequency
  for (var v in array) {
    frequency[array[v]] = (frequency[array[v]] || 0) + 1; //frequency wordt groter
    if (frequency[array[v]] > max) { //Frequency groter dan max?
      max = frequency[array[v]]; //Update max
      most = array[v]; //Update result
    }
  }
  return max;
}

//Kijkt als alle elementen in een array hetzelfde zijn
function isSame(array) {
  if (array.every((val, i, arr) => val == arr[0])) {
    return true;
  } else {
    return false;
  }
}

//Sorteert array en telt hoeveel dobbelstenen-1 zijn in een straat
function how_many_straight(array) {
  let sorted = array.sort();
  let length = 0;
  for (let i = 0; i < sorted.length - 1; i++) {
    if (sorted[i + 1] - sorted[i] === 1) {
      length += 1;
    }
  }
  return length;
}

//Berekend score voor een grote straat
function calculateGroteStraat() {
    let result = 0;
    let length = how_many_straight(diceArray);
    if (length === 4) {
      result = 40;
    }
    return result;
  }

//Berekend score voor een kleine straat
function calculateKleineStraat() {
    let result = 0;
    let length = how_many_straight(diceArray);
    if (length >= 3) {
      result = 30;
    }
    return result;
  }

  //Calculate the score for a fullhouse
function calculateFullhouse() {
  let result = 0;
  let fullhouse = diceArray;
  let frequency = {};
  let max = 0; // holds the max frequency.
  let most; // holds the max frequency element.
  for (var v in fullhouse) {
    frequency[fullhouse[v]] = (frequency[fullhouse[v]] || 0) + 1; // increment frequency.
    if (frequency[fullhouse[v]] > max) {
      // is this frequency > max so far ?
      max = frequency[fullhouse[v]]; // update max.
      most = fullhouse[v]; // update result.
    }
    // makes sure there is at least 3 of the same numbers
    if (max === 3) {
      fullhouse = $.grep(fullhouse, function(value) {
        //returns an array of remaining differing numbers
        return value != most;
      });
      //check to see if there are two items in the array and that they are the same score
      if (isSame(fullhouse) && fullhouse.length === 2) {
        result = 25;
      }
    }
  }
  return result;
}

//Bereken Three of a kind
function calculateThreeOfaKind() {
  let result = 0;
  let isSameNum = frequency(diceArray);
  if (isSameNum >= 3) {
    for (var i = 0; i < diceArray.length; i++) {
     result += diceArray[i];
    }
    return result;
  } else {
    return result;
 }
}
//Bereken Four of a kind
function calculateFourOfaKind() {
  let result = 0;
  let isSameNum = frequency(diceArray);
  if (isSameNum >= 4) {
    for (var i = 0; i < diceArray.length; i++) {
      result += diceArray[i];
    }
    return result;
  } else {
    return result;
 }
}
//Berekend Yahtzee
function calculateYahtzee() {
  let result = 0;
  let is_same = isSame(diceArray);
  if (is_same) {
    result = 50;
  }
  return result;
}

//Gets the values of all the held die and places them in an array
function save_held_dice() {
  let saveNum = [];
  let heldDice = $(".hold").toArray();
  for (var i = 0; i < heldDice.length; i += 1) {
    saveNum.push(parseInt(heldDice[i].innerHTML));
  }
  return saveNum;
}




/* Mogelijk volgende stappen:

- functie die dice array met random getallen (tussen 1 en 6) vult
- Als ik op de 'gooien' button klik, dan moet het array worden gevuld met random waarden
- Zorg dat de waarden in het dice array op het scherm getoond worden (dat zijn dan de ogen op de dobbelstenen)
- Maak functies om score te berekenen (en dus soms om te bepalen of datgene gegooid is):
  - 1 t/m 6 !
  - 4 of a kind !
  - yahtzee ! 
  - full house ! 
  - kleine straat !
  - grote straat !
- laat bij elke worp alle scores zien op het scherm !
- maak het mogelijk om na een 'worp' bepaalde dobbelstenen 'vast te zetten' (Dit mag ook  hardcoded, dus een datasteructuur waarin staat wat wordt vastegehouden en waar dus rekening mee wordt gehouden bij het gooien)

*/