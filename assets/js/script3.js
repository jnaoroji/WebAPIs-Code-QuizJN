// Quiz questions
var questions = [
  {
      question: "What is JavaScript?",
      choices: ["A programming language", "A markup language", "A scripting language", "An object-oriented language"],
      answer: "A scripting language"
  },
  {
      question: "What is the output of this code? console.log(5 + '5');",
      choices: ["10", "55", "undefined", "NaN"],
      answer: "55"
  },
  {
      question: "Which of the following is NOT a JavaScript data type?",
      choices: ["number", "string", "boolean", "object"],
      answer: "datetime"
  },
  {
      question: "What is the purpose of the JavaScript 'this' keyword?",
      choices: ["It refers to the current function", "It refers to the global object", "It refers to the parent object", "It refers to the current object"],
      answer: "It refers to the current object"
  },
  {
      question: "What does 'NaN' stand for in JavaScript?",
      choices: ["New Array Number", "Not a Number", "Null and None", "No Action Needed"],
      answer: "Not a Number"
  }
];

// Quiz variables
var currentQuestionIndex = 0;
var score = 0;
var timeLeft = 60;

// DOM elements
var startBtn = document.querySelector("#start-button");
var quizContainerEl = document.querySelector("#quiz-container");
var questionEl = document.querySelector("#question");
var choicesEl = document.querySelector("#choices");
var feedbackEl = document.querySelector("#feedback");
var timerEl = document.querySelector("#timer");
var submitBtn = document.querySelector("#submit-button");
var initialsInput = document.querySelector("#initials");

// Event listeners
startBtn.addEventListener("click", startQuiz);
choicesEl.addEventListener("click", checkAnswer);
submitBtn.addEventListener("click", saveScore);

// Start the quiz
function startQuiz() {
  startBtn.classList.add("hide");
  quizContainerEl.classList.remove("hide");
  displayQuestion();
  startTimer();
}

// Display the current question
function displayQuestion() {
  var currentQuestion = questions[currentQuestionIndex];
  questionEl.textContent = currentQuestion.question;
  choicesEl.innerHTML = "";
  for (var i = 0; i < currentQuestion.choices.length; i++) {
      var choiceBtn = document.createElement("button");
      choiceBtn.textContent = currentQuestion.choices[i];
      choicesEl.appendChild(choiceBtn);
  }
}

// Check the user's answer
function checkAnswer(event) {
  var selectedBtn = event.target;
  var correctAnswer = questions[currentQuestionIndex].answer;
  if (selectedBtn.textContent === correctAnswer) {
      score++;
      feedbackEl.textContent = "Correct!";
  } else {
      timeLeft -= 10;
      feedbackEl.textContent = "Incorrect.";
  }
  feedbackEl.classList.remove("hide");
  currentQuestionIndex++;
  if (currentQuestionIndex === questions.length || timeLeft <= 0) {
      endQuiz();
  } else {
      displayQuestion();
  }
}

// Start the timer
function startTimer() {
  var countdown = setInterval(function() {
      timerEl.textContent = "Time: " + timeLeft;
      timeLeft--;
      if (timeLeft < 0) {
          clearInterval(countdown);
          endQuiz();
      }
  }, 1000);
}

// End the quiz
function endQuiz() {
  quizContainerEl.classList.add("hide");
  submitBtn.classList.remove("hide");
  initialsInput.classList.remove("hide");
  feedbackEl.classList.add("hide");
  timerEl.textContent = "";
}

