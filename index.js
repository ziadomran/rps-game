let choices = [ 'rock' , 'paper', 'scissors'] // array of choices

function getcomputerChoice(){
    let computer = choices[Math.floor(Math.random()*choices.length)];
    return computer; // Random choice by a computer, from Rock, Paper, Scissors
}
let playerScore =0; // Player Score starts at 0
let computerScore =0; // Computer score starts at 0
let round = 0; // Number of rounds

function playRound(playerSelection, computerSelection){
// This section is everything that happens in one round.
// We check what the user writes vs what the computer has
    round++;
     select.textContent = `You chose ${playerSelection}, Computer chose ${computerSelection}`


    if ( (playerSelection === 'rock' && computerSelection === 'scissors' ) || 
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        playerSelection === 'paper' && computerSelection === 'rock' )
        {
        console.log("Player wins!")
        playerScore++;
        roundResult.textContent = `Round ${round}: Player wins!`
        resultPara.textContent  = `Score: Player ${playerScore} - ${computerScore} Computer`;

    }
    else if ( (playerSelection === 'rock' && computerSelection === 'paper') || 
    (playerSelection === 'scissors' && computerSelection === 'rock') ||
    playerSelection === 'paper' && computerSelection === 'scissors' ) 
    {
        console.log("Player loses!")
        computerScore++;
        roundResult.textContent = `Round ${round}: Computer wins!`
        resultPara.textContent =  `Score: Player ${playerScore} - ${computerScore} Computer`;
    } 
    else if (playerSelection === computerSelection)
    {
        console.log("Tie!")
        roundResult.textContent = `Round ${round}: Tie!`
    }
    else console.log("You didn't select an appropriate hand")
    
gameOver();
}

function gameOver(){
    if (playerScore === 5 || computerScore === 5)
    {
        roundResult.textContent = findWinner()
        resultPara.textContent =  `GG END`;
        //When game is over, disable buttons
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
        finalResult.textContent = (`Final Score is: Player ${playerScore} - ${computerScore} Computer`)
    }
}

function findWinner(){
    if (playerScore === 5){
        return "Player Wins"
    }
    else if (computerScore === 5)
    return "Computer Wins"
}

//Creating UI for the game
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const reset = document.querySelector('#reset');

rock.addEventListener('click', ()  => {
    playRound('rock', getcomputerChoice())}
)
paper.addEventListener('click', () => {playRound('paper', getcomputerChoice())}
)
scissors.addEventListener('click', () =>{
    playRound('scissors', getcomputerChoice())}
)

reset.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    round = 0;
    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
    select.textContent =""
    roundResult.textContent = '';
    resultPara.textContent = '';
    finalResult.textContent = '';
})

const div = document.createElement('div');
const roundResult = document.createElement('p');
const resultPara = document.createElement('p');
const select = document.createElement('p');
const finalResult =  document.createElement('p')

document.body.appendChild(div);
div.appendChild(select);
div.appendChild(roundResult);
div.appendChild(resultPara);
div.appendChild(finalResult);
