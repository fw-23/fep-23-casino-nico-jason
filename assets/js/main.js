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
let aged = +age
let playtime;
let playTimeStop;
//date and time
function InfoDisplay() {
    let date = new Date();
    let d = date.getUTCDate();
    let mont = date.getUTCMonth();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();


    let currentTime = `${d}.${mont + 1} Time:${h}:${m}:${s}`;
    document.getElementById("dateTime").innerText = currentTime
    document.getElementById("dateTime").textContent = currentTime;
    document.getElementById("UserDisplay").innerText = username;

    setTimeout(InfoDisplay, 1000);
}

InfoDisplay();

//-----------------------------
ColorTheme()
function logIn() {
    getvalues();
    timer()
    localStorageFunction(aged);
    StealYourInfo()
    if (aged >= 18) {
        hideLogin()
    }
    

}

function localStorageFunction(aged) {
    if (aged < 18) {
        alert("Du måste vara minst 18 år för att kunna registrera dig.");
    }
    else { localStorage.setItem("age", age); }

    if (username == "") {
        alert("username is needed");
    }
    else { localStorage.setItem("username", username); }

    if (credits == "" || credits <= 0) {
        alert("You need to have at least one credit to play!");
    }
    else { localStorage.setItem("credits", credits); }

    console.log(`Username: ${username}, Credits: ${credits}, Age: ${age}`);
    console.log(localStorage);
}

function getvalues() {
    username = document.getElementById("username").value;
    credits = document.getElementById("credits").value;
    age = document.getElementById("age").value;
    playtime = document.getElementById("time").value;
}

function timer() {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    aTime = + playtime
    m = m + aTime

    for (let i = 0; i = 1; i++)
        if (m > 60) {
            h++;
            m = m - 60;
            i--;
        }
        else {
            break;
        }

    let playTimeStop = `${h}:${m}:${s}`

    console.log(playTimeStop)
    document.getElementById("TimerDisplay").innerText = "casino closes at" + playTimeStop;



}

function StealYourInfo() {
    console.log(navigator.platform) //platform
    console.log(navigator.userAgent) //browser 
    console.log(navigator.language) //språk
    console.log(`height ${window.screen.availHeight}px, width${window.screen.availWidth}px`)
    getlocation()
    timesplayed()
}

function getlocation() {
    navigator.geolocation.getCurrentPosition(function (position) {

        let latitude = position.coords.latitude
        let longitude = position.coords.longitude

        console.log(`latitude ${latitude}`)
        console.log(`longitude ${longitude}`)
    },
        function (error) {
            console.log('Error Message = ', error.message)
        }
    )
}

function timesplayed() {

    let j = +localStorage.timesplayed
    let i = j
    if (localStorage.timesplayed >= 1) {
        i++
        localStorage.setItem("timesplayed", i)
        console.log("times played" + localStorage.timesplayed)
    }
    else {
        console.log("username is new")
        localStorage.setItem("timesplayed", 1)
    }

}

function hideLogin() {

    const loginSection = document.getElementById("welcome")
    loginSection.style.display = "none"

}
function saveTheme(){
    const theme = document.getElementById("ColorTheme")
    localStorage.setItem("colortheme", theme.value)
}
function ColorTheme(){
    
    
    let colorvalue
    let textvalue

    if(localStorage.getItem("colortheme") == "light"){
        console.log("light")
         colorvalue = "#ffffff"
         textvalue = "#000000"
    }if(localStorage.getItem("colortheme") == "dark"){
        console.log("dark")
        colorvalue = "#283593"
        textvalue = "#FFFFFF"
    }if(localStorage.getItem("colortheme") == "gambler"){
        console.log("huuuh")
        colorvalue = colorGambler()
        textvalue = colorGambler()
    }

    console.log(colorvalue + textvalue)

    setColor(colorvalue, textvalue);
}



function setColor(colorvalue, textvalue) {
    document.body.style.backgroundColor = colorvalue;
    document.body.style.color = textvalue;
}

colorGambler()
function colorGambler(){
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return "#"+randomColor
}
