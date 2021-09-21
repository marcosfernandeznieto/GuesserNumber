let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
    return Math.floor(Math.random()*(9-0)+0);
}

function compareGuesses(humanGuess, computerGuess, targetNumber) {
    var diffHuman = getAbsoluteDistance(humanGuess,targetNumber);
    var diffComputer = getAbsoluteDistance(computerGuess,targetNumber);

    if (diffHuman>diffComputer) {
        return false;
    } else {
        return true;
    }
}

function updateScore(winner) {
    if (winner=="human") {
        humanScore++;
    } else {
        computerScore++;
    }
}

function advanceRound() {
    currentRoundNumber++;
}

function getAbsoluteDistance(num1, num2) {
    return Math.abs(num1-num2);
}