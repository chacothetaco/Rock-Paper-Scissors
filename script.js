let playerScore = 0;
let computerScore = 0;


function playRound() {
   const rockPaperScissors = ['rock', 'paper', 'scissors'];
   function getComputerChoice() {
       return rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)];
   } 
   let computerSelection = getComputerChoice();

    console.log(playerSelection);
    console.log(computerSelection);
    if (playerSelection == computerSelection) {
        return "It's a tie!";
    } else if (computerSelection == "rock" && playerSelection == "scissors") {
        //return "You lose!";
        computerScore++;
    } else if (computerSelection == "rock" && playerSelection == "paper") {
        //return "You win!";
        playerScore++;
    } else if (computerSelection == "paper" && playerSelection == "rock") {
        //return "You lose!";
        computerScore++;
    } else if (computerSelection == "paper" && playerSelection == "scissors") {
        //return "You win!";
        playerScore++;
    } else if (computerSelection == "scissors" && playerSelection == "rock") {
        //return "You win!";
        playerScore++;
    } else if (computerSelection == "scissors" && playerSelection == "paper") {
        //return "You lose!";
        computerScore++;
    } else {
        return "Incorrect selection. User must input 'Rock', 'Paper', or 'Scissors'.";
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
    if (playerScore == 5) {
            let pWin = document.createElement('div');
            pWin.classList.add('playerWin');
            pWin.textContent = 'YOU WIN!';

            let container = document.querySelector('#container');
            container.appendChild(pWin);
            //remove button functionality once winner determined
            btnRock.removeEventListener('click', rockClick);
            btnPaper.removeEventListener('click', paperClick);
            btnScissors.removeEventListener('click', scissorsClick);
    } else if (computerScore == 5) {
            let cWin = document.createElement('div');
            cWin.classList.add('computerWin');
            cWin.textContent = 'YOU LOSE!';

            let container = document.querySelector('#container');
            container.appendChild(cWin);
            
            btnRock.removeEventListener('click', rockClick);
            btnPaper.removeEventListener('click', paperClick);
            btnScissors.removeEventListener('click', scissorsClick);
    }
}



//Create a new function called game() that calls the playRound function
 //function game() {
    // create loop that plays 5 rounds of playRound and keeps score
    //for (let i = 0; i < 5; i++) {
      //  const computerSelection = getComputerChoice();
     //   const playerSelection = prompt("Rock, Paper, or Scissors?");

     //   let roundResult = playRound(playerSelection, computerSelection); 
        //create function or variable that determines score based off of result and logs the cumulative score 
    //    if (roundResult === "You win!") {
    //        playerScore++;
    //        console.log("Player Score: " + playerScore + " Computer Score: " + computerScore);
    //   } else if (roundResult === "You lose!") {
     //       computerScore++;
    //        console.log("Player Score: " + playerScore + " Computer Score: " + computerScore);
    //    } else {
    //        console.log("Player Score: " + playerScore + " Computer Score: " + computerScore);
    //   }
     //   // create a function that returns "Winner" if player wins >= 3 rounds or "Loser" if player wins <= 2 rounds
 //   }
    
 //   if (playerScore < computerScore) {
 //       alert("You lose!" + " Player Score: " + playerScore + " Computer Score: " + computerScore);
 //   } else if (playerScore > computerScore) {
//        alert("You win!" + " Player Score: " + playerScore + " Computer Score: " + computerScore);
//   } else {
 //       alert("It's a tie!" + " Player Score: " + playerScore + " Computer Score: " + computerScore);
 //   }
//  }

//   game();
