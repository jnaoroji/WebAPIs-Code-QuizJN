//define elements
var timerEl = document.querySelector("#timer");
var body = document.body;
var h1El = document.createElement("h1");
var quizEl = document.createElement("div");
// Create a button element
var buttonEl = document.createElement('button');
// create Question list
var Q1El = document.createElement('ol');
var correct = document.createElement('p');
correct.textContent = "Correct!";
var incorrect = document.createElement('p');
incorrect.textContent = "Incorrect! 15sec time penalty!";
var secondsLeft = 75;


//Create ordered list items
var Q1li1 = document.createElement("li");
var Q1li2 = document.createElement("li");
var Q1li3 = document.createElement("li");
var Q1li4 = document.createElement("li");

// create Question list 2
var Q2El = document.createElement('ol');

//Create ordered list items
var Q2li1 = document.createElement("li");
var Q2li2 = document.createElement("li");
var Q2li3 = document.createElement("li");
var Q2li4 = document.createElement("li");


//add question 1
Q1El.textContent = "Commonly used data types DO NOT include:";
//Add text for list items
Q1li1.textContent = "Strings";
Q1li2.textContent = "Booleans";
Q1li3.textContent = "Alerts";
Q1li4.textContent = "Numbers";

//add question 2
Q2El.textContent = "The condition in an if/else statement is enclosed within ____.";
//Add text for list items
Q1li1.textContent = "Strings";
Q1li2.textContent = "Booleans";
Q1li3.textContent = "Alerts";
Q1li4.textContent = "Numbers";
//adds these elements to the body of HTML

body.appendChild(h1El);
body.appendChild(quizEl);
body.appendChild(buttonEl);


//add question
function addQ(){
  setTime();
  body.removeChild(h1El);
  body.removeChild(quizEl);
  body.removeChild(buttonEl);
  body.appendChild(Q1El);
  body.appendChild(Q1li1);
  body.appendChild(Q1li2);
  body.appendChild(Q1li3);
  body.appendChild(Q1li4);
  
  Q1li3.addEventListener('click', function(){
    body.appendChild(correct);
  });
  Q1li1.addEventListener('click', function(){
    body.appendChild(incorrect);
    secondsLeft = secondsLeft - 15;  
  });
  Q1li2.addEventListener('click', function(){
    body.appendChild(incorrect);
    secondsLeft = secondsLeft - 15; 
  });
  Q1li4.addEventListener('click', function(){
    body.appendChild(incorrect);
    secondsLeft = secondsLeft - 15; 
  });
};

//add question 2
function addQ2(){
  body.removeChild(Q1El);
  body.removeChild(Q1li1);
  body.removeChild(Q1li2);
  body.removeChild(Q1li3);
  body.removeChild(Q1li4);
  body.appendChild(Q2El);
  // body.appendChild(Q1li1);
  // body.appendChild(Q1li2);
  // body.appendChild(Q1li3);
  // body.appendChild(Q1li4);
  // Q1li3.addEventListener("click", addQ2());  
};



 //set timer
function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timerEl.textContent = "Timer = " + secondsLeft + " seconds left.";

  if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      window.confirm("Game over!"); 
    }

  }, 1000);
}



// Sets the text in these elements
h1El.textContent = "Coding Quiz Challenge";
quizEl.textContent = "Try to answer the following quiz questions within the time limit. Keep in mind, incorrect answers will penalise you score time by 10 seconds!";
// Set the button text and ID
buttonEl.innerText = 'Start Quiz!'
buttonEl.id = 'startQuizButton'

//Styling for header
//headerEl.setAttribute("style", "width:100%;font-size:10px; text-align:left;");

//styling for body
body.setAttribute("style", "margin:auto; width:100%; text-align:center; justify-content: center;");


h1El.setAttribute("style", "font-size:25px; text-align:center;");
quizEl.setAttribute("style", "font-size:16px; text-align:center;");
buttonEl.setAttribute("style", "font-size:16px; text-align:center; justify-content:center;");
startQuizButton.setAttribute("style", "justify-content:center;");
//styling for Q1
Q1El.setAttribute("style", "font-size:25px; text-align:center;");

Q1li1.setAttribute("style", " list-style:decimal; text-align:left;color:black; background: #E3E7F1; padding: 5px; margin-left: 35px;");
Q1li2.setAttribute("style", " list-style:decimal; text-align:left;color:black; background: #BDC6D9; padding: 5px; margin-left: 35px;");
Q1li3.setAttribute("style", " list-style:decimal; text-align:left;color:black; background: #E3E7F1; padding: 5px; margin-left: 35px;");
Q1li4.setAttribute("style", " list-style:decimal; text-align:left;color:black; background: #BDC6D9; padding: 5px; margin-left: 35px;");


// // Add styling to list element
// listEl.setAttribute("style", "background:#333333; padding:20px;");
// // Add styling to list items
// li1.setAttribute("style", " color:white; background: #666666; padding: 5px; margin-left: 35px;");
// li2.setAttribute("style", " color:white; background: #777777; padding: 5px; margin-left: 35px;");
// li3.setAttribute("style", " color:white; background: #888888; padding: 5px; margin-left: 35px;");
// li4.setAttribute("style", " color:white; background: #999999; padding: 5px; margin-left: 35px;");

//var imgEl = document.createElement("img");
//var nameEl = document.createElement("div");
//var favoriteEl = document.createElement("div");
// Create ordered list element






// infoEl.appendChild(quizEl);
// body.appendChild(favoriteEl);
// favoriteEl.appendChild(listEl);
// // Append ordered list 
// favoriteEl.appendChild(listEl);
// // Append list items to ordered list element 
// listEl.appendChild(li1);
// listEl.appendChild(li2);
// listEl.appendChild(li3);
// listEl.appendChild(li4);


// Attach the "click" event to your button
buttonEl.addEventListener('click', (addQ));

  // When there is a "click


