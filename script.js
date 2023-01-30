let playerScore = 0;
let computerScore = 0;
const winningScore = 5;


function playRound() {
   const rockPaperScissors = ['rock', 'paper', 'scissors'];
   function getComputerChoice() {
       return rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)];
   } 
   let computerSelection = getComputerChoice();

   let selectionText = document.getElementById('compSelection');
   let roundResult = document.getElementById('roundResult');
   

    if (computerSelection == "rock" && playerSelection == "scissors") {
        selectionText.textContent= "Computer Selection: Rock";
        roundResult.textContent= "Rock beats scissors. You lose this round!";
        computerScore++;
    } else if (computerSelection == "rock" && playerSelection == "paper") {
        selectionText.textContent= "Computer Selection: Rock";
        roundResult.textContent= "Paper beats rock. You win this round!";
        playerScore++;
    } else if (computerSelection == "paper" && playerSelection == "rock") {
        selectionText.textContent= "Computer Selection: Paper";
        roundResult.textContent= "Paper beats rock. You lose this round!";
        computerScore++;
    } else if (computerSelection == "paper" && playerSelection == "scissors") {
        selectionText.textContent = "Computer Selection: Paper";
        roundResult.textContent= "Scissors beats paper. You win this round!";
        playerScore++;
    } else if (computerSelection == "scissors" && playerSelection == "rock") {
        selectionText.textContent= "Computer Selection: Scissors";
        roundResult.textContent= "Rock beats scissors. You win this round!";
        playerScore++;
    } else if (computerSelection == "scissors" && playerSelection == "paper") {
        selectionText.textContent= "Computer Selection: Scissors";
        roundResult.textContent= "Scissors beat paper. You lose this round!";
        computerScore++;
    } else {
        selectionText.textContent= "It's a tie!";
        roundResult.textContent= "";
    }

    updateScore();
}


function rockClick() {
    playerSelection = 'rock';
    playRound();
    determineWinner();
}

function paperClick() {
    playerSelection = 'paper';
    playRound();
    determineWinner();
}

function scissorsClick() {
    playerSelection = 'scissors';
    playRound();
    determineWinner();
}

let plyrScore = document.getElementById('pScore');
let compScore = document.getElementById('cScore');
plyrScore.innerHTML = "Player Score: " + playerScore;
compScore.innerHTML = "Computer Score: " + computerScore

//add event listeners for 3 buttons that will call the above playRound function when clicked
const btnRock = document.querySelector('#btnR');
btnRock.addEventListener('click', rockClick);

const btnPaper = document.querySelector('#btnP');
btnPaper.addEventListener('click', paperClick);

const btnScissors = document.querySelector('#btnS');
btnScissors.addEventListener('click', scissorsClick);

function updateScore() {
    let plyrScore = document.getElementById('pScore');
    let compScore = document.getElementById('cScore');
    plyrScore.innerHTML = "Player Score: " + playerScore;
    compScore.innerHTML = "Computer Score: " + computerScore;
}

function determineWinner () {
    if (playerScore == winningScore) {
            let pWin = document.createElement('div');
            pWin.classList.add('playerWin');
            pWin.textContent = 'YOU ARE THE WINNER!';

            let container = document.querySelector('#container');
            container.appendChild(pWin);
            //remove button functionality once winner determined
            btnRock.removeEventListener('click', rockClick);
            btnPaper.removeEventListener('click', paperClick);
            btnScissors.removeEventListener('click', scissorsClick);
    } else if (computerScore == winningScore) {
            let cWin = document.createElement('div');
            cWin.classList.add('computerWin');
            cWin.textContent = 'YOU ARE THE LOSER!';

            let scoreContainer = document.querySelector('#scoreContainer');
            container.appendChild(cWin);
            
            btnRock.removeEventListener('click', rockClick);
            btnPaper.removeEventListener('click', paperClick);
            btnScissors.removeEventListener('click', scissorsClick);
    }
}
