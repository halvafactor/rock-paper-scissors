let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const number = Math.floor(Math.random() * 3);
    switch(number) {
        case 0:
            return "rock";
        case 1: 
            return "paper";
        case 2:
            return "scissors";
    }
}

function getHumanChoice() {
    return window.prompt("Rock, paper, or scissors?");
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

for (let i = 0; i < 5; i++) {
    playGame();
}

if (humanScore > computerScore) {
    console.log("You win!");
} else {
    console.log("You lose.");
}