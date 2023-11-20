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

function setCookie(name, value, days, time) {
    let expires = "";
    if (minutes) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}






function logIn() {
    username = document.getElementById("username").value
    credits = document.getElementById("credits").value
    age = document.getElementById("age").value
    time = document.getElementById("time").value
    
    timer(time)

    let aged = +age
    if(aged < 18){
       console.log("Du måste vara minst 18 år för att kunna registrera dig.")
    }else if(aged > 18){
        console.log("du e gamal")
    }






}

function timer(playtime){
    let TimeInt = +playtime
    let playTimeStop =
    
    console.log(playTimeStop)
    
}
