
const answer = []
// Write your code below this line
function fizzbuzz() {
    for(let i = 1; i < 16; i++){
        if(i%15 === 0) {
            answer.push('FizzBuzz')
        }
        else if(i%5===0) {
            answer.push('Buzz')
        }
        else if(i%3===0) {
            answer.push('Fizz')
        }
        else {
    
            answer.push(i)
        }
    }    
}
fizzbuzz()




// Don't touch the code below this line, we'll cover it later
module.exports = answer
