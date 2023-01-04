'use strict';
const userNumber = document.querySelector('.guess').value;
const buttonCheck = document.querySelector('.btn check');
const scorePrint = document.querySelector('.score');
const highscorePrint = document.querySelector('.highscore');

const printRandomNumber = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

console.log(printRandomNumber(1, 20));
