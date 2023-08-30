
//Generating a random number
var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomNumber2 = Math.floor((Math.random() * 6) + 1);

function diceRound(randomNumber, diceNum) {
    if (randomNumber == 1) {
        document.querySelectorAll("img")[diceNum].setAttribute("src", "./images/dice1.png");
    }
    else if (randomNumber == 2) {
        document.querySelectorAll("img")[diceNum].setAttribute("src", "./images/dice2.png");
    }
    else if (randomNumber == 3) {
        document.querySelectorAll("img")[diceNum].setAttribute("src", "./images/dice3.png");
    }
    else if (randomNumber == 4) {
        document.querySelectorAll("img")[diceNum].setAttribute("src", "./images/dice4.png");
    }
    else if (randomNumber == 5) {
        document.querySelectorAll("img")[diceNum].setAttribute("src", "./images/dice5.png");
    }
    else {
        document.querySelectorAll("img")[diceNum].setAttribute("src", "./images/dice5.png");
    }
}

function winner() {
    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
    }
    else if (randomNumber2 > randomNumber1) {
        document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
    }
    else {
        document.querySelector("h1").innerHTML = "Draw!";
    }
}

diceRound(randomNumber1, 0);
diceRound(randomNumber2, 1);
winner();