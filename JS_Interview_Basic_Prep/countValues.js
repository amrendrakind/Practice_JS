/*
### countValues

Write a function called **countValues** which accepts an array and a number and returns the number of times that value appears in the array.

Examples:

countValues([4,1,4,2,3,4,4], 4) // 4
countValues([4,1,4,2,3,4,4], 100) // 0
countValues([], 1) // 0

*/
//Answer
function countValues(arr,searchNo){
    let count=0
    for(let num of arr){
        if(num===searchNo){
            count++
        }
    }
    return count
}

console.log(countValues([4,1,4,2,3,4,4], 4)) // 4
console.log(countValues([4,1,4,2,3,4,4], 100)) // 0
console.log(countValues([], 1)) // 0
