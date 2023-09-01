function getcomputerChoice(){
let choices = [ 'rock' , 'paper', 'scissors']
let computer = choices[Math.floor(Math.random()*choices.length)];
return computer;
}

function round(playerSelection, computerSelection){

    if ( playerSelection === 'rock' && computerSelection === 'scissors' ){
        alert("Player wins!")

    }
    else if (playerSelection === 'rock' && computerSelection === 'paper')
    {
        alert("Player loses!")
    } 




}

const playerSelection = (prompt("Say your input: ")).toLowerCase();
const computerSelection = getcomputerChoice()

round(playerSelection, computerSelection)