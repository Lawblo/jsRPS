function computerPlay() {
    let computerPick = Math.random();
    return (computerPick < .34) ? "rock" : (computerPick < .67) ? "paper" : "scissors";
}

function playerSelection() {
    let playerChoice = prompt(`Choose rock, paper or scissors`);
    playerChoice = playerChoice.toLowerCase();
    if ((playerChoice === "rock")? playerChoice : (playerChoice === "paper")? playerChoice : (playerChoice === "scissors")? playerChoice : false) {
        return playerChoice;
    }
    else {
        return false;
    }
}


function playRound(player, computer) {
    if (player === false){
        alert("wrong input");
        return "noContest";
    }
    console.log(`Player picked ${player} and the computer picked ${computer}`)
    if (player === computer) {
        console.log("Its a tie");
        return "tie";
    }
    else if (player === "rock" && computer === "paper"){
        console.log(`Computer wins`);
        return "computerWin";
    }
    else if (player === "rock" && computer === "scissors"){
        console.log(`Player wins`);
        return "playerWin";
        
    }
    else if (player === "paper" && computer === "rock"){
        console.log(`Player wins`);
        return "playerWin";
    }
    else if (player === "paper" && computer === "scissors"){
        console.log(`Computer wins`);
        return "computerWin";
    }
    else if (player === "scissors" && computer === "paper"){
        console.log(`Player wins`);
        return "playerWin";
    }
    else if (player === "scissors" && computer === "rock"){
        console.log(`Computer wins`);
        return "computerWin";
    }
}


function game() {
    let playerWins = 0
    ,   computerWins = 0;
    for (i=0; i < 5; i++) {
        console.log(`Round ${i+1}`);

        let result = playRound(playerSelection(),computerPlay());
        if (result === "playerWin") {
            playerWins = playerWins + 1;
        }
        else if (result === "computerWin") {
            computerWins = computerWins + 1;
        }
        else if (result === "tie"){
            i = i - 1;
        }
        else if (result === "noContest"){
            console.log("wrong input");
            i = i - 1;
        }
        console.log(`Score: Player has ${playerWins} wins, computer has ${computerWins} points`);
    }
    if (playerWins > computerWins) {
        console.log(`The player wins with ${playerWins} points against the computer with ${computerWins} points! GOOD JOB!`);
    }
    else if (playerWins < computerWins) {
        console.log(`The player lost with ${playerWins} points against the computer with ${computerWins} points! BAD JOB!`)
    }

}

game();





