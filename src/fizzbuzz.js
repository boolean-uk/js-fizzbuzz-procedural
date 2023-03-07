// Inside the `src/fizzbuzz.js` file, write a program that populates the `answer` array with numbers from 1 to 15, *except*:

// - When the number is a multiple of three (e.g. 3, 6, 9, etc.), the number should be replaced with the word `Fizz`

// - When the number is a multiple of five (e.g. 5, 10, etc.), the number should be replaced with the word `Buzz`

// - When the number is a multiple of both three *and* five (e.g. 15), the number should be replaced with the word `FizzBuzz`

const answer = []

// Write your code below this line
for (let i = 1; i < 16; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    answer.push('FizzBuzz')
  } else if (i % 3 === 0) {
    answer.push('Fizz')
  } else if (i % 5 === 0) {
    answer.push('Buzz')
  } else {
    answer.push(i)
  }
}
console.log(answer)

// Don't touch the code below this line, we'll cover it later
module.exports = answer
