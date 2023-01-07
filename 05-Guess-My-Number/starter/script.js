'use strict';
const userNumber = document.querySelector('.guess');
const buttonCheck = document.querySelector('.check');
let scorePrintValue = document.querySelector('.score');
let highscorePrintValue = document.querySelector('.highscore');
const printChosenNumber = document.querySelector('.number');
const message = document.querySelector('.message');
let randomNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
// const printRandomNumber = function () {
//   function innerFunction() {
//     let min = Math.ceil(1);
//     let max = Math.floor(20);
//     const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
//     return randomNumber;
//   }
//   return innerFunction();
// };

function startGame() {
  scorePrintValue.textContent = `${20}`;
  highscorePrintValue.textContent = '0';
  message.value = 'Start guessing...';
}
startGame();

buttonCheck.addEventListener('click', function () {
  console.log(randomNumber);
  if (userNumber.valueAsNumber < randomNumber) {
    score = score - 1;
    scorePrintValue.textContent = `${score}`;
    message.textContent = 'too low!';
  }
  if (userNumber.valueAsNumber > randomNumber) {
    score = score - 1;
    scorePrintValue.textContent = `${score}`;
    message.textContent = 'too high!';
  }
  if (userNumber.valueAsNumber === randomNumber) {
    highscorePrintValue.textContent = `${score}`;
    message.textContent = 'Correct number!';
    printChosenNumber.textContent = `${userNumber.valueAsNumber}
    `;
    document.body.style.backgroundColor = '#60b347';
  }
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
