               //0  1  2  3  4
let diceArray = [5, 3, 2, 5, 8];

document.getElementById("GenereerKnop").addEventListener("click", genereerWillekeurigeDobbelstenen);


// het woordje functie, functie naam (argumenten) {scope}
function genereerWillekeurigeDobbelstenen() {
    for (let i = 0; i < diceArray.length; i++) {
        diceArray[i] = Math.floor(Math.random() * 6) + 1;
    }
    console.log(diceArray);
}


//welke wil ik houden
//welke wil ik overnieuw gooien
//score houden

//console.log(diceArray);

/*
diceArray[0] = Math.floor(Math.random() * (max - min + 1)) + min
diceArray[1] = Math.floor(Math.random() * (max - min + 1)) + min
diceArray[2] = Math.floor(Math.random() * (max - min + 1)) + min
diceArray[3] = Math.floor(Math.random() * (max - min + 1)) + min
diceArray[4] = Math.floor(Math.random() * (max - min + 1)) + min

diceArray[0] = Math.random() * 6;
Math.ceil(Math.random());
console.log(diceArray[0]);
*/
