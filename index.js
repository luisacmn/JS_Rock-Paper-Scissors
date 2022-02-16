const btns = document.querySelectorAll(".btn")
const playerTxt = document.querySelector(".player-txt")
const computerTxt = document.querySelector(".computer-txt")
const playBtn = document.querySelector(".play-btn");
const pcBtn = document.querySelectorAll(".pc-btn")
const resultTxt = document.querySelector(".main-result")
const playerBox = document.querySelector(".player-box")
const playerImg = document.querySelector(".player-img")
const computerBox = document.querySelector(".computer-box")
const computerImg = document.querySelector(".computer-img")
const pscore = document.querySelector(".player-score")
const cscore = document.querySelector(".computer-score")


btns.forEach (function (i) {                                            //Para cada botão btn do Player, adicionar a função click
    i.addEventListener("click", userPlay)
})

pcBtn.forEach (function (i) {                                           //Desativar todos os botões do pc
    i.disabled = true;
})                                         

let playerSelection =""
let computerSelection =""

const hands = ["Rock", "Paper", "Scissors"] 

let newScoreP = 0;
let newScoreC = 0;



//PLAYER
function userPlay(event){     
    playerSelection = event.target.value;                           //função click detecta o valor selecionado e escreve no parágrafo
    playerTxt.innerHTML = "You chose " + playerSelection;


    if(playerSelection === "Rock") {
        playerImg.src="images/rock.png";
        playerBox.appendChild(playerImg)
    } else if (playerSelection === "Paper") {
        playerImg.src="images/paper.png";
        playerBox.appendChild(playerImg)
    } else if (playerSelection === "Scissors") {
        playerImg.src="images/scissor.png";
        playerBox.appendChild(playerImg)
    }
} 



//COMPUTER
function computerPlay() {
    const randomNumber = Math.floor(Math.random() * 3);
    computerSelection = hands[randomNumber];
    computerTxt.innerHTML="Computer chose " + computerSelection;

    if(computerSelection === "Rock") {
        computerImg.src="images/rock.png";
        computerBox.appendChild(computerImg)
    } else if (computerSelection === "Paper") {
        computerImg.src="images/paper.png";
        computerBox.appendChild(computerImg)
    } else if (computerSelection === "Scissors") {
        computerImg.src="images/scissor.png";
        computerBox.appendChild(computerImg)
    }
}


//GAME
playBtn.addEventListener("click", playRound);

function playRound() {
    computerPlay();
    if (
        (playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissors" && computerSelection === "Paper")
        ) {
        resultTxt.innerHTML = "YOU WIN!";
        newScoreP++;                                            //incrementa o score
        pscore.innerHTML = "Score: " + newScoreP;               //escreve o novo socre no local seleciondo
    } else if (playerSelection === computerSelection) {
        resultTxt.innerHTML = "Its a TIE!";
    } else {
        resultTxt.innerHTML = "YOU LOSE!";
        newScoreC++;
        cscore.innerHTML = "Score: " + newScoreC;
    }
}















