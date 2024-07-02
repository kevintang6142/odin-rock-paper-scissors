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