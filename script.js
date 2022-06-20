// Write a function that takes a number and returns true if it is a positive number and false if it is a negative number.

const isNumberPositive = (number) => number >= 0;

console.log(isNumberPositive(-1)); // returns false
console.log(isNumberPositive(10)); // returns true

// Write a function that takes a number of days and converts it into an age.

const convertDaysToAge = (days) => `${days} days is ${days / 365} years`;

console.log(convertDaysToAge(3650)); // returns 10
console.log(convertDaysToAge(6570)); // returns 18

// Write a function that takes three numbers and returns the largest of the three numbers.

const getLargestNumber = (num1, num2, num3) =>
  `The largest number is ${Math.max(num1, num2, num3)}`;

console.log(getLargestNumber(6, 2, 3)); // returns 6
console.log(getLargestNumber(2, 1, 4)); // returns 4

// Write a function that takes an array of names and returns the last name from the array of names.

const getLastName = (nameArray) => nameArray.pop();

console.log(getLastName(["Charlie", "Rob", "Andy"])); // returns “Andy”
console.log(getLastName(["Ash", "Stu"])); // returns "Stu"

// Write a function that takes an array of numbers and returns true if all of the numbers are positive. It should return false if there are one or more negative numbers in the array.

const allNumbersPositive = (numberArray) =>
  numberArray.every((number) => isNumberPositive(number));

console.log(allNumbersPositive([2, 4, 5])); // returns true
console.log(allNumbersPositive([-5, 4, 6])); // returns false
