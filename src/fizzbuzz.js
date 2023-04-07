let answer = []

// Write your code below this line

answer = FizzBuzz(15)
console.log(answer)
// Don't touch the code below this line, we'll cover it later
module.exports = answer
function FizzBuzz(size) {
  const ret = []
  for (let i = 1; i <= size; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      ret.push('FizzBuzz')
    } else if (i % 3 === 0) {
      ret.push('Fizz')
    } else if (i % 5 === 0) {
      ret.push('Buzz')
    } else {
      ret.push(i)
    }
  }
  return ret
}
