

userInitialsSpan.textContent = localStorage.getItem("initials", initialsInput);

highscores(){

  var initials = localStorage.getItem("initials");
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


