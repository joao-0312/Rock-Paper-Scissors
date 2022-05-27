function computerPlay() {
    let plays = ["Rock", "Paper", "Scissors"];
    return plays[Math.floor(Math.random() * plays.length)];
}

const playerSelection = document.querySelectorAll('.play');    
playerSelection.forEach((button) => {
    button.addEventListener('click', () => {
        round(button.id);
    });
})     

function round(playerSelection) {
    const showResults = document.querySelector("#roundResult")

    computerSelection = computerPlay();
    
    playerPoints = 0;
    computerPoints = 0;
    
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

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let ties = 0;
    
    //for (let i = 0; i < 5; i++) {
        //let result = round();
        //if (result == "player") playerScore++
        //else if (result == "computer") computerScore++
        //else ties++
    //}

    if (playerScore > computerScore) return console.log("You won the game!")
    else if (playerScore < computerScore) return console.log("You lost the game!")
    else return console.log("The game is tied!")
}

