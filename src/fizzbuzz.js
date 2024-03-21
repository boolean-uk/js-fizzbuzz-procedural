const answer = []

// Write your code below this line
let value
for (let i = 1; i <= 15; i++) {
  value = i
  if (i % 3 === 0) {
    value = 'Fizz'
  }
  if (i % 5 === 0) {
    value = 'Buzz'
  }
  if (i % 3 === 0 && i % 5 === 0) {
    value = 'FizzBuzz'
  }
  answer[i - 1] = value
}

// Don't touch the code below this line, we'll cover it later
module.exports = answer
