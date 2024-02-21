const answer = []

// Write your code below this line

for (let i = 1; i < 16; i++) {
    let value = ''
    if (i % 3 === 0) {
      value += 'Fizz'
    }

    if (i % 5 === 0) {
      value += 'Buzz'
    }
    
    if (value === '') {
      value = i
    }

    answer.push(value)
  }

// Don't touch the code below this line, we'll cover it later
module.exports = answer
