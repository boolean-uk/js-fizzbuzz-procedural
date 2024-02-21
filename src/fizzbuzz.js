const answer = []

// Write your code below this line
for (let i = 1; i <= 15; i++) {
    if (i % 3 == 0 && i % 5 === 0) {
        answer[i - 1] = 'FizzBuzz'
    } else if (i % 3 == 0) {
        answer[i - 1] = 'Fizz'
    } else if (i % 5 === 0) {
        answer[i - 1] = 'Buzz'
    } else {
        answer[i - 1] = i
    }
}




// Don't touch the code below this line, we'll cover it later
module.exports = answer
