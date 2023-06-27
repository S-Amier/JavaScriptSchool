const country = "Netherlands";
const continent = "Europe";
var population = "18000000";
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

const description = (country + " is in " + continent + " and it's " + population + " people speak " + language)
console.log(description);

console.log(`${country} is in ${continent} and its ${population} people speak ${language}`)

console.log(`${country} population is ${averagePopulation - population} below average`);

if (population >= 33000000){
    console.log(`${country} population is above average`)
}  else {
    console.log(`${country} population is ${averagePopulation - population} below average`);
}
