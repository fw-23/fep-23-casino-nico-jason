/* Site-wide JS i den här filen (t.ex. huvudmenyn) */
console.log('main.js init'); // För att se att skriptet laddats in

//Huvudmeny slide function
function openNav() {
    document.getElementById("menu").style.width = "250px";
}

function closeNav() {
    document.getElementById("menu").style.width = "0";
}
//--------------------------
let username;
let credits;
let age;
let time;







function logIn() {
    username = document.getElementById("username").value
    credits = document.getElementById("credits").value
    age = document.getElementById("age").value
    time = document.getElementById("time").value
    
    //timer(time)

    let aged = +age
    if(aged < 18){
       alert("Du måste vara minst 18 år för att kunna registrera dig.")
    }
    else{ localStorage.setItem("age", age)}

    if(username == ""){
        alert("username is needed")
    }
    else { localStorage.setItem("username", username)}
    
    if(credits == "" || credits <= 0){
        alert("You need to have at least one credit to play!")}
        else {localStorage.setItem("credits", credits)}

        console.log(`Username: ${username}, Credits: ${credits}, Age: ${age}`);
        console.log(localStorage)
    






}

/* function timer(playtime){
    let TimeInt = +playtime
    let playTimeStop =
    
    console.log(playTimeStop)
    
}*/
