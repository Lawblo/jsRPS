//initialises variables
let playerchoice;
let computerchoice;
let gameResult;
let playerScore = 0;
let computerScore = 0;



//computerchoice
function computerPlay() {
    const computerPick = Math.random();
    computerchoice = (computerPick < .34) ? "rock" : (computerPick < .67) ? "paper" : "scissors";
    return computerchoice;
}



//returns a string with either "tie", "player wins", or "computer wins"
function checkWinner(player1, player2) {
    if (player1 === player2) {
        return gameResult = "tie";
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

let isWinner = (c, d) => {
    if ((c < 5) && (d < 5)) return;
    (c === 5) ? alert("PLAYER WINS") : alert("COMPUTER WINS");
    computerScore = 0;
    playerScore = 0;
};



//Runs a round with the player selection, runs the computer function, and the print function
function game(player) {
    computerPlay();
    checkWinner(player, computerchoice);
    addScores(gameResult);
    isWinner(playerScore, computerScore);
    printResults();
    updatescores();
}


let addScores = (a) => {
    if (a === "tie") return;
    else if (a === "player wins") playerScore = playerScore + 1;
    else if (a === "computer wins") computerScore = computerScore + 1;
};



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


let updatescores = () => {
const player1pts = document.querySelector("#player1pts");
player1pts.textContent = playerScore;
const player2pts = document.querySelector("#player2pts");
player2pts.textContent = computerScore;
};



const newgame = document.querySelector("#newgame");
newgame.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    updatescores();
});

