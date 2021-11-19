//initialises variables
let playerchoice;
let computerchoice;
let gameResult;




//computerchoice
function computerPlay() {
    const computerPick = Math.random();
    computerchoice = (computerPick < .34) ? "rock" : (computerPick < .67) ? "paper" : "scissors";
    return computerchoice;
}



//returns a string with either "tie", "player wins", or "computer wins"
function checkWinner(player1, player2) {
    if (player1 === player2) {
        gameResult = "tie";
    }
    else if (player1 === "rock") {
        gameResult = (player2 === "paper") ? "computer wins" : "player wins";
    }
    else if (player1 === "paper") {
        gameResult = (player2 === "scissors") ? "computer wins" : "player wins";
    }
    else if (player1 === "scissors") {
        gameResult = (player2 === "rock") ? "computer wins" : "player wins";
    }
    return gameResult;
}




//Runs a round with the player selection, runs the computer function, and the print function
function game(player) { 
    computerPlay();
    checkWinner(player, computerchoice);
    printResults();
}



//INPUTS:
//On button presses
//Set playerchoice -> rock, run a game() with playerchoice
const rockbtn = document.querySelector('#rockbtn');
rockbtn.addEventListener('click', () => {
    playerchoice = "rock";
    game(playerchoice);
});

//Set playerchoice -> paper, run a game() with playerchoice
const paperbtn = document.querySelector('#paperbtn');
paperbtn.addEventListener('click', () => {
    playerchoice = "paper";
    game(playerchoice);
});

//Set playerchoice -> scissors, run a game() with playerchoice
const scissorsbtn = document.querySelector('#scissorsbtn');
scissorsbtn.addEventListener('click', () => {
    playerchoice = "scissors";
    game(playerchoice);
});







const showp = document.querySelector(`#showp`);
const showcomp = document.querySelector(`#showcomp`);
const showres = document.querySelector(`#showres`);

//PRINTS THE PLAYER CHOICE
const showPlayer = (userchoice) => {
    showp.textContent = userchoice;
}
//PRINTS THE COMPUTER CHOICE
const showComputer = (userchoice) => {  
    showcomp.textContent = userchoice;
};
//PRINTS THE RESULTS
const showResult = (afterGame) => {
    showres.textContent = afterGame;
}

//RUNS THE PRINT FUNCTIONS
const printResults = () => {
    showComputer(computerchoice);
    showPlayer(playerchoice);
    showResult(gameResult);
}