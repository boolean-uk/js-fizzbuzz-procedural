const answer = []

// Write your code below this line

for (let i = 0; i < 15; i++)
{
    const toAdd = i + 1
    if (toAdd % 3 === 0 && toAdd % 5 === 0)
        answer.push('FizzBuzz')
    else if (toAdd % 3 === 0)
        answer.push('Fizz')
    else if (toAdd % 5 === 0)
        answer.push('Buzz')
    else
        answer.push(toAdd)
}

// Don't touch the code below this line, we'll cover it later
module.exports = answer
