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

    computer

    computerTurn();
    
    playerText.textContent = `Player ${player}` 
    computerText.textContent = `Opponent ${computer}` 
    let winner = checkWinner();
    resultText.textContent = `Result ${winner}`;
   
    
}))

function computerTurn (){

    const randNum = Math.floor(Math.random() * 3);

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

    }

}

function checkWinner(){

    if(player == computer){
        return("Draw")
    }else if(player == "Rock" && computer == "Scissors"){
        return("you win")
    }
    else if(player == "Paper" && computer == "Rock"){
        return("you win")
    }
    else if(player == "Scissors" && computer == "Paper"){
        return("you win")
    }

    else if(computer == "Rock" && player == "Scissors"){
        return("you lose")
    }
    else if(computer == "Paper" && player == "Rock"){
        return("you lose")
    }
    else if(computer == "Scissors" && player == "Paper"){
        
        return("you lose")
    }

}