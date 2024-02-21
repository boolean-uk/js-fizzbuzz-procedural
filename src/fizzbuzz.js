const answer = []

// Write your code below this line
let index = 0
for(let i = 1; i < 16; i++){
    if(i%3 === 0 && i%5=== 0){
        answer[index] = 'FizzBuzz'
    } else if(i%3 === 0){
        answer[index] = 'Fizz'
    } else if(i%5 === 0){
        answer[index] = 'Buzz'
    } else{
        answer[index] = i
    }
    index++
}


// Don't touch the code below this line, we'll cover it later
module.exports = answer
