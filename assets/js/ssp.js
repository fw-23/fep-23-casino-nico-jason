/* Exempel på JS-fil för specifik sida (ssp-sidan i det här fallet) */

console.log('ssp.js init'); // För att se att skriptet laddats in

const playerText = document.querySelector("#player")
const computerText = document.querySelector("#opponent")
const resultText = document.querySelector("#result")
const choiceBtns = document.querySelectorAll(".choiceBtn")

let player;
let computer;
let result;

choiceBtns.forEach(button => button.addEventListener("click" , () => {

    player = button.textContent

    computerTurn();
    
    playerText.textContent = `Player ${player}` 
    computerText.textContent = `Opponent ${computer}` 
    let winner = checkWinner();
    resultText.textContent = `Result ${winner}`;
   
    
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

function getCredits(){
    let credits = localStorage.getItem("credits")
    parseInt(credits)
    return credits
}
function setCredits(credits){
    localStorage.setItem("credits", credits)
    document.getElementById("creditAmount").innerText = `${credits}`
}

function updateCredits(bet) {
    const currentCredits = getCredits()
    console.log(currentCredits + bet)
    setCredits(currentCredits + bet)
}


function bet(){    
    let bet = parseInt(document.getElementById("betAmount").value)
    let winner = checkWinner()
    //console.log(winner)

    if(bet > getCredits()){
        alert("insufficent credits")
    }if(bet < 0 ){
        alert("cant bet negativ")
    }if(bet == "amount"){
        alert("enter bet amount")
    }else if(bet < getCredits()){
        if(winner == "win"){
            updateCredits(bet)
        }if(winner == "lost"){
            updateCredits(bet)
        }else{
            //console.log("no change")
        }
    } 
}

window.onload = function () {
    setCredits(getCredits());
};
