function getComputerChoice() {
    const number = Math.floor(Math.random() * 3);
    if (number === 0) {
        return "rock";
    }
    else if (number === 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

/*console.log(getComputerChoice()); -- warning, this was logging a separate value from
computerChoice that playRound() uses, making it seem like the game logic is broken*/

function getHumanChoice() {
    return window.prompt("Rock, paper, or scissors?");
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    
    if (humanChoice === "rock" && computerChoice === "rock") {
        return "You tie.";
    }

    else if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        return `Paper beats rock, you lose. Computer: ${computerScore}, Human: ${humanScore}`;
    }

    else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        return `Rock beats scissors, you win! Computer: ${computerScore}, Human: ${humanScore}`;
    }

    else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        return  `Paper beats rock, you win! Computer: ${computerScore}, Human: ${humanScore}`;
    }

    else if (humanChoice === "paper" && computerChoice === "paper") {
        return "You tie.";
    }

    else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        return `Scissors beat paper, you lose. Computer: ${computerScore}, Human: ${humanScore}`;
    }

    else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        return `Rock beats scissors, you lose. Computer: ${computerScore}, Human: ${humanScore}`;
    }

    else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        return `Scissors beat paper, you win! Computer: ${computerScore}, Human: ${humanScore}`;
    }

    else if (humanChoice === "scissors" && computerChoice === "scissors") {
        return "You tie.";
    }
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

console.log(`human choice ${humanChoice}, computer choice ${computerChoice}`); // just so I can check game logic
console.log(playRound(humanChoice, computerChoice));