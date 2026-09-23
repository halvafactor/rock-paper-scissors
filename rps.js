let humanScore = 0;
let computerScore = 0;
const scoreCard = document.getElementById("scoreCard");
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
        return ["tie", "You tie this round."];
    }

    else if (playerSelection === "rock" && computerChoice === "paper") {
        return ["computer", "Paper beats rock, you lose this round."];
    }

    else if (playerSelection === "rock" && computerChoice === "scissors") {
        return ["human", "Rock beats scissors, you win this round!"];
    }

    else if (playerSelection === "paper" && computerChoice === "rock") {
        return ["human", "Paper beats rock, you win this round!"]
    }

    else if (playerSelection === "paper" && computerChoice === "scissors") {
        return ["computer", "Scissors beat paper, you lose this round."]
    }

    else if (playerSelection === "scissors" && computerChoice === "rock") {
        return ["computer", "Rock beats scissors, you lose this round."]
    }

    else if (playerSelection === "scissors" && computerChoice === "paper") {
        return ["human", "Scissors beat paper, you win this round!"]
    }
}

for (const btn of document.querySelectorAll("img")) {
    btn.addEventListener("click", (e) => {
        const playerSelection = e.target.id;
        const computerChoice = getComputerChoice();
        
        const [result, message] = playRound(playerSelection, computerChoice);
        
        if (humanScore === 5 || computerScore === 5) {
            humanScore = 0;
            computerScore = 0;
            messageText.textContent = "";
            winnerText.textContent = "";
            scoreText.textContent = "";
        } else {

            switch (result) {
                case "human": humanScore++; break
                case "computer": computerScore++; break
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
        }
        console.log(e.target);
        console.log(message);
        console.log(`Your score: ${humanScore}, Computer score: ${computerScore}`)
        console.log(`human choice ${playerSelection}, computer choice ${computerChoice}`); // just so I can check game logic
    });
}