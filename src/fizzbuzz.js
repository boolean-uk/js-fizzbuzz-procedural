const answer = []

// Write your code below this line


for (n = 1; n <= 15; n++) {
    if (n % 3 === 0 && n % 5 === 0) {
        answer.push('FizzBuzz')
    } else if (n % 3 === 0) {
        answer.push('Fizz')
    } else if (n % 5 === 0) {
        answer.push('Buzz')
    } else {
        answer.push(n)
    }
}


// Don't touch the code below this line, we'll cover it later
module.exports = answer
