let humanScore = 0, computerScore = 0;

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

function getPlayerChoice(message = "Rock, paper, or scissors? (r/p/s)") {
    switch(prompt(message)) {
        case "r":
            return "Rock";
            break;
        case "p":
            return "Paper";
            break;
        case "s":
            return "Scissors";
            break;
        default:
            return getPlayerChoice("Try again. Rock, paper, or scissors? (r/p/s)");
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("Tie!");
    }
    else {
        if (humanChoice === "Rock") {
            if (computerChoice === "Scissors") {
                console.log("You win! Rock beats scissors.");
                humanScore++;
            }
            else {
                console.log("You lose! Paper beats rock.");
                computerScore++;
            }
        }
        else if (humanChoice === "Paper") {
            if (computerChoice === "Rock") {
                console.log("You win! Paper beats rock.");
                humanScore++;
            }
            else {
                console.log("You lose! Scissors beats paper.");
                computerScore++;
            }
        }
        else {
            if (computerChoice === "Paper") {
                console.log("You win! Scissors beats paper.");
                humanScore++;
            }
            else {
                console.log("You lose! Rock beats scissors.");
                computerScore++;
            }
        }
    }
}
