/*
### isAlt

Create a function `isAlt` that accepts a string as an argument and validates whether the vowels (a, e, i, o, u) and consonants are in alternate order.

Examples:

isAlt("amazon") // true
isAlt("apple") // false
isAlt("banana") // true
*/
//Answer
function isAlt(arr){
    let isAltnate=false
    let vowels="aeiouAEIOU"
    for(let i=0;i<arr.length-1;i++){
        let odd = vowels.includes(arr[i])
        let even = vowels.includes(arr[i+1])
        if(odd!==even){
            isAltnate=true
        }
        else {
            isAltnate=false
            break
        }
    }
    return isAltnate
}

console.log(isAlt("amazon")) // true
console.log(isAlt("apple")) // false
console.log(isAlt("banana")) // true
