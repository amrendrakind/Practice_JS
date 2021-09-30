/* ### stringIncludes

Write a function called **stringIncludes,** which accepts two strings: the first string is a word and the second string is a single character.
The function should return `true` if the first string includes the character, otherwise it should return `false`.

Do not use the built in `String.includes()` function!

Examples:

stringIncludes('awesome', 'e'); // true
stringIncludes('awesome', 'z'); // false
*/

// Answer

function stringIncludes(str,letter){
    found=false
    console.log(str+" "+letter)
    for(let char of str){
        if(char===letter)
            found=true
    }
    return found
}
console.log(stringIncludes('awesome', 'e')) // true
console.log(stringIncludes('awesome', 'z')) // false
