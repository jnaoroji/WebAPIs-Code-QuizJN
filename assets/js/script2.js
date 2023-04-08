var userScore = document.querySelector("#timeleft")
var initialsInput = document.querySelector("#ini");
var userInitialsSpan = document.querySelector("#user-initials");



userInitialsSpan.textContent = localStorage.getItem("initials", initialsInput);

highscores();




function highscores() {
  
  var initials = localStorage.getItem("ini");
  if (!initials) {
    return;
  }
  userInitialsSpan.textContent = initials;
}
  submit.addEventListener("click", function(event) {
  event.preventDefault();
  var initialsInput = document.querySelector("#ini").value;
  if (initialsInput === "") {
   window.confirm("Invalid! Please enter you initials");
  } else {
    var initials = 
    window.confirm("Registered successfully!");
    localStorage.setItem("initials", initialsInput);
    highscores();
  }
});


