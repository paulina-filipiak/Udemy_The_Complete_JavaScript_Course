// Coding Challenge #4
// Steven wants to build a very simple tip calculator for whenever he goes eating in a
// restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
// 300. If the value is different, the tip is 20%.
// Your tasks:
// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
// this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can
// start with an if/else statement, and then try to convert it to a ternary
// operator!)
// 2. Print a string to the console containing the bill value, the tip, and the final value
// (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
// 316.25”
// Test data:
// § Data 1: Test for bill values 275, 40 and 430
// Hints:
// § To calculate 20% of a value, simply multiply it by 20/100 = 0.2
// § Value X is between 50 and 300, if it's >= 50 && <= 300 😉
// "use strict"

// const bill = 430
// let tip = bill >= 50 && bill <= 300 ? 0.15 : 0.2

// console.log(
//   `The bill was ${bills}, the tip was ${bill * tip}, and the total value is ${
//     bill + bill * tip
//   }`
// )

// Coding Challenge #1
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so
// one average score per team).
// A team only wins if it has at least double the average score of the other team.
// Otherwise, no team wins!
// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
// to the console, together with the victory points, according to the rule above.
// Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and
// Data 2
// 5. Ignore draws this time
// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
// Hints:
// § To calculate average of 3 values, add them all together and divide by 3
// § To check if number A is at least double number B, check for A >= 2 * B.
// Apply this to the team's average scores 😉

// const averageScoreDolphins = (96 + 108 + 89) / 3
// const averageScoreKoalas = (88 + 130 + 110) / 3

// if (averageScoreDolphins > averageScoreKoalas && averageScoreDolphins >= 100) {
//   console.log(
//     `Dolphins won with ${Math.floor(averageScoreDolphins)} average score!`
//   )
// } else if (
//   averageScoreKoalas > averageScoreDolphins &&
//   averageScoreKoalas >= 100
// ) {
//   console.log(
//     `Koalas won with ${Math.floor(averageScoreKoalas)} average score!`
//   )
// } else if (
//   averageScoreDolphins === averageScoreKoalas &&
//   averageScoreDolphins >= 100
// ) {
//   console.log(`There is a draw!`)
// }

const scoresDolphins = [44, 23, 71]
const scoresKoalas = [65, 54, 49]

const average = function (scores) {
  return (
    scores.reduce((acc, current) => {
      return acc + current
    }) / scores.length
  )
}

console.log(average(scoresDolphins))
console.log(average(scoresKoalas))

function checkWinner(scoreOne, scoreTwo) {
  scoreOne > 2 * scoreTwo
    ? console.log(
        `Dolphins won with ${average(scoresDolphins)} average points!`
      )
    : console.log(`Koalas won with ${average(scoresKoalas)} average points!`)
}

checkWinner(average(scoresDolphins), average(scoresKoalas))

console.log(
  `${
    average(scoresKoalas) > average(scoresDolphins) ? "Koalas" : "Dolphins"
  } won with ${
    average(scoresKoalas) > average(scoresDolphins)
      ? average(scoresKoalas)
      : average(scoresDolphins)
  } average points!`
)
