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








function logIn() {
    username = document.getElementById("username").value
    credits = document.getElementById("credits").value
    age = document.getElementById("age").value
    playtime = document.getElementById("time").value
    
    let timetostop = timer()
    document.getElementById("TimerDisplay").innerText ="casino closes at" + timetostop;
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
        
    StealYourInfo()


        


}

    function timer(){
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    
    aTime =+ playtime
    m = m + aTime
    
   for(let i = 0; i = 1; i++)
    if(m > 60){
        h++;
        m = m - 60;
        i--;
    }
    else{
        break;
    }
    
     let playTimeStop = `${h}:${m}:${s}`
    
    console.log(playTimeStop)
    return playTimeStop;
    

}

function StealYourInfo(){
    console.log(navigator.platform) //platform
    console.log(navigator.userAgent) //browser 
    console.log(navigator.language) //språk
    console.log(`height ${window.screen.availHeight}px, width${window.screen.availWidth}px`)
    getlocation()
    timesplayed()
}

function getlocation(){
    navigator.geolocation.getCurrentPosition(function(position) {
            
            let latitude = position.coords.latitude
            let longitude = position.coords.longitude
    
            console.log(`latitude ${latitude}`)
            console.log(`longitude ${longitude}`)
        },
        function(error) {
            console.log('Error Message = ', error.message)
        }
    )
}

function timesplayed(){
    
    let j = +localStorage.timesplayed
    let i = j 
    if(localStorage.timesplayed >= 1){
        i++
        localStorage.setItem("timesplayed", i)
        console.log(localStorage.timesplayed)
    }
    else{
        console.log("username is new")
        localStorage.setItem("timesplayed", 1)
    }
    
}

/*
- Plattform
- webbläsare
- språk
- Resolution
- windowSize
- Longitude Latitude (Meddelande om användaren nekar geolocation)
- Cookie/localstorage som trackar hur många gånger man har spelat och skriver ut det
*/