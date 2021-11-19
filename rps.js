let playerchoice;
let computerchoice;
let gameResult;

//When ran, returns rock, paper, or scissors
function computerPlay() {
    const computerPick = Math.random();
    computerchoice = (computerPick < .34) ? "rock" : (computerPick < .67) ? "paper" : "scissors";
    return computerchoice;
}

//returns a string with either "tie", "player wins", or "computer wins"
function checkWinner(player1, player2) {
    if (player1 === player2) return "tie";
    else if (player1 === "rock") {
        return (player2 === "paper") ? "computer wins" : "player wins";
    }
    else if (player1 === "paper") {
        return (player2 === "scissors") ? "computer wins" : "player wins";
    }
    else if (player1 === "scissors") {
        return (player2 === "rock") ? "computer wins" : "player wins";
    }
}

//Runs a round with the player selection, runs the computer function, and the print function
function game(player) {
    computerPlay();
    gameResult = checkWinner(player, computerchoice);
    printResults();
}

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

//PRINTS THE PLAYER CHOICE
const showPlayer = (userchoice) => {
    const showp = document.querySelector(`#showp`);
    showp.textContent = userchoice;
}
//PRINTS THE COMPUTER CHOICE
const showComputer = (userchoice) => {
    const showcomp = document.querySelector(`#showcomp`);
    showcomp.textContent = userchoice;
};
//PRINTS THE RESULTS
const showResult = (afterGame) => {
    const showres = document.querySelector(`#showres`);
    showres.textContent = afterGame;
}

//RUNS THE PRINT FUNCTIONS
const printResults = () => {
    showComputer(computerchoice);
    showPlayer(playerchoice);
    showResult(gameResult);
}