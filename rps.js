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

function getHumanChoice() {
    return window.prompt("Rock, paper, or scissors?");
}

let humanScore = 0;
let computerScore = 0;

for (let i = 0; i < 5; i++) {
    playGame();
}

function playGame() {
 
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    let message;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
    
        if (humanChoice === computerChoice) {
            message = "You tie.";
            return "tie";
        }

        else if (humanChoice === "rock" && computerChoice === "paper") {
            message = "Paper beats rock, you lose.";
            return "computer";
        }

        else if (humanChoice === "rock" && computerChoice === "scissors") {
            message = "Rock beats scissors, you win!";
            return "human";
        }

        else if (humanChoice === "paper" && computerChoice === "rock") {
            message = "Paper beats rock, you win!"
            return "human";
        }

        else if (humanChoice === "paper" && computerChoice === "scissors") {
            message = "Scissors beat paper, you lose."
            return "computer";
        }

        else if (humanChoice === "scissors" && computerChoice === "rock") {
            message = "Rock beats scissors, you lose."
            return "computer";
        }

        else if (humanChoice === "scissors" && computerChoice === "paper") {
            message = "Scissors beat paper, you win!";
            return "human";
        }
    }

    const result = playRound(humanChoice, computerChoice); 

    if (result === "human") {
        humanScore++;
    } else if (result === "computer") {
        computerScore++;
    }

    console.log(message);
    console.log(`Your score: ${humanScore}, Computer score: ${computerScore}`)
    console.log(`human choice ${humanChoice}, computer choice ${computerChoice}`); // just so I can check game logic
}


/*console.log(getComputerChoice()); -- warning, this was logging a separate value from
computerChoice that playRound() uses, making it seem like the game logic is broken*/