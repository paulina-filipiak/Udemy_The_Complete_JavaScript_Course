'use strict';
const userNumber = document.querySelector('.guess').value;
const buttonCheck = document.querySelector('.btn check');
const scorePrint = document.querySelector('.score');
const highscorePrint = document.querySelector('.highscore');
const printChosenNumber = document.querySelector('.number');
const message = document.querySelector('.message');

const printRandomNumber = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
};

console.log(printRandomNumber(1, 20));

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
