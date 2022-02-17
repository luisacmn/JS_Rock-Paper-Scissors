const btns = document.querySelectorAll(".btn")
const playerTxt = document.querySelector(".player-txt")
const computerTxt = document.querySelector(".computer-txt")
const pcBtns = document.querySelectorAll(".pc-btn")
const resultTxt = document.querySelector(".main-result")
const playerBox = document.querySelector(".player-box")
const playerImg = document.querySelector(".player-img")
const computerBox = document.querySelector(".computer-box")
const computerImg = document.querySelector(".computer-img")
const pscore = document.querySelector(".player-score")
const cscore = document.querySelector(".computer-score")
const playContainer = document.querySelector(".play-container")
const playBtn = document.querySelector(".play-btn");
const restartBtn = document.querySelector(".restart-btn")
const game = document.querySelector(".game")
const body = document.querySelector(".body-page")


btns.forEach (function (i) {                                        //For each Player button (btn), add a click function 
    i.addEventListener("click", userPlay)
})

pcBtns.forEach (function (i) {                                       //Disable all the pc buttons
    i.disabled = true;
})                                         

let playerSelection =""                                             //Declare a variable to be changed in the future
let computerSelection =""

const hands = ["Rock", "Paper", "Scissors"]                         //Declare the game options inside and array

let newScoreP = 0;                                                  //Declare a variable to count and change the score
let newScoreC = 0;


//PLAYER
function userPlay(event){     
    playerSelection = event.target.value;                           //The Player selection receive the value of the event(click) target. 
    playerTxt.innerHTML = "You chose " + playerSelection + " !";    //Write this value on the paragraph
    event.target.classList.add("selected")                          //Add a class to target manipulate its style in css when the button is clicked

    if(playerSelection === "Rock") {                                //Execute different actions based on the condition
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
    const randomNumber = Math.floor(Math.random() * 3);                 //Sort a number from the array length. 
    computerSelection = hands[randomNumber];                            //This number will be the index of the array to select an item.
    computerTxt.innerHTML="Computer chose " + computerSelection + "!";

    if(computerSelection === "Rock") {                                  //Execute different actions based on the condition
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
        newScoreP++;                                            //Increment the score
        pscore.innerHTML = "Score: " + newScoreP;               //Write the new score in the selected place
    } else if (playerSelection === computerSelection) {
        resultTxt.innerHTML = "Its a TIE!";
    } else {
        resultTxt.innerHTML = "YOU LOSE!";
        newScoreC++;
        cscore.innerHTML = "Score: " + newScoreC;
    } 

    if(newScoreP === 5 || newScoreC === 5) {
        gameOver()
    } else {
        newRound();  
    }                                               
}


//NEW ROUND 
function newRound(){
    setTimeout(clear,2000)                                  //After 2 seconds, clear image and text 
}

function clear(){
    playerBox.removeChild(playerImg);                       //Remove player image from player box
    computerBox.removeChild(computerImg);                   //Remove computer image from computer box
    playerTxt.innerHTML="";                                 //Remove texts by giving to these variables an empty string value
    computerTxt.innerHTML="";
    resultTxt.innerHTML="";
} 
resultTxt.innerHTML="";


//RESTART
restartBtn.addEventListener("click", restartGame);          //Add a event and function to the restart button

function restartGame(){
    clear();                                                  //Execute clear functin
    pscore.innerHTML= "Score: 0"                              //Replace the score
    cscore.innerHTML= "Score: 0"
}

//GAME OVER
function gameOver(){
    if(newScoreP > newScoreC) {
        body.removeChild(game)
        playContainer.removeChild(playBtn)
        playContainer.removeChild(restartBtn)
        resultTxt.innerHTML="Game Over. You WIN ! 🏆";
        let newGameBtn = document.createElement("button")               //Create a new element
        newGameBtn.textContent = "New Game"                             //Add text content to this new element
        newGameBtn.classList.add("new-game")                            //Add a class to this element
        playContainer.appendChild(newGameBtn)                           //Append this new element to its parent
        newGameBtn.addEventListener("click", newGame);                  //Add an Event and its function to this new element
    } else if (newScoreC > newScoreP) {
        body.removeChild(game)
        playContainer.removeChild(playBtn)
        playContainer.removeChild(restartBtn)
        resultTxt.innerHTML="Game Over. You LOSE ! 😞";
        let newGameBtn = document.createElement("button")
        newGameBtn.textContent = "New Game"
        newGameBtn.classList.add("new-game")
        playContainer.appendChild(newGameBtn)
        newGameBtn.addEventListener("click", newGame);
    }
}

function newGame(){
    location.reload();
}








