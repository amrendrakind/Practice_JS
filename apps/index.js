//Write a function called countEvensAndOdds which accepts an array as a parameter. This function should return an object with the count of even numbers and the count of odd numbers. The object returned should have the keys oddCount and evenCount.
let numArray=[10,11,12,13,14,15,16,17,18,19,20]

function countEvensAndOdds(number){
    let objEvenOdd={}
    let countEven=0, countOdd=0
    for(let num of number){
        if(num%2===0){
            countEven++
        }
        else countOdd++
    }
    objEvenOdd.oddCount=countOdd
    objEvenOdd.evenCount=countEven
    return objEvenOdd
}
console.log(countEvensAndOdds(numArray))
