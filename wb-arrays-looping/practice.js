//////////////////PROBLEM 1////////////////////

// Inside the function below, set firstItem to the first item of the input array called 'inputArray'.

function first(inputArray) {
  //Code here
  let firstItem = inputArray [0]
  return firstItem;
}

//////////////////PROBLEM 2////////////////////

// Inside the function below, set arrayLength to the length of inputArray.

function getLength(inputArray) {
  //Code here

  const arrayLength = (inputArray.length)
  return arrayLength;
}

//////////////////PROBLEM 3////////////////////

// Inside the function below, set lastItem to the last item of inputArray.

function last(inputArray) {
  //Code here

  let lastItem = inputArray [inputArray.length - 1]
  return lastItem;
}

//////////////////PROBLEM 4////////////////////

// Inside the function below, add num to the end of inputArray.

function addItem(inputArray, num) {
  //Code here

  inputArray.push(num)
  return inputArray;
}

//////////////////PROBLEM 5////////////////////

// Inside the function below, remove the last item of inputArray.

function removeLast(inputArray) {
  //Code here

  inputArray.pop()
  return inputArray;
}

//////////////////PROBLEM 6////////////////////

// Inside the function below, remove the first item of inputArray.

function removeFirst(inputArray) {
  //Code here

  inputArray.shift()
  return inputArray;
}

//////////////////PROBLEM 7////////////////////

// Inside the function below, replace the first and last item in inputArray with the number 42.
// You can assume the array will be at least 2 items long.

function replaceFirstAndLast(inputArray) {
  //Code here

  inputArray[0] = 42
  inputArray[inputArray.length -1] = 42
  
  return inputArray;
}

//////////////////PROBLEM 8////////////////////

// Using a for...of loop, add ten to each element in inputArray and then push each sum into the newArr array.
// You can assume that all items in inputArray will be numbers.
// For example:
// addTen([10,20,30]); -> [20,30,40]
// addTen([1,2,3,4]); -> [11,12,13,14]

function addTen(inputArray) {
  let newArr = [];
  // Code here

  for (let i=0; i < inputArray.length; i ++){
    const itIsWhatItIs = inputArray [i] + 10

    newArr.push (itIsWhatItIs)
  }
  return newArr;
}

//////////////////PROBLEM 9////////////////////

// Fill the numbers array with numbers 0-31.

function count31() {
  let numbers = [];
  // Code here
for (let count= 0; count <= 31; count += 1) {
  numbers.push (count)
}
  return numbers;
}

//////////////////PROBLEM 10////////////////////

// Fill the numbers array with even numbers 0-20.

function countEvens() {
  let numbers = [];
  // Code here
  for (let evens = 0; evens <= 20; evens += 2) {
    numbers.push (evens)
  }
  return numbers;
}

//////////////////PROBLEM 11////////////////////

// Fill the numbers array with numbers from 10 to 1 in descending order.

function countdown() {
  let numbers = [];
  // Code here
  for (let descen = 10; descen >= 1; descen -= 1){
    numbers.push (descen)
}
    return numbers;
    
}

//////////////////PROBLEM 12////////////////////

// Using a for loop, fill the newArray with the elements of inputArray, in reverse order.
// For example:
// backwards( [0,1,2,3] ); -> [3,2,1,0]
// backwards( [ true, false ] ); -> [ false, true ]
// backwards( [ 'first', 'last' ] ); -> [ 'last', 'first' ]

function backwards(inputArray) {
  let newArray = [];
  // Code here

    for (let i = inputArray.length -1; i>=0 ; i -= 1) {
     
      newArray.push(inputArray [i])
    } 
    
  return newArray;
}

//////////////////PROBLEM 13////////////////////

// Inside the function below, search inputArray for the given value.
// If the array contains the value, set valueFound to true. Otherwise, set valueFound to false.
// For example:
// findInArray([0,1,2,3], 3); -> true
// findInArray([0,1,2,3], 4); -> false

function findInArray(inputArray, value) {
  // Code here
let valueFound = true
  if (inputArray.includes (value)) {
    valueFound = true

  }
  else (valueFound = false)

  return valueFound;
}

//////////////////PROBLEM 14////////////////////

// In this problem, inputArray is an array of numbers. Inside the function,
// loop through inputArray and add each number to newArray, until you get to a negative number.
// When you get to a negative number, stop. Do not add any more numbers to newArray.
// For example:
// stopAtNegative([5, 2, 9, -4, 8, -3, 1]) -> [5, 2, 9]

function stopAtNegative(inputArray) {
  let newArray = [];
  // Code here

  for (let i = inputArray.length + 1; i <= 0; i ++) {
    
    newArray.push(inputArray[0])

  }

  return newArray;
}
