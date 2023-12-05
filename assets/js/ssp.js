/* Exempel på JS-fil för specifik sida (ssp-sidan i det här fallet) */

console.log('ssp.js init'); // För att se att skriptet laddats in

const playerText = document.querySelector("#player")
const computerText = document.querySelector("#opponent")
const resultText = document.querySelector("#result")
const choiceBtns = document.querySelectorAll(".choiceBtn")

let player;
let computer;
let result;
let sspCredits;
let winner;
let betAmount;
choiceBtns.forEach(button => button.addEventListener("click" , () => {

    player = button.textContent

    computerTurn();
    winner = checkWinner();
    bet();
    playerText.textContent = `Player ${player}` 
    computerText.textContent = `Opponent ${computer}`
    resultText.textContent = `Result ${winner}`;
    balanceUpdate();
}))

function computerTurn (){

    const randNum = Math.floor(Math.random() * 4);

    switch(randNum){
        case 0:
            computer = "Rock"
        break;
        case 1:
            computer = "Paper"
        break;
        case 2:
            computer = "Scissors"
        break;
        case 3:
            if(player == "Rock"){
                computer = "Paper"
            }if(player = "Paper"){
                computer = "Scissors"
            }if(player = "Scissors"){
                computer = "Rock"
            }

    }

}

function checkWinner(){

    if(player == computer){
        return("Draw")
    }else if(player == "Rock" && computer == "Scissors"){
        return("win")
    }
    else if(player == "Paper" && computer == "Rock"){
        return("win")
    }
    else if(player == "Scissors" && computer == "Paper"){
        return("win")
    }

    else if(computer == "Rock" && player == "Scissors"){
        return("lost")
    }
    else if(computer == "Paper" && player == "Rock"){
        return("lost")
    }
    else if(computer == "Scissors" && player == "Paper"){
        
        return("lost")
    }
    
}
// Betting---------------------------------
window.onload = function() {
    getCreditsFromStorage();
    balanceUpdate();
};
window.onbeforeunload = function(){
    setCreditsToStorage();
}
//gets the credtis from localstorage
function getCreditsFromStorage(){
    sspCredits = parseFloat(localStorage.getItem("credits"))

}
//Saves the credits to localstorage
function setCreditsToStorage(){
    localStorage.setItem("credits", sspCredits);
}
// Updates and displays the credit balance
function balanceUpdate() {
    document.getElementById("creditDisplay").innerText = `${sspCredits}`
    setTimeout(balanceUpdate, 100);
}
//bet funktionen som adderar och subtraherar från credits
function bet(){    
    betAmount = parseFloat(document.getElementById("betAmount").value)
    
    if(betAmount > sspCredits){
        alert("insufficent credits")
    }if(betAmount < 0 ){
        alert("cant bet negativ")
    }if(betAmount == ""){
        alert("enter bet amount")
    }else if(betAmount <= sspCredits){
        if (winner == "win"){
            sspCredits = sspCredits + betAmount;
    }
        if(winner == "lost"){
            sspCredits = sspCredits - betAmount;
        }
        setCreditsToStorage();
    }
}