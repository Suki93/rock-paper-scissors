
const playerSelection = "rock";


let player = 0;
let computer = 0;
let gamesPlayed = 0; 

function computerPlay() {
    arr = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random() * arr.length);
    return arr[random];
}

function playRound(playerSelection) {
    let computerSelection = computerPlay();
    if (playerSelection == computerSelection) {
        return "TIE";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        player++;
        return "Player wins!";
    } else if (computerSelection == "rock" && playerSelection == "scissors") {
        computer++;
        return "Computer wins!";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        computer++;
        return "Computer wins!";
    } else if (computerSelection == "rock" && playerSelection == "paper") {
        player++;
        return "Player wins!"; 
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        player++;
        return "Player wins!";
    } else if (computerSelection == "scissors" && playerSelection == "paper") {
        player++;
        return "Computer wins!";
    } else {
        return "Put in scissors, rock or paper";
    }
}





    for(let i = 0; i < 5; i++) {
        playRound(playerSelection); 
        console.log(i, playRound(playerSelection));
    }
