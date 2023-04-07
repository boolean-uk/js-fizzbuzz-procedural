const answer = []

// Write your code below this line
for (let i = 1; i <=15; i++) {
    let result = ""
    if ( i % 3 === 0 || i % 5 === 0) {
        if (i % 3 === 0) result += "Fizz"
        if (i % 5 === 0) result += "Buzz"
        answer.push(result)
    } else
        answer.push(i)
}


// Don't touch the code below this line, we'll cover it later
module.exports = answer
