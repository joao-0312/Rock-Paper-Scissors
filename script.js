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
    
    if (playerSelection === computerSelection) return "tie";
    if (playerSelection == "rock" && computerSelection == "scissors") return "player";
    if (playerSelection == "rock" && computerSelection == "paper") return "computer";
    if (playerSelection == "paper" && computerSelection == "rock") return "player";
    if (playerSelection == "paper" && computerSelection == "scissors") return "computer";
    if (playerSelection == "scissors" && computerSelection == "paper") return "player";
    if (playerSelection == "scissors" && computerSelection == "rock") return "computer"; 
}
