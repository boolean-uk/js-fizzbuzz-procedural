let answer = []

// Write your code below this line

for (let x = 1; answer.length < 15; x++) {
    if (x % 3 === 0) {
        answer.push(`Fizz`)
    } else if (x % 5 === 0) {
        answer.push(`Buzz`)
    } else if ((x % 3 === 0) && (x % 5 === 0)) {
        answer.push('FizzBuzz')
    } else {
        answer.push(x)
    }
}
console.log(answer)

// Don't touch the code below this line, we'll cover it later

module.exports = answer
