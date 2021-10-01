/*
### totalCaps

Write a function called **totalCaps,** which accepts an array of strings and returns the total number of capitals in each of the strings. Do **not** convert the array into a string.

Examples:

totalCaps(["AwesomE", "ThIngs", "hAppEning", "HerE"]) // 8
totalCaps(["Elie", "Matt", "Tim"]) // 3
totalCaps(["hello", "world"]) // 0
*/

//Answer
function totalCaps(arr){
    let upperCaps=0
    for(let str of arr){
        for(let char of str){
            if(char===char.toUpperCase()){
                upperCaps++
            }
        }
    }
    return upperCaps
}
console.log(totalCaps(["AwesomE", "ThIngs", "hAppEning", "HerE"])) // 8
console.log(totalCaps(["Elie", "Matt", "Tim"])) // 3
console.log(totalCaps(["hello", "world"])) // 0
