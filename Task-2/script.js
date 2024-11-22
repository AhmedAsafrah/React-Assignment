// Task 2:
// You are given an array of numbers. Write a function that calculates the total sum and the average of the numbers using the reduce method.

function calcSumAndAverage(array) {
  if (array.length === 0) {
    return "Array is empty";
  } else {
    let sum = array.reduce((accu, curr) => accu + curr, 0);
    let average = sum / array.length;
    return `Sum: ${sum} , Average: ${average}`;
  }
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(calcSumAndAverage(numbers));
