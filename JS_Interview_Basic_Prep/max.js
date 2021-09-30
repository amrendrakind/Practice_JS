/**
 ### max
Write a function called **max,** which accepts an array and returns the highest value.

Do not use the built-in `Math.max()` function!

Examples:

max([5, 1, 4, 7, 1, 2]); // 7
max([3, 4, 12, 1, 8]); // 12
max([-1, 6, 3, 2.2, -10, -4]); // 6
 */

// Answer
function max(arr){
    let max=arr[0]
    for(let num of arr){
        if(num>max){
            max=num
        }
    }
    return max
}

console.log(max([5, 1, 4, 7, 1, 2])) // 7
console.log(max([3, 4, 12, 1, 8])) // 12
console.log(max([-1, 6, 3, 2.2, -10, -4])) // 6