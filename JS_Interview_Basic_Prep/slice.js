/*
### slice

Write a function called **slice,** which accepts an array, and two numbers.
The function should return a new array with the elements starting at the index of the first number and going until the index of the second number.
If a third parameter is not passed to the function, it should slice until the end of the array by default.
If the third parameter is greater than the length of the array, it should slice until the end of the array.

Do not use the built in `Array.slice()` function!

Examples:

slice([1, 2, 3, 4, 5], 0, 2); // [1, 2]
slice([1, 2, 3, 4, 5], 2, 4); // [3, 4]
slice([1, 2, 3, 4, 5], 2); // [3, 4, 5]
slice([1, 2, 3, 4, 5], 2, 10); // [3, 4, 5]

*/

//Answer
function slice(arr,firstIndex, secondIndex){
    let slicedArr = []
    let endOfIndex = ((secondIndex ===undefined || secondIndex>arr.length )?secondIndex=arr.length:secondIndex)

    for(;firstIndex<endOfIndex;firstIndex++){
        slicedArr.push(arr[firstIndex])
    }
    return slicedArr
}

console.log(slice([1, 2, 3, 4, 5], 0, 2)) // [1, 2]
console.log(slice([1, 2, 3, 4, 5], 2, 4)) // [3, 4]
console.log(slice([1, 2, 3, 4, 5], 2)) // [3, 4, 5]
console.log(slice([1, 2, 3, 4, 5], 2, 10)) // [3, 4, 5]
