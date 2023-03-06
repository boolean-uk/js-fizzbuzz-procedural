const answer = []

const oneToFifteen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

// Write your code below this line

for (let i = 1; i < 16; i++) {
    if ((!(i % 3)) && (!(i % 5))) {
       answer[i-1] = 'fizzbuzz'
    } else if (!(i % 3)) {
       answer[i-1] = 'fizz'
    } else if (!(i % 5)) {
       answer[i-1] = 'buzz'
    } else {
        answer[i-1] = i
    }
}

console.log(answer)

// Don't touch the code below this line, we'll cover it later
module.exports = answer
