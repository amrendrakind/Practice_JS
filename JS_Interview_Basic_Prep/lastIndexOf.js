/*
### lastIndexOf
Write a function called **lastIndexOf,** which accepts an array and a number.
The function should return the last index at which the value exists, or `-1` if the value is not found.

Do not use the built in `Array.lastIndexOf()` function!

Examples:

lastIndexOf([1, 2, 3, 4], 2); // 1
lastIndexOf([1, 2, 3, 4, 2], 2); // 4
lastIndexOf([1, 2, 3, 4], 22); // -1

*/

// answer
function lastIndexOf(arr,num){
    let len=arr.length
    for(let index in arr){
        if(arr[len-index]===num){
            return (len-index)
        }
    }
    return -1
}

console.log(lastIndexOf([1, 2, 3, 4], 2)) // 1
console.log(lastIndexOf([1, 2, 3, 4, 2], 2)) // 4
console.log(lastIndexOf([1, 2, 3, 4], 22)) // -1