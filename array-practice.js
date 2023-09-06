/* time complexity: O(n)
space complexity: O(1)
*/

const findMinimum = arr => {

  // Your code here
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return min;
};

/* time complexity: O(n)
space complexity: O(n)
*/

const runningSum = arr => {

  // Your code here
  const sums = [];

  for (let i = 0; i < arr.length; i++) {
    let sum = 0;

    for (let j = 0; j <= i; j++) {
      sum += arr[j];
    }

    // time complexity: O(1)
    // space complexity: O(1)
    sums.push(sum);
  }

  return sums;
};

// time complexity: O(n)
// space complexity: O(1)
const evenNumOfChars = arr => {

  // Your code here

  // time complexity: O(n)
  // space complexity: O(1)
  return arr.reduce((accum, string) => {
    if (string.length % 2 === 0) {
      accum++;
    }

    return accum;
  }, 0)
};

// time complexity: O(n)
// space complexity: O(n)
const smallerThanCurr = arr => {

  // Your code here
  let counts = [];

  for (let i = 0; i < arr.length; i++) {
    // time complexity: O(1)
    // space complexity: O(1)
    counts.push(0);
  }

  for (let i = 0; i < arr.length; i++) {
    let count = 0;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        counts[i]++;
      } else if (arr[i] < arr[j]) {
        counts[j]++;
      }
    }
  }

  return counts;
};

// time complexity: O(n)
// space complexity: O(1)
const twoSum = (arr, target) => {

  // Your code here
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return true;
      }
    }
  }

  return false;
};

// time complexity: O(n)
// space complexity: O(1)
const secondLargest = arr => {

  // Your code here
  let largest = arr[0];
  let secondLargest;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] >= largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (!secondLargest || arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest;
};

// time complexity: O(n)
// space complexity: O(n)
const shuffle = (arr) => {

  // Your code here
  let shuffledArray = arr.slice(); // time complexity: O(n); space complexity: O(n)
  let min;
  let max = arr.length - 1;

  for (let i = 0; i < shuffledArray.length - 1; i++) {
    min = i;
    const randomIdx = Math.floor(Math.random() * (max - min + 1) + min);

    let save = shuffledArray[i];
    shuffledArray[i] = shuffledArray[randomIdx];
    shuffledArray[randomIdx] = save;
  }

  return shuffledArray;
};


module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];
