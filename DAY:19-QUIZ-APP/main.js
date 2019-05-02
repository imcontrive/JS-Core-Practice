
// Questions

function Question(text, choices, answer) {
  this.text = text;
  this.choices = choices;
  this.answer = answer;
}

Question.prototype.isCorrectAnswer = function(choice) {
  return this.answer === choice;
}

function Quiz(questions) {
  this.score = 0;
  this.questions = questions;
  this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
  return this.questions[this.questionIndex];
}

Quiz.prototype.guess = function(answer) {
  if(this.getQuestionIndex().isCorrectAnswer(answer)) {
      this.score++;
  }

  this.questionIndex++;
}

Quiz.prototype.isEnded = function() {
  return this.questionIndex === this.questions.length;
}

function populate() {
  if(quiz.isEnded()) {
      showScores();
  }
  else {
      // show question
      var element = document.getElementById("question");
      element.innerHTML = quiz.getQuestionIndex().text;

      // show options
      var choices = quiz.getQuestionIndex().choices;
      for(var i = 0; i < choices.length; i++) {
          var element = document.getElementById("choice" + i);
          element.innerHTML = choices[i];
          guess("btn" + i, choices[i]);
      }

      showProgress();
  }
};

function guess(id, guess) {
  var button = document.getElementById(id);
  button.onclick = function() {
      quiz.guess(guess);
      populate();
  }
};


function showProgress() {
  var currentQuestionNumber = quiz.questionIndex + 1;
  var element = document.getElementById("progress");
  element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
  var gameOverHTML = "<h1>Result</h1>";
  gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
  var element = document.getElementById("quiz");
  element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
  new Question("Which one is not an object oriented programming language?", ["Java", "C#","C++", "C"], "C"),
  new Question("Which language is used for styling web pages?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
  new Question("There are ____ main components of object oriented programming.", ["1", "6","2", "4"], "4"),
  new Question("Which language is used for web apps?", ["PHP", "Python", "Javascript", "All"], "All"),
  new Question("MVC is a ____.", ["Language", "Library", "Framework", "All"], "Framework"),
  new Question("What type of inheritence pattern is utilized in JavaScript?",['Prototypal','Classical','Trust','none'],"Prototypal"),
  new Question("Which of the following retains the information it’s storing when the power to the system is turned off ?",['CPU','RAM','ROM','DIMM'],'RAM'),
  new Question("Every computer connected to the Internet is identified by a unique four-part string, known as-",[' IP address','Host name','DOMain name','none'],'IP address'),
  new Question("ENIAC was the first general-purpose electronic computer. ENIAC stands for-", [' Electronic Network Interactive Analytic Computer','Electronic Numerical Integrator and Computer','Electronic Numerical Integrator all Computer','Electronic Numerical Integrator any Computer',],'Electronic Numerical Integrator and Computer',),
  new Question('Which of the following statement is correct?',['1 KB = 1024 bytes','1 MB = 2048 bytes','1 MB = 1000 kilobytes','none'],'1 KB = 1024 bytes',),
  new Question('Which of the following memories must be refreshed many times per second?',[' Static RAM',' Dynamic RAM','EPROM','ROM'],' Dynamic RAM'),
  new Question('USB is a device used to store data and it stands for-',['Universal Serial Bus','Universal Service Bus','Universal Bus  Serial','none of the above'],'Universal Serial Bus')
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();


