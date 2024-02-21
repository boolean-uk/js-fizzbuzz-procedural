const answer = []

// Write your code below this line

function populateAnswer() {
  let i = 0
  while (++i < 16) {
    if (i % 5 === 0 && i % 3 === 0) {
      answer.push('FizzBuzz')
    } else if (i % 5 === 0) {
      answer.push('Buzz')
    } else if (i % 3 === 0) {
      answer.push('Fizz')
    } else {
      answer.push(i)
    }
  }
}

populateAnswer()

// Don't touch the code below this line, we'll cover it later
module.exports = answer
