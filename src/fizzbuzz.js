const answer = []

// Write your code below this line
for (let i = 1; i < 16; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    answer.push('FizzBuzz')
    continue
  }
  if (i % 3 === 0) {
    answer.push('Fizz')
    continue
  }
  if (i % 5 === 0) {
    answer.push('Buzz')
    continue
  }
  answer.push(i)
}
console.log(answer)

// Don't touch the code below this line, we'll cover it later
module.exports = answer
