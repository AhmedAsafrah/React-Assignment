// Task 2:

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

// Task 3:
// You are given an array of strings, some of which may be duplicates. Write a function that removes all duplicates from the array in constant time complexity and returns the array with unique values.

function removeDuplicates(array) {
  return [...new Set(array)];
}

const ArrayOfStrings = ["apple", "banana", "apple", "orange", "banana", "kiwi"];
console.log(removeDuplicates(ArrayOfStrings));

// after my review, I have added the following code to remove duplicates in constant time complexity for some edge cases and it is impossible to remove duplicates in constant time complexity for all cases because we need to iterate over the array to check if the element is duplicated or not.
