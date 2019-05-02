const cards = document.querySelectorAll('.memory-card');
const timer = document.querySelector(".timer");

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

// moves counter 

let moves = 0;
const counter = document.querySelector(".moves");
function FlipCounts(){
  moves++;
  counter.innerHTML = moves;
  //start timer on first Flip
  if(moves == 1){
    second = 0;
    minute = 0; 
    hour = 0;
    startTimer();
  }
}
//Game Timer
var second = 0, minute = 0; hour = 0;
var interval;
function startTimer(){
  interval = setInterval(function(){
    timer.innerHTML = minute+" mins "+second+" secs";
    second++;
    if(second == 60){
      minute++;
      second=0;
    }
    if(minute == 60){
      hour++;
      minute = 0;
    }
  },1000);
}

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  }
  secondCard = this;
  checkForMatch();
  FlipCounts();
}

//MatchFunction 
/* 
* 
*/
function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1000);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * cards.length);
    card.style.order = randomPos;
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard));


// asdefghjk,lzwxcfvgbhnjmk,lwxecrvtbynumk,lqwertyui
// function congratulations(){
//   if (matchedCard.length == 16){
//       clearInterval(interval);
//       finalTime = timer.innerHTML;

//       // show congratulations modal
//       modal.classList.add("show");

//       // declare star rating variable
//       var starRating = document.querySelector(".stars").innerHTML;

//       //showing move, rating, time on modal
//       document.getElementById("finalMove").innerHTML = moves;
//       document.getElementById("starRating").innerHTML = starRating;
//       document.getElementById("totalTime").innerHTML = finalTime;

//       //closeicon on modal
//       closeModal();
//   };
// }


// @description close icon on modal
// function closeModal(){
//   closeicon.addEventListener("click", function(e){
//       modal.classList.remove("show");
//       startGame();
//   });
// }


// // @desciption for user to play Again 
// function playAgain(){
//   modal.classList.remove("show");
//   startGame();
// }


// // loop to add event listeners to each card
// for (var i = 0; i < cards.length; i++){
//   card = cards[i];
//   card.addEventListener("click", displayCard);
//   card.addEventListener("click", cardOpen);
//   card.addEventListener("click",congratulations);
// };

