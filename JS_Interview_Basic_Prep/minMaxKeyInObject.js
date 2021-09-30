/*
### minMaxKeyInObject

Write a function called **minMaxKeyInObject** that accepts an object with numeric keys.*
The function should return an array with the following format: `[lowestKey, highestKey]`

Examples:

minMaxKeyInObject({ 2: 'a', 7: 'b', 1: 'c', 10: 'd', 4: 'e' }); // [1, 10]
minMaxKeyInObject({ 1: 'Elie', 4: 'Matt', 2: 'Tim' }); // [1, 4]

*/

//Answer
function minMaxKeyInObject(obj){
    objArr=[]
    let lowestKey=0, highestKey=0
    objArr = Object.keys(obj)
    lowestKey=Number(objArr[0])
    highestKey=Number(objArr[objArr.length-1])
    return([lowestKey,highestKey])
}

console.log(minMaxKeyInObject({ 2: 'a', 7: 'b', 1: 'c', 10: 'd', 4: 'e' })) // [1, 10]
console.log(minMaxKeyInObject({ 1: 'Elie', 4: 'Matt', 2: 'Tim' })) // [1, 4]
