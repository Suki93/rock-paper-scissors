
const playerSelection = "rock";


let player = 3;
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

const result = playRound(playerSelection);
console.log(result);


function game(player, computer) {
 if (player = 3) {
    return "You WIN the game!"
 } else if (computer = 3) {
     return "You LOSE the game!"
 } else {
     return "draw";
 }
} 
let winner = game();
console.log(winner);