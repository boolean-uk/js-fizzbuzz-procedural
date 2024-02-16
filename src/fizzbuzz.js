const answer = []
/*
Inside the `src/fizzbuzz.js` file, write a program that populates the `answer` array with numbers from 1 to 15, *except*:

- When the number is a multiple of three (e.g. 3, 6, 9, etc.), the number should be replaced with the word `Fizz`

- When the number is a multiple of five (e.g. 5, 10, etc.), the number should be replaced with the word `Buzz`

- When the number is a multiple of both three *and* five (e.g. 15), the number should be replaced with the word `FizzBuzz`
*/


// Write your code below this line
for (let n = 1; n <= 15; n++) {
    if (n % 3 === 0 && n % 5 === 0) {
        answer.push('FizzBuzz');
    } else if (n % 3 === 0) {
        answer.push('Fizz');
    } else if (n % 5 === 0) {
        answer.push('Buzz');
    } else {
        answer.push(n);
    }
}
  




// Don't touch the code below this line, we'll cover it later
module.exports = answer
