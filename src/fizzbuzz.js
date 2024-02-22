const answer = []

// Write your code below this line

const FIZZ = 3
const BUZZ = 5

for (var i = 1; i <= 15; i++) {
    let _pushVal = ''

    if (i % FIZZ === 0) _pushVal += 'Fizz'
    if (i % BUZZ === 0) _pushVal += 'Buzz'
    if (_pushVal === '') _pushVal = i

    answer.push(_pushVal)
}

// Don't touch the code below this line, we'll cover it later
module.exports = answer
