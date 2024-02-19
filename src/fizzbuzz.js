const answer = []

// Write your code below this line

for (let i = 1; i <= 15; i++) {
  let number = i
  if (number % 3 === 0 && number % 5 === 0) {
    number = 'FizzBuzz'
  } else if (number % 3 === 0) {
    number = 'Fizz'
  } else if (number % 5 === 0) {
    number = 'Buzz'
  }
  answer.push(number)
}
console.log(answer)
// Don't touch the code below this line, we'll cover it later
module.exports = answer
