               //0  1  2  3  4
let diceArray = [5, 3, 2, 5, 8];
console.log("Voor het aanpassen is het " + diceArray[0]);
diceArray[0] = 8;
console.log("Na het aanpassen is het " + diceArray[0]);

let min = 1;
let max = 6;

diceArray[0] = Math.floor(Math.random() * (max - min + 1)) + min
diceArray[1] = Math.floor(Math.random() * (max - min + 1)) + min
diceArray[2] = Math.floor(Math.random() * (max - min + 1)) + min
diceArray[3] = Math.floor(Math.random() * (max - min + 1)) + min
diceArray[4] = Math.floor(Math.random() * (max - min + 1)) + min

console.log(diceArray);

/*
diceArray[0] = Math.random() * 6;
Math.ceil(Math.random());
console.log(diceArray[0]);
*/
