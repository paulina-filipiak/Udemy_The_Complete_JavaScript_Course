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

// const scoresDolphins = [44, 23, 71]
// const scoresKoalas = [65, 54, 49]

// const average = function (scores) {
//   return (
//     scores.reduce((acc, current) => {
//       return acc + current
//     }) / scores.length
//   )
// }

// console.log(average(scoresDolphins))
// console.log(average(scoresKoalas))

// function checkWinner(scoreOne, scoreTwo) {
//   scoreOne > 2 * scoreTwo
//     ? console.log(
//         `Dolphins won with ${average(scoresDolphins)} average points!`
//       )
//     : console.log(`Koalas won with ${average(scoresKoalas)} average points!`)
// }

// checkWinner(average(scoresDolphins), average(scoresKoalas))

// console.log(
//   `${
//     average(scoresKoalas) > average(scoresDolphins) ? "Koalas" : "Dolphins"
//   } won with ${
//     average(scoresKoalas) > average(scoresDolphins)
//       ? average(scoresKoalas)
//       : average(scoresDolphins)
//   } average points!`
// )

// Coding Challenge #2
// Steven is still building his tip calculator, using the same rules as before: Tip 15% of
// the bill if the bill value is between 50 and 300, and if the value is different, the tip is
// 20%.
// Your tasks:
// 1. Write a function 'calcTip' that takes any bill value as an input and returns
// the corresponding tip, calculated based on the rules above (you can check out
// the code from first tip calculator challenge if you need to). Use the function
// type you like the most. Test the function using a bill value of 100
// 2. And now let's use arrays! So create an array 'bills' containing the test data
// below
// 3. Create an array 'tips' containing the tip value for each bill, calculated from
// the function you created before
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip
// Test data: 125, 555 and 44
// Hint: Remember that an array needs a value in each position, and that value can
// actually be the returned value of a function! So you can just call a function as array
// values (so don't store the tip values in separate variables first, but right in the new
// array) 😉

// const bills = []
// const calcTip = function (biilValue) {
//   const tip =
//     biilValue >= 50 && biilValue <= 300 ? 0.15 * biilValue : 0.2 * biilValue
//   bills.push(Math.floor(tip))
//   return tip
// }

// calcTip(125)
// calcTip(555)
// calcTip(144)

// console.log(bills)

// ///////////////////////////////////////
// Object Methods

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   birthYeah: 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,
//   calcAge: function () {
//     this.age = 2037 - this.birthYeah
//     return this.age
//   },
//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()}-year old ${
//       this.job
//     }, and has ${this.hasDriversLicense ? "a" : "no"} driver's license`
//   },
// }

// console.log(jonas.getSummary())

// // Challenge
// // "Jonas is a 46-year old teacher, and he has a driver's license"
// console.log(jonas.getSummary());
// */

// Coding Challenge #3
// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
// implement the calculations! Remember: BMI = mass / height ** 2 = mass
// / (height * height) (mass in kg and height in meter)
// Your tasks:
// 1. For each of them, create an object with properties for their full name, mass, and
// height (Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same
// method on both objects). Store the BMI value to a property, and also return it
// from the method
// 3. Log to the console who has the higher BMI, together with the full name and the
// respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
// tall.

const mark = {
  firstName: "Mark",
  lastName: "Miller",
  mass: 78,
  height: 178,
  calcBMI: function () {
    const bmi = this.mass / Math.pow(this.height / 100, 2)
    return bmi
  },
}

const john = {
  firstName: "John",
  lastName: "Smith",
  mass: 50,
  height: 192,
  calcBMI: function () {
    const bmi = this.mass / Math.pow(this.height / 100, 2)
    return bmi
  },
}

console.log(
  `${
    mark.calcBMI() > john.calcBMI() ? mark.firstName : john.firstName
  }'s BMI (${
    mark.calcBMI() > john.calcBMI() ? mark.calcBMI() : john.calcBMI()
  }) is higher than ${
    mark.calcBMI() < john.calcBMI() ? mark.firstName : john.firstName
  }'s (${mark.calcBMI() < john.calcBMI() ? mark.calcBMI() : john.calcBMI()})!`
)
