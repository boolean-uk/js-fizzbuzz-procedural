const answer = []

// Write your code below this line

for(let i = 0; i < 15; i++) {
    let num = i + 1;
    if(num % 3 === 0 && num % 5 === 0) {
        answer[i] = 'FizzBuzz'
    } else if (num % 3 === 0) {
        answer[i] = 'Fizz'
    } else if (num % 5 === 0) {
        answer[i] = 'Buzz'
    } else {
        answer[i] = num
    }
}




// Don't touch the code below this line, we'll cover it later
module.exports = answer
