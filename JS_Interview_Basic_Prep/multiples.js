/*
### multiples

Implement a function called **multiples** that accepts two numbers: **_x_** and **_n_**.
The function should return the first **_n_** multiples of the number **_x_**.
Assume that **_x_** is a positive integer.

Examples:

multiples(3, 4) // [3, 6, 9, 12]
multiples(2, 5) // [2, 4, 6, 8, 10]

*/
// Answer
function multiples(x,n){
    let numMultiple = []
    for(let num=1;num<=n;num++){
        numMultiple.push(x*num)
    }
    return numMultiple
}

console.log(multiples(3, 4)) // [3, 6, 9, 12]
console.log(multiples(2, 5)) // [2, 4, 6, 8, 10]
