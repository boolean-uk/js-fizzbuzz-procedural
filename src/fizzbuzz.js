const answer = []

// Write your code below this line

for (let i = 1; i <= 15; i++) {

    let currentNumber = i

    if (currentNumber % 3 == 0 && currentNumber % 5 == 0) {

       answer.push("FizzBuzz")

    }
    else if (currentNumber % 3 == 0 ) {

        answer.push("Fizz")

    }
    else if (currentNumber % 5 == 0 ) {

        answer.push("Buzz")

    }
    else {
        answer.push(currentNumber)
    }



}


console.log(answer)
// Don't touch the code below this line, we'll cover it later
module.exports = answer
