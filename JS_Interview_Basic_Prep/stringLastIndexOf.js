/*### stringLastIndexOf

Write a function called **stringLastIndexOf,** which accepts two strings: the first is a word and the second is a single character.
The function should return the last index at which the character exists or `-1` if the character is not found.

Do not use the built in `"string".lastIndexOf()` **function!**

Examples:

stringLastIndexOf('awesome', 'e'); // 6
stringLastIndexOf('awesome', 'z'); // -1
*/

// Answer
function stringLastIndexOf(str,letter){
    let len = str.length
    for(let i=0;i< len;i++){
        if(str[len-i]===letter){
            return (len-i)
        }
    }
    return -1
}

console.log(stringLastIndexOf('awesome', 'e')) // 6
console.log(stringLastIndexOf('awesome', 'z')) // -1