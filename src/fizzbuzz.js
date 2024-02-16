const inserting = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

const answer = []

// Write your code below this line

for (var i = 1; i <= inserting.length; i++) {
    if (i % 15 == 0 && i !== 0){
        answer.push('FizzBuzz')
        console.log('FizzBuzz')
    }
    else if (i % 3 == 0){
        answer.push('Fizz')
        console.log('Fizz')
    }
    else if (i % 5 == 0){
        answer.push('Buzz')
        console.log("Buzz")
    }
    else answer.push(i)
    console.log(i);
}




// Don't touch the code below this line, we'll cover it later
module.exports = answer
