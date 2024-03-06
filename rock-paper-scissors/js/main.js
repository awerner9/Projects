// create a function called getComputerChoice that returns 'Rock', 'Paper', or 'Scissors' 

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch(randomNumber) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
    }
}

// write a function that plays one round of rock paper scissors (takes in playerSelection, and computerSelection) 
// then returns a string that declares the winner 

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === 'rock' && computerSelection === 'scissors' ||
        playerSelection === 'paper' && computerSelection === 'rock' ||
        playerSelection === 'scissors' && computerSelection === 'paper') 
    {
        return 'win';
    } 
    else if (playerSelection != computerSelection) 
    {
        return 'lose'; 
    } else {
        return 'tie';
    }
}

// write a function called playGame() that uses the previous function inside to play a five round game and keeps score and reports a winner
function playGame() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 1; i <= 5; i++) {
        let computerSelection = getComputerChoice();
        let playerSelection = prompt("Rock, paper or scissors?");
        let playResult = playRound(playerSelection, computerSelection);
    
        if (playResult === 'win') {
            console.log(`Round ${i}: You Win! ${playerSelection} beats ${computerSelection}`);
            playerScore++;
        } else if (playResult === 'lose') {
            console.log(`Round ${i}: You Lose! ${computerSelection} beats ${playerSelection}`);
            computerScore++;
        } else if (playResult === 'tie') {
            console.log(`Round ${i}: It's a tie! ${playerSelection} does not beat ${computerSelection}`);
        }
    }
    if (computerScore > playerScore) {
        console.log(`Computer wins! Player Score: ${playerScore} Computer Score: ${computerScore}`)
    } else if (playerScore > computerScore) {
        console.log(`Player wins! Player Score: ${playerScore} Computer Score: ${computerScore}`)
    } else {
        console.log(`It's a draw! Player Score: ${playerScore} Computer Score: ${computerScore}`)
    }
}

playGame();