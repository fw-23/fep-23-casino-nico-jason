// error variabel
let errors = 0
//card listan
const cardList = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december"
]
//variabler för kort och array för boarden, variabler för vilket kort är selected
let cardSet
let board = []
const rows = 6;
const cols = 4;

let card1selected;
let card2selected;

//onload funktion för spelen, kör kortblandare och startGame
window.onload = function () {
    shuffleCards()
    startGame()
}
//kortblandare
function shuffleCards() {
    cardSet = cardList.concat(cardList)
    console.log(cardSet)

    for (let i = 0; i < cardSet.length; i++) {
        let j = Math.floor(Math.random() * cardSet.length)

        let temp = cardSet[i]
        cardSet[i] = cardSet[j]
        cardSet[j] = temp
    }
    console.log(cardSet)
}
//Gamelogic
function startGame() {
    for (let r = 0; r < rows; r++) {
        let row = [];
        for (let c = 0; c < cols; c++) {
            let cardImg = cardSet.pop();
            row.push(cardImg)

            let card = document.createElement("img")
            card.id = r.toString() + "-" + c.toString()
            card.src = "../../assets/img/memorycrads/" + cardImg + ".jpg"
            card.classList.add("card")
            card.draggable = false
            card.addEventListener('click', flipCard);
            document.getElementById("board").append(card)
        }
        board.push(row)
    }
    console.log(board)
    setTimeout(hideCards, 1000)
}
//Gömmer korten igen igall fel val
function hideCards() {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            let card = document.getElementById(r.toString() + "-" + c.toString())
            card.src = "../../assets/img/memorycrads/back.jpg"
        }
    }
}
//"vänder" på korten
function flipCard(){
    if(this.src.includes("back")){
        if(!card1selected){
            card1selected = this;
            let coords = card1selected.id.split("-")
            let r = parseInt(coords[0])
            let c = parseInt(coords[1])

            card1selected.src = "../../assets/img/memorycrads/" + board[r][c] + ".jpg"
        }
        else if(!card2selected && this != card2selected){
            card2selected = this;

            let coords = card2selected.id.split("-")
            let r = parseInt(coords[0])
            let c = parseInt(coords[1])

            card2selected.src = "../../assets/img/memorycrads/" + board[r][c] + ".jpg"
            setTimeout(update, 1000)
        }
    }
}
//uppdaters 1 gång per sekund, ger player errors när val är fel och resettar cardselect
function update(){
    if(card1selected.src != card2selected.src) {
        card1selected.src = "../../assets/img/memorycrads/back.jpg"
        card2selected.src = "../../assets/img/memorycrads/back.jpg"
        errors += 1
        document.getElementById("errors").innerText = errors

    }
    card1selected = null
    card2selected = null
}
