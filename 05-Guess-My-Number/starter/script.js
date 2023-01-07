'use strict';
const userNumber = document.querySelector('.guess');
const buttonCheck = document.querySelector('.check');
const buttonAgain = document.querySelector('.again');
let scorePrintValue = document.querySelector('.score');
let highscorePrintValue = document.querySelector('.highscore');
const printChosenNumber = document.querySelector('.number');
const message = document.querySelector('.message');

let score = 20;
const highScore = [];
// const printRandomNumber = function () {
//   function innerFunction() {
//     let min = Math.ceil(1);
//     let max = Math.floor(20);
//     const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
//     return randomNumber;
//   }
//   return innerFunction();
// };

let randomNumber = Math.floor(Math.random() * 20) + 1;

function startGame() {
  scorePrintValue.textContent = `${score}`;
  highscorePrintValue.textContent = `0`;
  message.value = 'Start guessing...';
  document.body.style.backgroundColor = '#222';
  printChosenNumber.textContent = `?`;
}
startGame();

function again() {
  score = 20;
  randomNumber = Math.floor(Math.random() * 20) + 1;
  scorePrintValue.textContent = `${score}`;
  highscorePrintValue.textContent = `${Math.max(...highScore)}`;
  message.value = 'Start guessing...';
  document.body.style.backgroundColor = '#222';
  printChosenNumber.textContent = `?`;
}

buttonCheck.addEventListener('click', function () {
  console.log(randomNumber);
  if (userNumber.valueAsNumber < randomNumber) {
    score = score - 1;
    scorePrintValue.textContent = `${score}`;
    message.textContent = '📉 too low!';
  }
  if (userNumber.valueAsNumber > randomNumber) {
    score = score - 1;
    scorePrintValue.textContent = `${score}`;
    message.textContent = '📈 too high!';
  }
  if (userNumber.valueAsNumber !== randomNumber && score <= 0) {
    score = score - 1;
    scorePrintValue.textContent = `${score}`;
    message.textContent = '💥 You lost the game!';
  }
  if (userNumber.valueAsNumber === randomNumber) {
    highScore.push(score);
    highscorePrintValue.textContent = `${score}`;
    message.textContent = '🎉 Correct number!';
    printChosenNumber.textContent = `${userNumber.valueAsNumber}`;
    document.body.style.backgroundColor = '#60b347';
  }
});

buttonAgain.addEventListener('click', function () {
  again();
});
/* 1. podzielić grę na ruchy.
jeden ruch kończy przycisniecie checkBtn
na tym evencie porownujemy input do randomNumber
- highScore to powinnien być array do którego pushujemy każdy wynik i wyciągamy najwyższy. Lub porównujemy obecny wynik do poprzedniego i drukujemy ten wyższy. Może zapisać do pamieci podręcznej?
2. rozpatrujemy przypadki: 
porównujemy randomNumber do input.value i drukujemy w message czy jest za wysoki, za niski czy taki sam
2a. : jeśli randomNumber === input.value :
- score +1
- tło na zielono
- inner text: printChosenNumber = userNumber
- inner text message: ikonka + Correct number!
2b. : jeśli randomNumber !== input.value : 
- score -1
- case input.value < randomNumber : inner text message: ikonka + too low!
case input.value > randomNumber : inner text message: ikonka + too high!

na koniec każdego ruchu random Number musi się policzyć na nowo.

3. button Again zeruje wyniki.


- 
*/
