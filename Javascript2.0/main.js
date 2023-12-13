let player1Score=[];
let player2Score=[];
let player1Dice=[];
let player2Dice=[];
let rollCount=0;
let roundCount=0;
let isPlayerOneTurn=true;
let transformValues=[
[0,30],[-5,40],[0,35],[5,40],[0,30]
];
const player1Container=document.getElementById("player1Container");
const player2Container=document.getElementById("player2Container");
const diceElements=document.querySelectorAll(".dice");
const rollButton = document.getElementById("roll");
rollButton.addEventListener("click", rollDice);
let rollSound =new Audio("roll.wav");
    function rollDice(){
        rollCount++;
        let diceArr=[1,2,3,4,5];
        let randomDice=[];
        for (let i=0; i<diceArr.length; i++){
            randomDice.push(Math.floor(Math.random()*6)+1);
        }

        let playArea=document.getElementById("playArea");
        let diceContainer=document.getElementById("player1Container");
        let numDice= diceContainer.children.length;
        let playAreaWidth=playArea.offsetWidth-numDice*50;
        let playAreaHeight=playArea.offsetHeight-50;

        diceElements.forEach(function(diceElement,index){
            if(diceElement.classList.contains("active") || rollCount ==1){
                resetDicePositions();
                const x = transformValues[index][0];
                const y = transformValues[index][1];

                setTimeout(function(){
                    changeDiePosition(diceElement,x,y);
                    changeDiceFaces(randomDice);
                    if(rollCount==3){
                        rollButton.disabled=true;
                        rollButton.style.opacity=0.5;
                    }
                    rollSound.play();
                    },500);
                }
            });

        }
        function resetDicePositions(){
            diceElements.forEach(function(diceElement){
                diceElement.style.transform="none";
            })
        }
        function changeDiePosition(diceElement,x,y){
            let angle=135*Math.floor(Math.random()*10);
            let diceRollDirection = -1;
            if(!isPlayerOneTurn) diceRollDirection=1;
            angle=135*Math.floor(Math.random()*10);
            diceElement.style.transform=
            "translateX("+
            x+"vw) translateY("+diceRollDirection*y+
            "vh) rotate(" + angle + "deg)";
        }
        function changeDiceFaces(randomDice) {
            for (let i=0; i< diceElements.length; i++) {
                if(rollCount===1) diceElements[i].classList.add("active");
                if(diceElements[i].classList.contains("active")) {
                    if(isPlayerOneTurn) player1Dice[i] = randomDice[i];
                    else player2Dice[i]= randomDice[i];
                    let face = diceElements[i].getElementsByClassName("face")[0];
                    face.src="dice"+randomDice[i]+".png";
            
                }
            }
        }
        function resetDiceFaces() {
            for (let i=0; i<diceElements.length; i++){
                let face = diceElements[i].getElementsByClassName("face")[0];
                diceElements[i].classList.remove("active");
                let diceNumber= i+1;
                face.src="dice"+diceNumber+".png";
            }
        }
        diceElements.forEach(function(diceElement,index){
            diceElement.addEventListener("click",function(){
                if(rollCount==0) return;
                diceElement.classList.toggle("active");
                if(!diceElement.classlist.contains("active")){
                    diceElement.style.transform="none";
                }
                else{
                    const diceNumber=diceElement.id.charAt(3);
                    const x = transformValues[diceNumber-1][0];
                    const y = transformValues[diceNumber-1][1];
                    changeDiePosition(diceElement,x,y);
                }
            })
        })
        function calculateOnes(dice) {
            let score=0;
            for (let i=0; i<dice.length;i++){
                if(dice==1) {
                    score +=1;
                }
            }
            return score;
        }
        function calculateTwos(dice) {
            let score=0;
            for (let i=0; i<dice.length;i++){
                if(dice==2) {
                    score +=2;
                }
            }
            return score;
        }
        function calculateThrees(dice) {
            let score=0;
            for (let i=0; i<dice.length;i++){
                if(dice==3) {
                    score +=3;
                }
            }
            return score;
        }
        function calculateFours(dice) {
            let score=0;
            for (let i=0; i<dice.length;i++){
                if(dice==4) {
                    score +=4;
                }
            }
            return score;
        }
        function calculateFives(dice) {
            let score=0;
            for (let i=0; i<dice.length;i++){
                if(dice==5) {
                    score +=5;
                }
            }
            return score;
        }
        function calculateSixes(dice) {
            let score=0;
            for (let i=0; i<dice.length;i++){
                if(dice==6) {
                    score +=6;
                }
            }
            return score;
        }
        function calculateChance(dice) {
            let score=0;
            for (let i=0; i<dice.length;i++){
                    score+=dice[i];   
            }
            return score;
        }
        function calculateYahtzee(dice) {
            let firstDie=dice[0];
            let score=50;
            for (let i=0; i<dice.length;i++){
                if(dice[i]!==firstDie) {
                    score=0;
                }
            }
            return score;
        }
        function calculateThreeOfAKind(dice) {
            let score=0;
            for (let i=0; i<dice.length;i++){
                let count=1;
                for (let j=0; j<dice.length; j++) {
                    if(j!== && dice[i] ==dice[j]){
                        count++;
                    }
                }
                if(count >3)) {
                    score=dice.reduce();
                }
            }
            return score;
        }
