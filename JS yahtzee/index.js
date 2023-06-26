// variabele maken waar 5 getallen in zitten. 
let dice = [1, 5, 1, 2, 3];

let onesScore = document.getElementById("ones");
onesScore.addEventListener("click", function() {
  this.innerText = calculateScoreForNumber(1);
})

let changeScore = document.getElementById("change");
changeScore.addEventListener("click", function() {
  this.innerText = calculateScoreForChange();
})


function countNumber(num) {
  let result = 0;
  // voor iedere dobbelsteen
  for (let index = 0; index < dice.length; index++ ) {
  // als de dobbelsteen 2 is
    if (dice[index] === num) {
      result++; // result = result + 1; result += 1;
    }
  }
  return result;
}

function calculateScoreForNumber(num) {
  // resultaat = ogen * frequentie
  return countNumber(num) * num;
}

function calculateScoreForChange(){
  let result = 0;
  for (let index = 0; index < dice.length; index++ ) {
    result = result + dice[index];
  }

  return result;  
}

/* Mogelijk volgende stappen:

- functie die dice array met random getallen (tussen 1 en 6) vult
- Als ik op de 'gooien' button klik, dan moet het array worden gevuld met random waarden
- Zorg dat de waarden in het dice array op het scherm getoond worden (dat zijn dan de ogen op de dobbelstenen)
- Maak fucnties om score te berekenen (en dus soms om te bepalen of datgene gegooid is):
  - 1 t/m 6
  - 4 of a kind
  - yathzee
  - full house
  - kleine straat
  - grote straat
- laat bij elke worp alle scores zien op het scherm
- maak het mogelijk om na een 'worp' bepaalde dobbelstenen 'vast te zetten' (Dit mag ook  hardcoded, dus een datasteructuur waarin staat wat wordt vastegehouden en waar dus rekening mee wordt gehouden bij het gooien)

*/