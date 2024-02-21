const answer = []

// Write your code below this line
for (let i=1; i < 16; i++) {
    let fizz = i % 3 === 0
    let buzz = i % 5 === 0

    if (fizz && buzz) {
        answer.push('FizzBuzz')
    }
    else if (fizz) {
        answer.push('Fizz')
    }
    else if (buzz) {
        answer.push('Buzz')
    }
    else {
        answer.push(i)
    }
}
// Don't touch the code below this line, we'll cover it later
module.exports = answer
