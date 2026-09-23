let humanScore = 0;
let computerScore = 0;
let message;
const scoreCard = document.querySelector("div");
let scoreText = document.createElement("p");
let messageText = document.createElement("p");
let winnerText = document.createElement("p");

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

function playRound(playerSelection, computerChoice) {
    
    if (playerSelection === computerChoice) {
        message = "You tie this round.";
        return "tie";
    }

    else if (playerSelection === "rock" && computerChoice === "paper") {
        message = "Paper beats rock, you lose this round.";
        return "computer";
    }

    else if (playerSelection === "rock" && computerChoice === "scissors") {
        message = "Rock beats scissors, you win this round!";
        return "human";
    }

    else if (playerSelection === "paper" && computerChoice === "rock") {
        message = "Paper beats rock, you win this round!"
        return "human";
    }

    else if (playerSelection === "paper" && computerChoice === "scissors") {
        message = "Scissors beat paper, you lose this round."
        return "computer";
    }

    else if (playerSelection === "scissors" && computerChoice === "rock") {
        message = "Rock beats scissors, you lose this round."
        return "computer";
    }

    else if (playerSelection === "scissors" && computerChoice === "paper") {
        message = "Scissors beat paper, you win this round!";
        return "human";
    }
}

const btns = document.querySelectorAll("button");
btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const playerSelection = e.target.id;
        const computerChoice = getComputerChoice();
        
        const result = playRound(playerSelection, computerChoice);
        if (result === "human") {
            humanScore++;
        } else if (result === "computer") {
            computerScore++;
        }

        scoreCard.appendChild(scoreText);
        scoreText.textContent = `Your score: ${humanScore}, Computer score: ${computerScore}`;
        scoreCard.appendChild(messageText);
        messageText.textContent = message;

        if (humanScore === 5) {
            scoreCard.appendChild(winnerText);
            winnerText.textContent = "You win!"
        } else if (computerScore === 5) {
            scoreCard.appendChild(winnerText);
            winnerText.textContent = "Computer wins!"
        }
        
        console.log(message);
        console.log(`Your score: ${humanScore}, Computer score: ${computerScore}`)
        console.log(`human choice ${playerSelection}, computer choice ${computerChoice}`); // just so I can check game logic
    });
});