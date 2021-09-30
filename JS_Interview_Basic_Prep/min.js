/**
### min

Write a function called **min,** which accepts an array of numbers and returns the lowest value.

Do note use the built-in `Math.min()` function!

Examples:

min([5, 1, 4, 7, 1, 2]); // 1
min([-1, 6, 3, 2.2, -10, -4]); // -10

*/
//Answer
function min(arr){
    let min=arr[0]
    for(let num of arr){
        if(num<min){
            min=num
        }
    }
    return min
}
console.log(min([5, 1, 4, 7, 1, 2])) // 1
console.log(min([-1, 6, 3, 2.2, -10, -4])) // -10