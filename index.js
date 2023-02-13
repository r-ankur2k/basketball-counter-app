let scoreCount = document.getElementById("scoreCountHome")
let scoreCountGuest = document.getElementById("scoreCountGuest")
let scoreHome = 0 ;
let scoreGuest = 0 ;
let foulsCounterHome = 0 ;
let foulsCounterGuest = 0;

function plusOneHome(){
    scoreHome += 1 
    scoreCount.textContent = scoreHome
}
function plusTwoHome(){
    scoreHome += 2
    scoreCount.textContent = scoreHome
}
function plusThreeHome(){
    scoreHome += 3 
    scoreCount.textContent = scoreHome
}
function plusOneGuest(){
    scoreGuest += 1 
    scoreCountGuest.textContent = scoreGuest
}
function plusTwoGuest(){
    scoreGuest += 2
    scoreCountGuest.textContent = scoreGuest
}
function plusThreeGuest(){
    scoreGuest += 3 
    scoreCountGuest.textContent = scoreGuest
}
function newGame(){
    scoreCount.textContent = 0
    scoreCountGuest.textContent = 0
    document.getElementById("foulCountForHome").textContent = 0
    document.getElementById("foulCountForGuest").textContent = 0
    document.getElementById("winnerGuest").textContent = "GUEST"
    document.getElementById("winnerHome").textContent = "HOME"
    document.getElementById("winMsg").textContent = "Waiting Game to Finish"
    document.getElementById("winnerHome").style.color = "White";
    document.getElementById("winnerGuest").style.color = "White";
    document.getElementById("scoreCountGuest").style.color = "";
    document.getElementById("scoreCountHome").style.color = "";
    scoreHome = 0 
    scoreGuest = 0
    foulsCounterHome = 0 ;
    foulsCounterGuest = 0;
    
}
function foulCountHome(){
    foulsCounterHome += 1
    document.getElementById("foulCountForHome").textContent =  foulsCounterHome
}
function foulCountGuest(){
    foulsCounterGuest += 1
    document.getElementById("foulCountForGuest").textContent = foulsCounterGuest
}
 function winnerReveal(){
     if (scoreHome > scoreGuest){
         document.getElementById("winnerHome").textContent = "Winner : HOME"
         document.getElementById("winnerHome").style.color = "Yellow";
         document.getElementById("scoreCountHome").style.color = "Yellow";
         document.getElementById("scoreCountGuest").style.color = "";
         document.getElementById("winnerGuest").textContent = "GUEST"
         document.getElementById("winnerGuest").style.color = "white"
         document.getElementById("winMsg").textContent = "HOME Wins By " + (scoreCount.textContent - scoreCountGuest.textContent) + " Points 🎉🎉🎉"
    }
    else if (scoreHome == scoreGuest){
        document.getElementById("winMsg").textContent = "Its A DRAW 🤝"
        document.getElementById("scoreCountGuest").style.color = "yellow";
        document.getElementById("scoreCountHome").style.color = "yellow";
    }
    else if (scoreGuest > scoreHome){
        document.getElementById("winnerGuest").textContent = "Winner : GUEST"
        document.getElementById("winnerGuest").style.color = "Yellow";
        document.getElementById("scoreCountGuest").style.color = "Yellow";
        document.getElementById("scoreCountHome").style.color = "";
        document.getElementById("winnerHome").textContent = "HOME"  
        document.getElementById("winnerHome").style.color = "white" 
        document.getElementById("winMsg").textContent = "GUEST Wins By " + (scoreCountGuest.textContent - scoreCount.textContent) + " Points 🎉🎉🎉" 
}}