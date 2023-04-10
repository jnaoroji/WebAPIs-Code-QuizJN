//define elements
var timerEl = document.querySelector("#timer");
var body = document.body;
var divEl = document.querySelector("#divEl");
var h1El = document.createElement("h1");
var quizEl = document.createElement("div");
// Create a button element
var buttonEl = document.createElement("button");
var submitEl = document.createElement("button");
// create Question list elements
var questionIndex = 0;
var rightAnswer = "";
var userAnswer = "";
var correct = document.createElement("p");
correct.textContent = "Correct!";
var incorrect = document.createElement("p");
incorrect.textContent = "Incorrect! 15sec time penalty!";
var secondsLeft = 75;
//create game over elements
var gameOver = document.createElement("h1");
var finalScore = document.createElement("h2");
//create text area element
var initialsInput = document.createElement("textarea");
initialsInput.setAttribute("rows", "1");
var HSlist = document.createElement ("ul");
var highscores = [];
var cardEl = document.querySelector("#card");

const questions = [
    {
        question: "Commonly used data types DO NOT include:",
        answers: ["Strings", "Booleans", "Alerts", "Numbers"],
        answer: "Alerts"
    },
    {
        question: "The condition in an if/else statement is enclosed within ____.",
        answers: ["Quotes", "Curly brackets", "Parenthesis", "Square brackets"],
        answer: "Parenthesis"
    },
    {
        question: "Arrays in JavaScript can be used to store _____.",
        answers: ["Numbers and Strings", "Other arrays", "Booleans", "All of the above"],
        answer: "All of the above"
    }, 
    {
        question: "String values must be enclosed within ______ when being assigned variables.",
        answers: ["Commas", "Quotes", "Curly brackets", "Parenthesis"],
        answer: "Quotes"
    }, 
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: ["JavaScript", "Terminal/bash", "For loops", "Console.log"],
        answer: "Console.log"
    },
]
// create a for loop
function add2(array) {
    divEl.innerHTML="";
    if (questionIndex < array.length) {
        rightAnswer = array[questionIndex].answer
        divEl.textContent = array[questionIndex].question
        const choices = array[questionIndex].answers
        var listCont = document.createElement("ol");
        divEl.setAttribute("style", "margin:auto; width:50%; text-align:center; justify-content: center; font-size: 20px; disply:flex; flex-direction: column;");
        

        for (let i = 0; i < choices.length; i++) {
            const element = choices[i];
            var listItem = document.createElement("li");
            listItem.classList.add("answerItem");
            listItem.textContent = element;
            listCont.append(listItem);
            listItem.setAttribute("style", " font-size:16px; list-style:decimal; text-align:left;color:black; background: #E3E7F1; padding: 5px; margin-left: 35px;");
        }
        divEl.append(listCont);
    } else {
        score();
    }
}
function startGame() {
    setTime();
    add2(questions);
}
document.addEventListener('click', function(event){
    if (event.target && event.target.matches(".answerItem")) {
        userAnswer = event.target.textContent;
        if (userAnswer === rightAnswer){
            body.append(correct);
            correct.setAttribute("style", " font-size:16px; text-align:center; font-style: italic; color:black; background: #BDC6D9; padding: 5px; margin-left: 35px;");
            setTimeout(function () {
                correct.style.display = 'none';
            }, 1000);

        }else{
            body.append(incorrect);
            incorrect.setAttribute("style", " font-size:16px; text-align:center; font-style: italic; color:black; background: #BDC6D9; padding: 5px; margin-left: 35px;");
            secondsLeft = secondsLeft - 15;
            setTimeout(function () {
                incorrect.style.display = 'none';
            }, 1000);
        }
        // console.log(rightAnswer, userAnswer, questionIndex);
        questionIndex++;
        add2(questions);

    }

})

//adds these elements to the body of HTML to start

divEl.appendChild(h1El);
divEl.appendChild(quizEl);
divEl.appendChild(buttonEl);
// Sets the text in these elements
h1El.textContent = "Coding Quiz Challenge";
quizEl.textContent = "Try to answer the following quiz questions within the time limit. Keep in mind, incorrect answers will penalise you score time by 10 seconds!";
// Set the button text and ID
buttonEl.innerText = 'Start Quiz!'
buttonEl.id = 'startQuizButton'
//styling for body
body.setAttribute("style", "margin:auto; width:100%; text-align:center; justify-content: center;");

h1El.setAttribute("style", "font-size:25px; text-align:center;");
quizEl.setAttribute("style", "font-size:16px; text-align:center;");
buttonEl.setAttribute("style", "font-size:16px; text-align:center;");
startQuizButton.setAttribute("style", "justify-content:center;");
var timerInterval = "";
//set timer
function setTime() {
    // Sets interval in variable
        timerInterval = setInterval(function () {
        secondsLeft--;
        timerEl.textContent = "Timer = " + secondsLeft + " seconds left.";

        if (secondsLeft <= 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            timerEl.textContent = "Timer = 0 seconds left.";
            score();
        }
        
    }, 1000);
    return;
}
// stop timer
function stopTimer() {
    clearInterval(timerInterval); // clear the interval to stop the timer
    timerEl.textContent = "There is no time left.";
  }

function score() {
    divEl.append(gameOver);
    gameOver.textContent = "Game Over!"
    divEl.append(finalScore);
    finalScore.textContent = "Your Score is " + secondsLeft;
    console.log(secondsLeft);
    localStorage.setItem("Score", secondsLeft);
    stopTimer();
    divEl.append(initialsInput);
    document.getElementById('initialsInput');
    initialsInput.placeholder = "Your initials!"
    initialsInput.value = "";
    divEl.append(submitEl);
    submitEl.innerText="submit";
    submitEl.addEventListener('click',collectHS);
    
    
        

    
    
    //styling for game over 
    gameOver.setAttribute("style", "font-size:25px; text-align:center;");
    finalScore.setAttribute("style", "font-size:16px; text-align:center;");
    submitEl.setAttribute("style", "font-size:16px; text-align:center;")

};
function collectHS() { 
    const userInitials = initialsInput.value;
    console.log(userInitials);
    localStorage.setItem("initials", userInitials);
     
    var h1El = document.createElement("h1");
    var highEl = document.createElement("ul");
    cardEl.append(h1El);
    h1El.textContent = "Highscores:"
    cardEl.append(highEl);
    highEl.textContent = JSON.stringify("Name: " + userInitials + "  Score: " + secondsLeft);
  };
//   Calls init to retrieve highscores and render it to the page on load

//   function renderHS(){
//     if(lastHS !==null){
//         highscores =  localStorage.getItem("Score", secondsLeft);
//         lastUser = localStorage.get.Item("initials", userInitials);
//         var lastHS = document.createElement ("li");
//         lastHS.textContent = JSON.stringify("Name: " + userInitials + "  Score: " + secondsLeft);
//         cardEl.append(lastHS);
//     } else{
//         return;
//     } 
//   }
//     submitEl.addEventListener("click", function(event) {
//     event.preventDefault();
//     saveHighEl();
//     renderHS();
//     });
  


// function init() {
// //When the init function is executed, the code inside renderLastGrade function will also execute
//      renderHS();
//    }
//    init();
  

// Initiates quiz upon click of button "Start Quiz"
buttonEl.addEventListener('click', startGame);
