/*### repeat

Write a function called **repeat,** which accepts a string and a number and returns a new string with the string repeated that number of times.

**Do not use the built in repeat method**

Examples:

repeat('Matt', 3) // 'MattMattMatt'
repeat('Elie', 2) // 'ElieElie'
repeat('Michael', 0) // ''
*/


// Answer
function repeat(str, number){
    repeatStr=''
    for(let i=0;i<number;i++){
        repeatStr+=str
    }
    return repeatStr
}

console.log(repeat('Matt', 3)) // 'MattMattMatt'
console.log(repeat('Elie', 2)) // 'ElieElie'
console.log(repeat('Michael', 0)) // ''
