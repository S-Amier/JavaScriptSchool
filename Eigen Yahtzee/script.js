// Dice values
let dice = [1, 2, 3, 4, 5];

// Event listener for rolling dice
document.getElementById("roll-btn").addEventListener("click", rollDice);

// Event listener for holding dice
document.querySelectorAll(".die").forEach(die => {
    die.addEventListener("click", toggleHold);
});

// Event listener for scoring
document.getElementById("score-btn").addEventListener("click", score);

// Function to roll the dice
function rollDice() {
    for (let i = 0; i < dice.length; i++) {
        if (!document.getElementById(`die${i + 1}`).classList.contains("held")) {
            dice[i] = Math.floor(Math.random() * 6) + 1;
            document.getElementById(`die${i + 1}`).textContent = dice[i];
        }
    }
}

// Function to toggle hold on a die
function toggleHold(event) {
    const die = event.target;
    die.classList.toggle("held");
}

// Function to check for small straight
function hasSmallStraight() {
    const sortedDice = dice.slice().sort();
    return sortedDice.join("") === "1234" || sortedDice.join("") === "2345" || sortedDice.join("") === "3456";
}

// Function to check for big straight
function hasBigStraight() {
    const sortedDice = dice.slice().sort();
    return sortedDice.join("") === "12345" || sortedDice.join("") === "23456";
}

// Function to calculate and display the score
function score() {
    let scoreOutput = "";

    if (hasSmallStraight()) {
        scoreOutput += "Small Straight: 30 points<br>";
    }

    if (hasBigStraight()) {
        scoreOutput += "Big Straight: 40 points<br>";
    }

    document.getElementById("score-output").innerHTML = scoreOutput;
}

