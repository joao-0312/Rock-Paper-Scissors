function computerPlay() {
    let plays = ["rock", "paper", "scissors"];
    return plays[Math.floor(Math.random() * plays.length)];
}

function round() {
    let playerSelection = "";
    while (playerSelection == "") {
        playerSelection = prompt("Rock, Paper, or Scissors?");
    }

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerPlay();
    
    playerPoints = 0;
    computerPoints = 0;
    
    if (playerSelection === computerSelection) {
        console.log("It's a tie!")
        return "tie";
    }
    if (playerSelection == "rock" && computerSelection == "scissors") {
        console.log(`You won! ${playerSelection} beats ${computerSelection}`)
        return "player";
    }
    if (playerSelection == "rock" && computerSelection == "paper") {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`)
        return "computer";
    }
    if (playerSelection == "paper" && computerSelection == "rock") {
        console.log(`You won ${playerSelection} beats ${computerSelection}`)
        return "player";
    }
    if (playerSelection == "paper" && computerSelection == "scissors") {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`)
        return "computer";
    }
    if (playerSelection == "scissors" && computerSelection == "paper") {
        console.log(`You won ${playerSelection} beats ${computerSelection}`)
        return "player";
    }
    if (playerSelection == "scissors" && computerSelection == "rock") {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`)
        return "computer";
    } 
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let ties = 0;

    for (let i = 0; i < 5; i++) {
        let result = round();
        if (result == "player") playerScore++
        else if (result == "computer") computerScore++
        else ties++
    }

    if (playerScore > computerScore) return console.log("You won the game!")
    else if (playerScore < computerScore) return console.log("You lost the game!")
    else return console.log("The game is tied!")
}

game();