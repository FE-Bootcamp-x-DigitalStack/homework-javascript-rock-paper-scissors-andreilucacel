function playgame(playerChoice) {
  choice = ["rock", "paper", "scissors"];
  let resultMessage;
  let computerChoice = choice[Math.floor(Math.random() * 3)];
  if (playerChoice === computerChoice) {
    resultMessage = `It's a draw! You both chose ${playerChoice}`;
  } else if (
    (playerChoice == "paper" && computerChoice == "rock") ||
    (playerChoice == "rock" && computerChoice == "scissors") ||
    (playerChoice == "scissors" && computerChoice == "paper")
  ) {
    resultMessage = `Congratulations, you won! ${playerChoice} beats ${computerChoice}`;
  } else {
    resultMessage = `Sorry, the computer won! ${computerChoice} beats ${playerChoice}`;
  }
  document.getElementById("result").textContent = resultMessage;
}
