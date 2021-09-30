/* ### charAt

Write a function called **charAt** which accepts a string and an index (number) and returns the character at that index.
The function should return an empty string if the number is greater than the length of the string.
**Do not use the built in charAt method**

Examples:

charAt('awesome', 2) // 'e'
charAt('awesome', 12) // ''
*/

// Answer
function charAt(str,number){
    return number<str.length? str[number]:""
}

console.log(charAt('awesome', 2)) // 'e'
console.log(charAt('awesome', 12)) // ''
