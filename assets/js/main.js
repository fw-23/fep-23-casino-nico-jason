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
// variabler
let förnamn;
let surname;
let username;
let credits;
let age;
let aged = +age
let playtime;
let playTimeStop;
let CasinoClosed = false;
let day;
//Körs genast
CasinoCloser();
DayTester();

//stänger casinot
function CasinoCloser(){
    if(CasinoClosed == true){
    console.log('casinot är stängt');
    DisplayClosedScreen();
    }if(CasinoClosed == false){
        HideClosedScreen();
    }
    setTimeout(CasinoCloser, 1000);
};
//kollar vilken dag
function DayTester(){
    //ny "Date" object
    let date = new Date();
    //Får ut specifik day ur Date
    day = date.getDay();
    if(day == 6 || day == 0){
        CasinoClosed = true;
    }else{
        CasinoClosed = false;
    }
    setTimeout(DayTester, 1000);
}
//visar casino stängt sidan
function DisplayClosedScreen(){
    const ClosedSection = document.getElementById(`CasinoClosed`);
    ClosedSection.style.display = "flex";
};
//gömmer casino stängt sidan
function HideClosedScreen(){
    const ClosedSection = document.getElementById(`CasinoClosed`);
    ClosedSection.style.display = "none";
};


//Single page app funktion
loadContent("Profile");
  async function loadContent(page) {
    const req = await fetch(`./${page}`);
    const content = await req.text();
    document.querySelector(`article`).innerHTML = content;
    ActivateEvent();
}
 document.getElementById(`menu`).addEventListener(`click`, (evt) => {
    if(evt.target.localName != `span` ) return;
    loadContent(evt.target.dataset.page);
}) 
//Login! - körs när man trycker på login-knappen
function logIn() {
    getvalues();
    timer()
    localStorageFunction(aged);
    StealYourInfo()
    InfoDisplay();
    if (age >= 18) {
        hideLogin();
    }
    ColorTheme();
    profileValue();
}
// körs när man trycker på logout knappen
function logOut(){
    location.reload();
}
//date and time
function InfoDisplay() {
    //ny "Date" object
    let date = new Date();
    //Får ut specifik data ur Date
    let d = date.getUTCDate();
    let mont = date.getUTCMonth();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    //current time omformat och usrename, visar det i html
    let currentTime = `${d}.${mont + 1} Time:${h}:${m}:${s}`;
    let CheckTime = `${h}:${m}:${s}`
    
    document.getElementById("dateTime").innerText = currentTime;
    document.getElementById("dateTime").textContent = currentTime;
    document.getElementById("UserDisplay").innerText = localStorage.getItem("username");

    //refreshar varje sekund
    setTimeout(InfoDisplay, 1000);
    //kollar när den valda tiden är nådd och loggar ut
    if (CheckTime == PlayTimeStop){
        console.log("closed")
        CasinoClosed = true;
        logOut();
    }
}
//-----------------------------
//Local storage för userdata
function localStorageFunction(aged) {
    if (aged < 18) {
        alert("Du måste vara minst 18 år för att kunna registrera dig.");
    }
    else { localStorage.setItem("age", age); }

    if (namn == "" || surname == "") {
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
//getvalues för all input data + username generator
function getvalues() {
    namn = document.getElementById("namn").value;
    surname = document.getElementById("surname").value;
    credits = document.getElementById("credits").value;
    age = document.getElementById("age").value;
    playtime = document.getElementById("time").value;
    username = createUsername(namn, surname);
}
// create username function
function createUsername(first, last){
    fullname = first[0] + last;
    username = fullname.charAt(0).toUpperCase() + fullname.charAt(1).toUpperCase() + fullname.slice(2);
    return username;
}
let PlayTimeStop
//timer function för playtimestop
function timer() {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();


   let aTime  = parseInt(playtime)
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
        if(h > 24){
            h = h - 24;
        }
    PlayTimeStop = `${h}:${m}:${s}`

    document.getElementById("TimerDisplay").innerText = "casino closes: " + PlayTimeStop;
    localStorage.setItem(`playTimeStop`, PlayTimeStop)

    
}
//set value in the profiles tab
function profileValue(){
    document.getElementById("usernameProfile").innerText = `Username: ${username}`
    document.getElementById("creditBalanceProfile").innerText = `Credit balance: ${localStorage.getItem("credits", credits)}`
    
}
//Info user information display 
function StealYourInfo() {
    const platform = navigator.platform
    const browser = navigator.userAgent
    const language = navigator.language
    const reso = `height ${window.screen.availHeight}px, width${window.screen.availWidth}px`
   
    console.log(platform); //platform
    console.log(browser); //browser 
    console.log(language); //språk
    console.log(reso);   //resolution
    getlocation();
    timesplayed();
}

//geolocation
function getlocation() {
    navigator.geolocation.getCurrentPosition(function (position) {

        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;

        
        console.log(`latitude ${latitude}`);
        console.log(`longitude ${longitude}`);
        
    },
        function (error) {
            console.log('Error Message = ', error.message);
        }
    )
}
//trackar times playd
function timesplayed() {

    let j = +localStorage.timesplayed;
    let i = j;
    if (localStorage.timesplayed >= 1) {
        i++;
        localStorage.setItem("timesplayed ", i);
        console.log("times played " + localStorage.timesplayed);
    }
    else {
        console.log("username is new");
        localStorage.setItem("timesplayed ", 1);
    }

}

//gömmer loginscreenen
function hideLogin() {

    const loginSection = document.getElementById("welcome")
    loginSection.style.display = "none"
}
//visar loginscreenen
function displayLogin() {
    const loginSection = document.getElementById("welcome")
    loginSection.style.display = "flex"
}
//Sparar temat
function saveTheme(){
    const theme = document.getElementById("ColorTheme");
    localStorage.setItem("colortheme", theme.value);
    ColorTheme();
}
//ändrar färgtema
function ColorTheme(){

    let colorvalue
    let textvalue

    if(localStorage.getItem("colortheme") == "light"){
        console.log("light")
         colorvalue = "#ffffff"
         textvalue = "#000000"
    }if(localStorage.getItem("colortheme") == "dark"){
        console.log("dark")
        colorvalue = "#676767"
        textvalue = "#111"
    }if(localStorage.getItem("colortheme") == "gambler"){
        console.log("huuuh")
        colorvalue = colorGambler()
        textvalue = colorGambler()
    }if(localStorage.getItem("colortheme") == "Cool"){
        console.log("Cool")
        colorvalue = "rgb(15,4,150) linear-gradient(90deg, rgba(15,4,150,1) 0%, rgba(244,59,59,1) 65%, rgba(16,122,65,1) 100%)"
        textvalue = "#111"
    }if(localStorage.getItem("colortheme") == "BobMarley"){
        console.log("BobMarley")
        colorvalue = "rgb(244,0,0) linear-gradient(90deg, rgba(244,0,0,1) 25%, rgba(247,255,0,1) 52%, rgba(2,150,0,1) 90%)"
        textvalue = "#111"
    }
   

    //console.log(colorvalue + textvalue)

    setColor(colorvalue, textvalue);
}


// färgtema från värden
function setColor(colorvalue, textvalue) {
    document.body.style.background = colorvalue;
    document.body.style.color = textvalue;
}
//random kolortema genereras
colorGambler()
function colorGambler(){
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return "#"+randomColor;
}

//--------Img gallery----------
function openLightbox(elem) {
    const bigImg = elem.dataset.fullsize;
    console.log(bigImg);
    document.querySelector('#lightbox img').src = bigImg;
    document.querySelector(`#lightbox`).style.display = "flex";
    document.querySelector(`#lightbox`).addEventListener(`click`, () => {
        document.querySelector(`#lightbox`).style.display = "none";
    });
}
//Aktiverar eventlisteners när single page app förstörde dem
function ActivateEvent() {
  document.querySelectorAll('#ImageGallery img').forEach((element) => {
    element.addEventListener('click', () => openLightbox(element));
}); 
    profileValue();
} 