//This function takes in two parameters and returns the difference of the two E.g difference(2,2); // 0
function difference(a,b){
    return (a-b)
}
console.log(difference(2,2)) //0
console.log(difference(0,2)) //-2

//This function takes in two parameters and returns the product of the two E.g product(2,2); // 4

function product(a,b){
    return (a*b)
}
console.log(product(2,2)) //4
console.log(product(0,2)) //0

//printDay - This function takes in one parameter (a number from 1-7) and returns the day of the week (1 is Sunday, 2 is Monday, 3 is Tuesday etc.). If the number is less than 1 or greater than 7, the function should return undefined;
function printDay(day){
    let dayStr=''
    switch (day) {
        case 1: 
            dayStr = "Sunday"
            break;
        case 2:
            dayStr = "Monday"
            break;
        case 3:
            dayStr = "Tuesday"
            break;
        case 4:
            dayStr = "Wednesday"
            break;
        case 5:
            dayStr = "Thursday"
            break;
        case 6:
            dayStr = "Friday"
            break;
        case 7:
            dayStr = "Saturday"
            break;
        default:
            dayStr = "undefined"
            break;
    }
    return dayStr;
}
console.log(printDay(1))    //Sunday
console.log(printDay(3))    //Tuesday
console.log(printDay(5))    //THursday
console.log(printDay(7))    //Saturday
console.log(printDay(41))   //undefined

//lastElement : this function takes in one parameter (an array) and returns the last value in the array. It should return undefined if the array is empty.

function lastElement(arr){
    return arr.length?arr[arr.length-1]:"undefined"
}
console.log(lastElement([1,2,3,4,5])) //5
console.log(lastElement([])) //undefined

//numberCompare : this function takes in two parameters (both numbers). If the first is greater than the second, this function returns "First is greater". If the second number is greater than the first, the function returns "Second is greater". Otherwise the function returns "Numbers are equal"

function numberCompare(a,b){
    return a>b?"First is greater":(a===b?"Numbers are equal":"Second is greater")
}

console.log(numberCompare(1,1)) // "Numbers are equal"
console.log(numberCompare(2,1)) // "First is greater"
console.log(numberCompare(1,2)) // "Second is greater"




