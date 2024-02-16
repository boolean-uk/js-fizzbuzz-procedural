const answer = []

// Write your code below this line
function fizzbuzz(value) {
  if (value % 3 === 0 && value % 5 === 0) {
    return 'FizzBuzz'
  } else if (value % 3 === 0) {
    return 'Fizz'
  } else if (value % 5 === 0) {
    return 'Buzz'
  } else {
    return value
  }
}

for (let i = 1; i <= 15; i++) {
  answer.push(fizzbuzz(i))
}

// Don't touch the code below this line, we'll cover it later
module.exports = answer
