let humanScore = 0, computerScore = 0;

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", e => {
        playRound(button.idName, getComputerChoice());
    })
});

const playerScoreText = document.querySelector("#player-score");
const computerScoreText = document.querySelector("#computer-score");
const messageText = document.querySelector("#message");

function getComputerChoice() {
    let r = Math.random() * 3;
    if (r < 1) {
        return "Rock";
    }
    else if (r < 2) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        messageText.textContent = "Tie!";
    }
    else {
        if (humanChoice === "Rock") {
            if (computerChoice === "Scissors") {
                messageText.textContent = "You win! Rock beats scissors.";
                humanScore++;
            }
            else {
                messageText.textContent = "You lose! Paper beats rock.";
                computerScore++;
            }
        }
        else if (humanChoice === "Paper") {
            if (computerChoice === "Rock") {
                messageText.textContent = "You win! Paper beats rock.";
                humanScore++;
            }
            else {
                messageText.textContent = "You lose! Scissors beats paper.";
                computerScore++;
            }
        }
        else {
            if (computerChoice === "Paper") {
                messageText.textContent = "You win! Scissors beats paper.";
                humanScore++;
            }
            else {
                messageText.textContent = "You lose! Rock beats scissors.";
                computerScore++;
            }
        }
    }
    playerScoreText.textContent = `Your Score: ${humanScore}`;
    computerScoreText.textContent = `Computer's Score: ${computerScore}`;
}