const answer = []

// Write your code below this line
for (i = 1; i < 16; i++){
    if ((i % 3 !== 0) && (i % 5 !== 0)){
        answer.push(i)
    }
    if ((i % 5 === 0) && (i % 3 !== 0)){
        answer.push('Buzz')
    }
    if ((i % 3 === 0) && (i % 5 !== 0)){
      answer.push('Fizz')
    }
    if ((i % 3 === 0) && (i % 5 === 0)){
        answer.push('FizzBuzz')
    }
}
console.log(answer)

// Don't touch the code below this line, we'll cover it later
module.exports = answer
