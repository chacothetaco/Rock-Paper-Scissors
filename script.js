let playerScore = 0;
let computerScore = 0;

//defines the array
const rockPaperScissors = ['rock', 'paper', 'scissors'];
//creates a function that randomly chooses an item from the above array and displays it in the console
function getComputerChoice() {
    return rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)];
} 

//Write a function that takes the user input (Rock, Paper, or Scissors) and compares to the randomized computer choice (Rock, Paper, pr Scissors). The results and string output could be as follows:
//let playerSelection = "";
let computerSelection = getComputerChoice();
console.log(computerSelection);

// function playRound(playerSelection, computerSelection) {
function playRound() {
    //let playerSelection = playerSelection.toCase();
   // let computerSelection = computerSelection.toCase();
    console.log(playerSelection);
    console.log(computerSelection);
    if (playerSelection == computerSelection) {
        return "It's a tie!";
    } else if (computerSelection == "rock" && playerSelection == "scissors") {
        return "You lose!";
    } else if (computerSelection == "rock" && playerSelection == "paper") {
        return "You win!";
    } else if (computerSelection == "paper" && playerSelection == "rock") {
        return "You lose!";
    } else if (computerSelection == "paper" && playerSelection == "scissors") {
        return "You win!";
    } else if (computerSelection == "scissors" && playerSelection == "rock") {
        return "You win!";
    } else if (computerSelection == "scissors" && playerSelection == "paper") {
        return "You lose!";
    } else {
        return "Incorrect selection. User must input 'Rock', 'Paper', or 'Scissors'.";
    }
}

//add event listeners for 3 buttons that will call the above playRound function when clicked
//i need the event listener to give value to playerSelection depending on which button is pressed
//potential option to create new function that calls playRound function
const btnRock = document.querySelector('#btnR');
btnRock.addEventListener('click', () => {
    playerSelection = 'rock';
    playRound();
})
const btnPaper = document.querySelector('#btnP');
btnPaper.addEventListener('click', () => {
    playerSelection = 'paper';
    playRound();
});
const btnScissors = document.querySelector('#btnS');
btnScissors.addEventListener('click', () => {
    playerSelection = 'scissors';
    playRound();
});

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
