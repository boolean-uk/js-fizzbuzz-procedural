const answer = []

// Write your code below this line
for(let i = 1; i < 16; i++) {
    if (Number.isInteger(i / 3) & Number.isInteger(i / 5)) {
        answer.push("FizzBuzz")
    } else if (Number.isInteger(i / 3)) {
        answer.push("Fizz")
    } else if (Number.isInteger(i / 5)) {
        answer.push("Buzz")
    } else {
        answer.push(i)
    }
}
console.log(answer)



// Don't touch the code below this line, we'll cover it later
module.exports = answer
