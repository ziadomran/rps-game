function getcomputerChoice(){
let choices = [ 'rock' , 'paper', 'scissors'] // array of choices
let computer = choices[Math.floor(Math.random()*choices.length)];
return computer; // Random choice by a computer, from Rock, Paper, Scissors
}
let Pscore =0; // Player Score starts at 0
let Cscore =0; // Computer score starts at 0

function playRound(playerSelection, computerSelection){

 
// This section is everything that happens in one round.
// We check what the user writes vs what the computer has

    if ( (playerSelection === 'rock' && computerSelection === 'scissors' ) || 
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        playerSelection === 'paper' && computerSelection === 'rock' )
        {

        console.log("Player wins!")
        Pscore ++;

    }
    else if ( (playerSelection === 'rock' && computerSelection === 'paper') || 
    (playerSelection === 'scissors' && computerSelection === 'rock') ||
    playerSelection === 'paper' && computerSelection === 'scissors' ) 
    {
        console.log("Player loses!")
        Cscore++;
    } 
    else if (playerSelection === computerSelection)
    {
        console.log("Tie!")
    }
    else console.log("You didn't select an appropriate hand")
}




// playRound(playerSelection, computerSelection)


function game(){


    for (gamesPlayed = 0; gamesPlayed <5; gamesPlayed++){
        const playerSelection = (prompt("Say your input: ")).toLowerCase();
        const computerSelection = getcomputerChoice();
        playRound(playerSelection, computerSelection)
    }
    alert(`Final Score is: Player ${Pscore} - ${Cscore} Computer` )
}

game()