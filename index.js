function getcomputerChoice(){
let choices = [ 'rock' , 'paper', 'scissors']
let computer = choices[Math.floor(Math.random()*choices.length)];
return computer;
}
let Pscore =0;
let Cscore =0;

function playRound(playerSelection, computerSelection){

 


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