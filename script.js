let playerScore = 0;
let computerScore = 0;
let ties = 0; 

const main = document.querySelector("main");
const playerPoints = document.querySelector("#playerPoints");
const computerPoints = document.querySelector("#computerPoints");
const tieAmount = document.querySelector("#tieAmount");

const playerSelection = document.querySelectorAll('.play');    
playerSelection.forEach((button) => {
    button.addEventListener('click', game);
}) 
let playerSelectionDisplay = document.querySelector("#playerSelection");
let computerSelectionDisplay = document.querySelector("#computerSelection");

function game() {
    roundResult = round(this.id);
    if (roundResult == "player") playerScore++;
    else if (roundResult == "computer") computerScore++;
    else ties++;

    playerPoints.textContent = `Your score: ${playerScore}`;
    tieAmount.textContent = `Ties: ${ties}`;
    computerPoints.textContent = `Computer score: ${computerScore}`;

    playerSelectionDisplay.textContent = this.id;
    computerSelectionDisplay.textContent = computerSelection;

    if (playerScore >= 5) {
        playerSelection.forEach((button) => {
            button.removeEventListener('click', game);
        });
        hideScores();
        displayWinner("player");
        return;
    }
    if (computerScore >= 5) {
        playerSelection.forEach((button) => {
            button.removeEventListener('click', game);
        });
        hideScores();
        displayWinner("computer");
        return;
    }
}

function hideScores() {
    roundResult = document.querySelector("#roundResult");
    scores = document.querySelector("#scores");

    roundResult.style.display = "none";
    scores.style.display = "none";
}

function displayWinner(winner) {
    const gameResult = document.createElement('div');
    
    if (winner === "player") {
        gameResult.textContent = "Congratulations! You won!"
    }
    if (winner === "computer") {
        gameResult.textContent = "You lost this time! Don't give up!"
    }

    main.appendChild(gameResult);
}

function computerPlay() {
    let plays = ["Rock", "Paper", "Scissors"];
    let selection = plays[Math.floor(Math.random() * plays.length)];
    computerSelection;
    return selection
}    

function round(playerSelection) {
    const showResults = document.querySelector("#roundResult")

    computerSelection = computerPlay();
    
    if (playerSelection == computerSelection) {
        showResults.textContent = "It's a tie!"
        return "tie";
    }
    if (playerSelection == "Rock" && computerSelection == "Scissors") {
        showResults.textContent = `You won! ${playerSelection} beats ${computerSelection}`
        return "player";
    }
    if (playerSelection == "Rock" && computerSelection == "Paper") {
        showResults.textContent = `You lose! ${computerSelection} beats ${playerSelection}`
        return "computer";
    }
    if (playerSelection == "Paper" && computerSelection == "Rock") {
        showResults.textContent = `You won! ${playerSelection} beats ${computerSelection}`
        return "player";
    }
    if (playerSelection == "Paper" && computerSelection == "Scissors") {
        showResults.textContent = `You lose! ${computerSelection} beats ${playerSelection}`
        return "computer";
    }
    if (playerSelection == "Scissors" && computerSelection == "Paper") {
        showResults.textContent = `You won! ${playerSelection} beats ${computerSelection}`
        return "player";
    }
    if (playerSelection == "Scissors" && computerSelection == "Rock") {
        showResults.textContent = `You lose! ${computerSelection} beats ${playerSelection}`
        return "computer";
    } 
}

