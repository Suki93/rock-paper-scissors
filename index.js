let playerScore = 0;
let computerScore = 0;
let gamesPlayed = 0;

document.addEventListener("click", gameSelection);

function gameSelection(event) {
    let element = event.target;
    console.log(event.target)
    let rock = "rock";
    let paper = "paper";
    let scissors = "scissors";
    if (element.classList.contains("picture") && element.id === ("rock")) {
        playRound(rock);
        console.log("submitted rock");
    }
}