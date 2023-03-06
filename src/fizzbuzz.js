let answer = []

// Write your code below this line


// Defines a variable, x, to be 1. It processes for x = 1, then adds 1 and runs again until reaching x = 15.
for (let x = 1; answer.length < 15; x++) {
    if (x % 3 === 0 && x % 5 === 0) { //checks if x/3 and x/5 have 0 remainder
        answer.push('FizzBuzz')
    } else if (x % 3 === 0) { //checks is x/3 has 0 remainder
        answer.push(`Fizz`)
    } else if (x % 5 === 0) { //checks if x/5 has 0 remainder
        answer.push(`Buzz`)
    }  else { //if no other conditions are met, just fills in the array with the value of x
        answer.push(x)
    }
}
console.log(answer)

// Don't touch the code below this line, we'll cover it later

module.exports = answer
