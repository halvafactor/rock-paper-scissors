console.log("hello, world");

function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        return "rock";
    }
    else if (computerChoice === 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

console.log(getComputerChoice());

function getHumanChoice() {
    const humanChoice = window.prompt("Rock, paper, or scissors?");
}

console.log(getHumanChoice());