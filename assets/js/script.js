//defines variables
var timerEl = document.querySelector("#timer");
var body = document.body;
var divEl = document.querySelector("#divEl");
var h1El = document.createElement("h1");
var quizEl = document.createElement("div");
// Creates button elements
var buttonEl = document.createElement("button");
var submitEl = document.createElement("button");
// create Question list elements
var questionIndex = 0;
var rightAnswer = "";
var userAnswer = "";
//creates variables for answer checking
var correct = document.createElement("p");
correct.textContent = "Correct!";
var incorrect = document.createElement("p");
incorrect.textContent = "Incorrect! 15sec time penalty!";
//element for timer seconds
var secondsLeft = 75;
//create game over elements
var gameOver = document.createElement("h1");
var finalScore = document.createElement("h2");
//create text area element
var initialsInput = document.createElement("textarea");
initialsInput.setAttribute("rows", "1", );
initialsInput.setAttribute("style", "width: 200px;", );

// creates an object with all questions, answers and correct answers
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
// create a for loop to add questions to div element
function add2(array) {
    divEl.innerHTML="";
    if (questionIndex < array.length) {
        rightAnswer = array[questionIndex].answer
        divEl.textContent = array[questionIndex].question
        const choices = array[questionIndex].answers
        var listCont = document.createElement("ol");
        divEl.setAttribute("style", "margin:auto; width:50%; text-align:center; justify-content: center; font-size: 20px;");
        

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
// starts game by calling set time function and adding questions
function startGame() {
    setTime();
    add2(questions);
}
// adds an event listener to questions on click
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
        questionIndex++;
        add2(questions);
    }
})
//adds these elements to the body of HTML on load
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
//declares timer interval in global scope as used for multiple functions
var timerInterval = "";
//set timer
function setTime() {
    // Sets interval in variable
        timerInterval = setInterval(function () {
        secondsLeft--;
        timerEl.textContent = "Timer = " + secondsLeft + " seconds left.";

        if (secondsLeft <= 0) {
            // clears timer and div element if timer runs out before all questions are answered
            clearInterval(timerInterval);
            divEl.innerHTML="";
            timerEl.textContent = "Timer = 0 seconds left.";
            score();
        }
    }, 1000);
    return;
}
// stop timer function
function stopTimer() {
    clearInterval(timerInterval); // clears the interval to stop the timer at game over
    timerEl.textContent = "There is no time left.";
  }
// score function ends the game 
function score() {
    divEl.append(gameOver);
    gameOver.textContent = "Game Over!"
    divEl.append(finalScore);
    finalScore.textContent = "Your Score is " + secondsLeft;
    console.log(secondsLeft);
    stopTimer();
    divEl.append(initialsInput);
    document.getElementById('initialsInput');
    initialsInput.placeholder = "Your initials!"
    initialsInput.value = "";
    divEl.append(submitEl);
    submitEl.innerText="submit";
    submitEl.addEventListener('click', function() {
        window.location.href = "index2.html"
        collectHS(secondsLeft);
      });
    // sets local storage 
      function collectHS(score) { 
        console.log("Score:", score,);
        const userInitials = initialsInput.value;
        console.log(userInitials);
        //creates an object for combined initials and scores
        var combinedScores = {
            initials: userInitials,
            score: secondsLeft
        }
        console.log(combinedScores);
        localStorage.setItem("combined", JSON.stringify(combinedScores)); 
      };
    //styling for game over 
    gameOver.setAttribute("style", "font-size:25px; text-align:center;");
    finalScore.setAttribute("style", "font-size:16px; text-align:center;");
    submitEl.setAttribute("style", "font-size:16px; text-align:center;")
};



// Start game function called upon click of button "Start Quiz"
buttonEl.addEventListener('click', startGame);
