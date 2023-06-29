//JavaScript Fundamentals – Part 1
/*
//LECTURE: Values and Variables
const country = "Netherlands";
const continent = "Europe";
var population = "18000000";

//LECTURE: Data Types
//LECTURE: let, const and var
const isIsland = false;
const language = "Dutch";


console.log(country);
console.log(continent);
console.log(population);
console.log(isIsland);
console.log(language);

//Basic Operators

let x = population /2;
x ++;
console.log(x);

const finlandPopulation = 6000000;
console.log(population > finlandPopulation);

const averagePopulation = 33000000;
console.log(population > averagePopulation);

//LECTURE: Strings and Template Literals
const description = (country + " is in " + continent + " and it's " + population + " people speak " + language)
console.log(description);

console.log(`${country} is in ${continent} and its ${population} people speak ${language}`)

console.log(`${country} population is ${averagePopulation - population} below average`);

//LECTURE: Taking Decisions: if / else Statements
if (population >= 33000000){
    console.log(`${country} population is above average`)
}  else {
    console.log(`${country} population is ${averagePopulation - population} below average`);
}

//LECTURE: Type Conversion and Coercion
let randomNumberA ='9' - '5'; // 4
console.log(randomNumberA);
let randomNumberB ='19' - '13' + '17'; // 617
console.log(randomNumberB);
let randomNumberC ='19' - '13' + 17; // 23
console.log(randomNumberC);
let randomNumberD ='123' < 57; // false
console.log(randomNumberD);
let randomNumberE = 5 + 6 + '4' + 9 - 4 - 2; // 1143
console.log(randomNumberE);

//LECTURE: Equality Operators: == vs. ===
/*const numNeightbours = Number(prompt("How many neighbour countries does your country have?"));

if (numNeightbours === 1){
    console.log("Only 1 border!")
} else if (numNeightbours >= 1){
    console.log("More than 1 border")
} else{
    console.log("No borders")
}


//LECTURE: Logical Operators

const speaksEnglish = true; //A
const lessThan50million = true; //B
const isAnIsland = false; //C

if(speaksEnglish && lessThan50million && !isAnIsland){
    console.log("You should live in the Netherlands");
} else {
    console.log("Netherlands does not meet your criteria :(")
}

//LECTURE: The switch Statement

const mostSpokenLanguage = "Chinese";

switch (mostSpokenLanguage){
    case "chinese":
        console.log("MOST number of native speakers!");
        break;
    case "spanish":
        console.log("2nd place in number of native speakers");
        break;
    case "english":
        console.log("3rd place");
        break;
    case "hindi":
        console.log("Number 4");
        break;
    case "arabic":
        console.log("5th most spoken language");
        break
    default:
        console.log("Great language too :D");
}

// LECTURE: The Conditional (Ternary) Operator
let populationAverage;
if(population > 33000000) {
    populationAverage = "above";
} else {
    populationAverage = "below";
}
console.log(populationAverage);

console.log(`${country}'s population is ${population > 33000000 ? "above" : "below"} average`)
*/

// JavaScript Fundamentals – Part 2

// LECTURE: Functions