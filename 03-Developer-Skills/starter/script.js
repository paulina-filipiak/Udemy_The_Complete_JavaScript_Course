// Remember, we're gonna use strict mode in all scripts now!
"use strict";
const arrayOne = [-3, -2, -6, -1, "error", -9, -13, -17, -15, -14, -9, -5];
const calcAmplitude = function (temperatures) {
  const filteredTemperatures = temperatures.filter(temperature => {
    return typeof temperature === "number";
  });
  const lowestTemperature = Math.min(...filteredTemperatures);
  const highestTemperature = Math.max(...filteredTemperatures);
  const amplitude =
    lowestTemperature < 0 && highestTemperature < 0
      ? Math.abs(lowestTemperature + highestTemperature)
      : highestTemperature - lowestTemperature;
  return amplitude;
};
console.log(calcAmplitude(arrayOne));

/*Coding Challenge #1
Given an array of forecasted maximum temperatures, the thermometer displays a
string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
days ... 21ºC in 2 days ... 23ºC in 3 days ..."
Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a
string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up
into sub-problems!
Test data:
§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4]*/

const arr = [17, 21, 23];

function printForecast(array) {
  const newArray = array.map((element, index) => {
    return `... ${element}ºC in ${index + 1} days `;
  });
  return newArray.toString();
}
console.log(printForecast(arr));
