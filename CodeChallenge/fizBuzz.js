// Write a short program that prints each number from 1 to 100 on a new line.
// Given a number, if the number is a multiple of 3, print "Fizz"
// Given a number, if the number is a multiple of 5, print "Buzz"
// Given a number, if the number is a multiple of 3 AND 5, print "FizzBuzz"

const num1 = 15

if(num1 % 3 === 0 && num1 % 5 === 0) {
    console.log(`${num1} FizzBuzz`);
} 

else if(num1 % 5 === 0) {
    console.log(`${num1} Buzz`)
} 

else if(num1 % 3 === 0) {
    console.log(`${num1} Fizz`)
}

else (console.log(num1))