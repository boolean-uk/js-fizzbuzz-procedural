const answer = []

// Write your code below this line

for (let i = 1; i < 16; i++) {
  const multipleOfThree = i % 3 === 0
  const multipleOfFive = i % 5 === 0
  console.log(i, multipleOfFive)
  if (multipleOfThree === true && multipleOfFive === true) {
    answer.push('FizzBuzz')
  } else if (multipleOfThree) {
    answer.push('Fizz')
  } else if (multipleOfFive) {
    answer.push('Buzz')
  } else {
    answer.push(i)
  }
}

console.log('FizzBuzz answer', answer)

// Don't touch the code below this line, we'll cover it later
module.exports = answer
