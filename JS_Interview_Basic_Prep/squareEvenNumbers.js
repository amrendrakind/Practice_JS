/*
### squareEvenNumbers
Write a function called **squareEvenNumbers** which accepts an array and returns the sum of all of the even numbers in the array squared.

Examples:

squareEvenNumbers([1, 2, 3, 4, 5]); // 20
squareEvenNumbers([1, 3, 5, 7]); // 0
squareEvenNumbers([5, 6, 7]); // 36
*/

//Answer
function squareEvenNumbers(arr){
    let sumSquareEvenNumbers=0
    for(let num of arr){
        if(num%2===0){
            sumSquareEvenNumbers+=num*num
        }
    }
    return sumSquareEvenNumbers
}
console.log(squareEvenNumbers([1, 2, 3, 4, 5])) // 20
console.log(squareEvenNumbers([1, 3, 5, 7])) // 0
console.log(squareEvenNumbers([5, 6, 7])) // 36
