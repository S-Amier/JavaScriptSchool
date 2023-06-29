               //0  1  2  3  4
let diceArray = [5, 3, 2, 5, 8];
//voeg een event toe aan het knopje, met het click event die de functie generateDice aanroept
document.getElementById("GenerateButton").addEventListener("click", generateDice);
//haal het divje op met het ID "Output"
let output = document.getElementById("Output");
let eersteWorp1 = document.getElementById("EersteWorpEen");
let eersteWorp2 = document.getElementById("EersteWorpTwee");
let eersteWorp3 = document.getElementById("EersteWorpDrie");
let eersteWorp4 = document.getElementById("EersteWorpVier");
let eersteWorp5 = document.getElementById("EersteWorpVijf");
let tweedeWorp1 = document.getElementById("TweedeWorpEen");
let tweedeWorp2 = document.getElementById("TweedeWorpTwee");
let tweedeWorp3 = document.getElementById("TweedeWorpDrie");
let tweedeWorp4 = document.getElementById("TweedeWorpVier");
let tweedeWorp5 = document.getElementById("TweedeWorpVijf");
let derdeWorp1 = document.getElementById("DerdeWorpEen");
let derdeWorp2 = document.getElementById("DerdeWorpTwee");
let derdeWorp3 = document.getElementById("DerdeWorpDrie");
let derdeWorp4 = document.getElementById("DerdeWorpVier");
let derdeWorp5 = document.getElementById("DerdeWorpVijf");

// het woordje functie, functie naam (argumenten) {scope}
function generateDice() {
    for (let i = 0; i < diceArray.length; i++) {
        //maakt gelijk aan een afgerond willekeurig getal tussen de 1 en 6
        diceArray[i] = Math.floor(Math.random() * 6) + 1;
    }
    //verander de text van het divje naar de gegooide dobbelstenen
    eersteWorp1.innerHTML = diceArray[0];
    eersteWorp2.innerHTML = diceArray[1];
    eersteWorp3.innerHTML = diceArray[2];
    eersteWorp4.innerHTML = diceArray[3];
    eersteWorp5.innerHTML = diceArray[4];
}
