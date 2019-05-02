// Code For Time Greeting

currentTime=new Date();
if((currentTime.getHours()>6) && (currentTime.getHours()<12))
document.write("<b>Good Morning🙂</b>");
else if((currentTime.getHours()>12)&&(currentTime.getHours()<17))
document.write("<b>Good Afternoon🙂 </b>");
else if((currentTime.getHours()>17)&&(currentTime.getHours()<21))
document.write("<b>Good Evening!! </b>");
else 
document.write("<b>Good night!! </b>");


//============================= CALENDAR ====================================


// Code for 30secOfInterviewsQuestions

var QuesTionAns ;
  QuesTionAns = [
    {
      "question": "What are higher-order components?",
      "answer": "A higher-order component (HOC) is a function that takes a component as an argument and returns a new component. It is a pattern that is derived from React’s compositional nature. Higher-order components are like pure components because they accept any dynamically provided child component, but they won’t modify or copy any behavior from their input components.",
      "code" : "const EnhancedComponent = higherOrderComponent(WrappedComponent)",
    },
    {
      "question": "What is the purpose of callback function as an argument of `setState`?",
      "answer": "The callback function is invoked when `setState` has finished and the component gets rendered. Since `setState` is asynchronous, the callback function is used for any post action",
    },
    {
      "question":"What is HTML5 Web Storage? Explain localStorage and sessionStorage.",
      "answer": "With HTML5, web pages can store data locally within the user’s browser. The data is stored in name/value pairs, and a web page can only access data stored by itself.",
    },
    {
      "question": "Explain the differences between imperative and declarative programming.",
      "answer" : "Declarative programming often works with functions and expressions. Imperative programming frequently uses statements and relies on low-level features that cause mutations, while declarative programming has a strong focus on abstraction and purity.",
    },
    {
      "question": "What is memoization?",
      "answer" : "Memoization is the process of caching the output of function calls so that subsequent calls are faster. Calling the function again with the same input will return the cached output without needing to do the calculation again.",
    },
    {
      "question": "What is the only value not equal to itself in JavaScript?",
      "answer": "NaN (Not-a-Number) is the only value not equal to itself when comparing with any of the comparison operators. NaN is often the result of meaningless math computations, so two NaN values make no sense to be considered equal. "
    }
  ];


// const answer = document.querySelector('.ansText span');
// const question = document.querySelector('.quesText p');

var intervalId = 0;
function change() {
  intervalId = setInterval(changeQuestions, 10000);
}

function changeQuestions() {
  // code to generate randomQuestion
  var questionNum = Math.floor(Math.random() * QuesTionAns.length); 
  
  document.querySelector('.quesText p').innerHTML = QuesTionAns[questionNum].question;
  document.querySelector('.ansText span').innerHTML = QuesTionAns[questionNum].answer;
}
changeQuestions();
change();

// console.log(changeQuestions());

// function generateQuestions(event) {
//   if(event.code === "Space") {
//     changeQuestions();
//   }
// }
// window.addEventListener("keydown", generateQuestions);

// setInterval(changeQuestions(),5000);
// changeQuestions();
// questionGenerator();

