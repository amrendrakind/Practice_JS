/*
### twoHighest

Write a function called **twoHighest** that takes an array of numbers as its argument and returns the **two highest numbers within the array**.
The returned value should be an array in the following format: `[secondHighest, highest]`
The order of the numbers passed in could be any order.

**Do not use the build in sort() method - the tests will fail!**

Examples:

twoHighest([1, 2, 10, 8]); // [8, 10]
twoHighest([6, 1, 9, 10, 4]); // [9,10]
twoHighest([4, 25, 3, 20, 19, 5]); // [20,25]
twoHighest([1, 2, 2]) // [2, 2];
*/

// Answer
function twoHighest(arr){
    let secondHighest, highest
    highest=0
    secondHighest=0
    for(let num of arr){
        if(num>highest||num>secondHighest){
            if(num>highest){
                secondHighest=highest
                highest=num
                
            }else if(num>secondHighest){
                secondHighest=num
            }
        }
    }
    return ([secondHighest,highest])
}

console.log(twoHighest([1, 2, 10, 8])) // [8, 10]
console.log(twoHighest([6, 1, 9, 10, 4])) // [9,10]
console.log(twoHighest([4, 25, 3, 20, 19, 5])) // [20,25]
console.log(twoHighest([1, 2, 2])) // [2, 2];
