//define elements
var timerEl = document.querySelector("#timer");
var body = document.body;
var divEl = document.querySelector("#divEl");
var h1El = document.createElement("h1");
var quizEl = document.createElement("div");
// Create a button element
var buttonEl = document.createElement('button');
// create Question list

var correct = document.createElement('p');
correct.textContent = "Correct!";
var incorrect = document.createElement('p');
incorrect.textContent = "Incorrect! 15sec time penalty!";
var secondsLeft = 75;
var gameOver = document.createElement("h1");
var finalScore = document.createElement('h2');
var initialsInput = document.createElement('textarea');

//adds these elements to the body of HTML to start

divEl.appendChild(h1El);
divEl.appendChild(quizEl);
divEl.appendChild(buttonEl);

//Create Question 1 declared
var Q1El = document.createElement('ol');
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

//question 3 declared
var Q3El = document.createElement('ol');
var Q3li1 = document.createElement("li");
var Q3li2 = document.createElement("li");
var Q3li3 = document.createElement("li");
var Q3li4 = document.createElement("li");

//question 4 declared
var Q4El = document.createElement('ol');
var Q4li1 = document.createElement("li");
var Q4li2 = document.createElement("li");
var Q4li3 = document.createElement("li");
var Q4li4 = document.createElement("li");

//question 5 declared
var Q5El = document.createElement('ol');
var Q5li1 = document.createElement("li");
var Q5li2 = document.createElement("li");
var Q5li3 = document.createElement("li");
var Q5li4 = document.createElement("li");


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
Q2li1.textContent = "Quotes"; 
Q2li2.textContent = "Curly brackets";
Q2li3.textContent = "Parenthesis";
Q2li4.textContent = "Square brackets";

//add question 3
Q3El.textContent = "Arrays in JavaScript can be used to store _____.";
//Add text for list items
Q3li1.textContent = "Numbers and Strings"; 
Q3li2.textContent = "Other arrays";
Q3li3.textContent = "Booleans";
Q3li4.textContent = "All of the above";

//add question 4
Q4El.textContent = "String values must be enclosed within ______ when being assigned variables.";
//Add text for list items
Q4li1.textContent = "Commas"; 
Q4li2.textContent = "Quotes";
Q4li3.textContent = "Curly brackets";
Q4li4.textContent = "Parenthesis";

//add Question 5
Q5El.textContent = "A very useful tool used during development and debugging for printing content to the debugger is:"
//Add text for list items
Q5li1.textContent = "JavaScript";
Q5li2.textContent = "Terminal/bash";
Q5li3.textContent = "For loops";
Q5li4.textContent = "Console.log";

//High Score page declared
gameOver.textContent = "Game Over!"
finalScore.textContent = "Your Score is " + secondsLeft;
initialsInput.placeholder = "Your initials!"


//add question
function addQ(){
  setTime();
  divEl.removeChild(h1El);
  divEl.removeChild(quizEl);
  divEl.removeChild(buttonEl);
  divEl.appendChild(Q1El);
  divEl.appendChild(Q1li1);
  divEl.appendChild(Q1li2);
  divEl.appendChild(Q1li3);
  divEl.appendChild(Q1li4);
  
  Q1li3.addEventListener('click', function(){
    body.appendChild(correct);
    setTimeout(function() {
      correct.style.display = 'none';
    }, 2000);
    addQ2();
    
  });
  Q1li1.addEventListener('click', function(){
    body.appendChild(incorrect);
    secondsLeft = secondsLeft - 15; 
    setTimeout(function() {
      incorrect.style.display = 'none';
    }, 2000);
    addQ2();
    
  });
  Q1li2.addEventListener('click', function(){
    body.appendChild(incorrect);
    secondsLeft = secondsLeft - 15; 
    setTimeout(function() {
      incorrect.style.display = 'none';
    }, 2000);
    addQ2();
  });
  Q1li4.addEventListener('click', function(){
    body.appendChild(incorrect);
    setTimeout(function() {
      incorrect.style.display = 'none';
    }, 2000);
    secondsLeft = secondsLeft - 15; 
    addQ2();
  });
};


//add question 2 function
function addQ2(){
  divEl.removeChild(Q1El);
  divEl.removeChild(Q1li1);
  divEl.removeChild(Q1li2);
  divEl.removeChild(Q1li3);
  divEl.removeChild(Q1li4);
  divEl.appendChild(Q2El);
  divEl.appendChild(Q2li1);
  divEl.appendChild(Q2li2);
  divEl.appendChild(Q2li3);
  divEl.appendChild(Q2li4); 

  Q2li3.addEventListener('click', function(){
    body.appendChild(correct);
    setTimeout(function() {
      correct.style.display = 'none';
    }, 2000);
    addQ3();
  });
  Q2li1.addEventListener('click', function(){
    body.appendChild(incorrect);
    secondsLeft = secondsLeft - 15; 
    setTimeout(function() {
      incorrect.style.display = 'none';
    }, 2000); 
    addQ3();
  });
  Q2li2.addEventListener('click', function(){
    body.appendChild(incorrect);
    secondsLeft = secondsLeft - 15; 
    setTimeout(function() {
      incorrect.style.display = 'none';
    }, 2000);
    addQ3();
  });
  Q2li4.addEventListener('click', function(){
    body.appendChild(incorrect);
    secondsLeft = secondsLeft - 15; 
    setTimeout(function() {
      incorrect.style.display = 'none';
    }, 2000);
    addQ3();
  });
};

//add question 3 function
function addQ3(){
  divEl.removeChild(Q2El);
  divEl.removeChild(Q2li1);
  divEl.removeChild(Q2li2);
  divEl.removeChild(Q2li3);
  divEl.removeChild(Q2li4);
  divEl.appendChild(Q3El);
  divEl.appendChild(Q3li1);
  divEl.appendChild(Q3li2);
  divEl.appendChild(Q3li3);
  divEl.appendChild(Q3li4); 

  Q3li4.addEventListener('click', function(){
    body.appendChild(correct);
    setTimeout(function() {
      correct.style.display = 'none';
    }, 2000);
    addQ4();
  });
  Q3li1.addEventListener('click', function(){
    body.appendChild(incorrect);
    secondsLeft = secondsLeft - 15;  
    setTimeout(function() {
      incorrect.style.display = 'none';
    }, 2000);
    addQ4();
  });
  Q3li2.addEventListener('click', function(){
    body.appendChild(incorrect);
    secondsLeft = secondsLeft - 15; 
    setTimeout(function() {
      incorrect.style.display = 'none';
    }, 2000);
    addQ4();
  });
  Q3li3.addEventListener('click', function(){
    body.appendChild(incorrect);
    secondsLeft = secondsLeft - 15; 
    setTimeout(function() {
      incorrect.style.display = 'none';
    }, 2000);
    addQ4();
  });
};

function addQ4(){
  divEl.removeChild(Q3El);
  divEl.removeChild(Q3li1);
  divEl.removeChild(Q3li2);
  divEl.removeChild(Q3li3);
  divEl.removeChild(Q3li4);
  divEl.appendChild(Q4El);
  divEl.appendChild(Q4li1);
  divEl.appendChild(Q4li2);
  divEl.appendChild(Q4li3);
  divEl.appendChild(Q4li4); 

  Q4li2.addEventListener('click', function(){
    body.appendChild(correct);
    setTimeout(function() {
      correct.style.display = 'none';
    }, 2000);
    addQ5();
  });
  Q4li1.addEventListener('click', function(){
    body.appendChild(incorrect);
    secondsLeft = secondsLeft - 15;  
    setTimeout(function() {
      incorrect.style.display = 'none';
    }, 2000);
    addQ5();
  });
  Q4li3.addEventListener('click', function(){
    body.appendChild(incorrect);
    secondsLeft = secondsLeft - 15; 
    setTimeout(function() {
      incorrect.style.display = 'none';
    }, 2000);
    addQ5();
  });
  Q4li4.addEventListener('click', function(){
    body.appendChild(incorrect);
    secondsLeft = secondsLeft - 15; 
    setTimeout(function() {
      incorrect.style.display = 'none';
    }, 2000);
    addQ5();
  });
};
function addQ5(){
  divEl.removeChild(Q4El);
  divEl.removeChild(Q4li1);
  divEl.removeChild(Q4li2);
  divEl.removeChild(Q4li3);
  divEl.removeChild(Q4li4);
  divEl.appendChild(Q5El);
  divEl.appendChild(Q5li1);
  divEl.appendChild(Q5li2);
  divEl.appendChild(Q5li3);
  divEl.appendChild(Q5li4); 

  Q5li4.addEventListener('click', function(){
    body.appendChild(correct);
    setTimeout(function() {
      correct.style.display = 'none';
    }, 2000);
    score();
  });
  Q5li1.addEventListener('click', function(){
    body.appendChild(incorrect);
    secondsLeft = secondsLeft - 15;  
    setTimeout(function() {
      incorrect.style.display = 'none';
    }, 2000);
    score();
  });
  Q5li2.addEventListener('click', function(){
    body.appendChild(incorrect);
    secondsLeft = secondsLeft - 15; 
    setTimeout(function() {
      incorrect.style.display = 'none';
    }, 2000);
    score();
  });
  Q5li3.addEventListener('click', function(){
    body.appendChild(incorrect);
    secondsLeft = secondsLeft - 15; 
    setTimeout(function() {
      incorrect.style.display = 'none';
    }, 2000);
    score();
  });
};

 //set timer
function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timerEl.textContent = "Timer = " + secondsLeft + " seconds left.";

  if(secondsLeft <= 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      score();
        
    
    }

  }, 1000);
}


function score() {
  //remove message
  correct.remove("hide");
  incorrect.remove("hide");
  //remove questions 
  Q5El.remove("hide");
  Q5li1.remove("hide"); 
  Q5li2.remove("hide");
  Q5li3.remove("hide");
  Q5li4.remove("hide");
  //append game over page
  divEl.appendChild(gameOver);
  divEl.appendChild(finalScore);
  divEl.appendChild(initialsInput);
 
};
  



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
divEl.setAttribute("style", "margin:auto; width:50%; text-align:center; justify-content: center;");

h1El.setAttribute("style", "font-size:25px; text-align:center;");
quizEl.setAttribute("style", "font-size:16px; text-align:center;");
buttonEl.setAttribute("style", "font-size:16px; text-align:center;");
startQuizButton.setAttribute("style", "justify-content:center;");

//styling for game over 
gameOver.setAttribute("style", "font-size:25px; text-align:center;");
finalScore.setAttribute("style", "font-size:16px; text-align:center;");
//styling for Questions
Q1El.setAttribute("style", "font-size:25px; text-align:center;");
Q2El.setAttribute("style", "font-size:25px; text-align:center;");
Q3El.setAttribute("style", "font-size:25px; text-align:center;");
Q4El.setAttribute("style", "font-size:25px; text-align:center;");
Q5El.setAttribute("style", "font-size:25px; text-align:center;");

Q1li1.setAttribute("style", " list-style:decimal; text-align:left;color:black; background: #E3E7F1; padding: 5px; margin-left: 35px;");
Q1li2.setAttribute("style", " list-style:decimal; text-align:left;color:black; background: #BDC6D9; padding: 5px; margin-left: 35px;");
Q1li3.setAttribute("style", " list-style:decimal; text-align:left;color:black; background: #E3E7F1; padding: 5px; margin-left: 35px;");
Q1li4.setAttribute("style", " list-style:decimal; text-align:left;color:black; background: #BDC6D9; padding: 5px; margin-left: 35px;");

Q2li1.setAttribute("style", " list-style:decimal; text-align:left;color:black; background: #E3E7F1; padding: 5px; margin-left: 35px;");
Q2li2.setAttribute("style", " list-style:decimal; text-align:left;color:black; background: #BDC6D9; padding: 5px; margin-left: 35px;");
Q2li3.setAttribute("style", " list-style:decimal; text-align:left;color:black; background: #E3E7F1; padding: 5px; margin-left: 35px;");
Q2li4.setAttribute("style", " list-style:decimal; text-align:left;color:black; background: #BDC6D9; padding: 5px; margin-left: 35px;");

Q3li1.setAttribute("style", " list-style:decimal; text-align:left;color:black; background: #E3E7F1; padding: 5px; margin-left: 35px;");
Q3li2.setAttribute("style", " list-style:decimal; text-align:left;color:black; background: #BDC6D9; padding: 5px; margin-left: 35px;");
Q3li3.setAttribute("style", " list-style:decimal; text-align:left;color:black; background: #E3E7F1; padding: 5px; margin-left: 35px;");
Q3li4.setAttribute("style", " list-style:decimal; text-align:left;color:black; background: #BDC6D9; padding: 5px; margin-left: 35px;");

Q4li1.setAttribute("style", " list-style:decimal; text-align:left;color:black; background: #E3E7F1; padding: 5px; margin-left: 35px;");
Q4li2.setAttribute("style", " list-style:decimal; text-align:left;color:black; background: #BDC6D9; padding: 5px; margin-left: 35px;");
Q4li3.setAttribute("style", " list-style:decimal; text-align:left;color:black; background: #E3E7F1; padding: 5px; margin-left: 35px;");
Q4li4.setAttribute("style", " list-style:decimal; text-align:left;color:black; background: #BDC6D9; padding: 5px; margin-left: 35px;");

Q5li1.setAttribute("style", " list-style:decimal; text-align:left;color:black; background: #E3E7F1; padding: 5px; margin-left: 35px;");
Q5li2.setAttribute("style", " list-style:decimal; text-align:left;color:black; background: #BDC6D9; padding: 5px; margin-left: 35px;");
Q5li3.setAttribute("style", " list-style:decimal; text-align:left;color:black; background: #E3E7F1; padding: 5px; margin-left: 35px;");
Q5li4.setAttribute("style", " list-style:decimal; text-align:left;color:black; background: #BDC6D9; padding: 5px; margin-left: 35px;");
// Initiates quiz upon click of button "Start Quiz"
buttonEl.addEventListener('click', (addQ));




