//declares variables
var HSlist = document.getElementById("HSL");
var Play = document.getElementById("PlayAgain");
var score = "";
var initials = "";
var card = document.getElementById("card");


//renders highscores and styles list 
function renderHS(){
  var combinedScores = JSON.parse(localStorage.getItem("combined"));
  card.setAttribute("style", "align-content: space-around;")
  HSlist.textContent =("Name: " + combinedScores.initials + "  Score: " + combinedScores.score);
  HSlist.setAttribute("style", " width:50%; font-size:16px; text-align:center; color:black; background: #E3E7F1; padding: 5px; margin:auto;");
  Play.setAttribute("style", "font-size:16px; text-align:center; margin: auto; margin-top:10px;");
  return; 
}
//on click of play button, user can play again
  Play.addEventListener('click', function() {
    window.location.href = "index.html";
  }); 
   
  


function init() {
//When the init function is executed, the code inside renderHS function will also execute
     renderHS();
     
   }
//   Calls init to retrieve highscores and render it to the page on load
   init();
  