let Score = JSON.parse(localStorage.getItem("score")) || {
    wins: 0,
    losses: 0,
    ties: 0,
};
 updateScore();
let result = "";

function resetGame() {
    localStorage.removeItem("score");
    Score = {
        wins: 0,
        losses: 0,
        ties: 0,
    };
    updateScore();
    result = "";
}
function updateScore() {
    document.querySelector(
        ".score-message"
    ).innerText = `Wins: ${Score.wins}, Losses: ${Score.losses}, Ties: ${Score.ties}`;
}
function computerMove() {
    const moves = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * moves.length);
    return moves[randomIndex];
}

function playGame(playerChoice) {
    const computerChoice = computerMove();
    if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "You win!";
        Score.wins++;
    } else if (playerChoice === computerChoice) {
        result = "It's a tie!";
        Score.ties++;
    } else {
        result = "You lose!";
        Score.losses++;
    }
    localStorage.setItem("score", JSON.stringify(Score));
    document.querySelector(".result-message").innerHTML = result;
    document.querySelector('.Move-message').innerHTML = `You
    <img src="./images/${playerChoice}.png" class="move-icon alt = "${playerChoice}">
    <img src="images/${computerChoice}.png" class="move-icon alt="${computerChoice}">
    Computer`;
    
}

   