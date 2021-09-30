/*
### removeFromString

Write a function called **removeFromString,** which accepts a string, a starting index (number) and a number of characters to remove.
The function should return a new string with the characters removed.

Examples:

removeFromString('Elie', 2, 2) // 'El'
removeFromString('Elie', 0, 1) // 'lie'
removeFromString('MyOwn School', 0, 6) // 'School'
removeFromString('MyOwn School', 2, 4)) // 'MySchool'
removeFromString('MyOwn School', 6, 400)) // 'MyOwn '
*/

// Answer

function removeFromString(str, startIndex, noOfChar) {
    str=str.split('')
    str.splice(startIndex,noOfChar)
    return str.join('')
}
  
console.log(removeFromString('Elie', 2, 2)) // 'El'
console.log(removeFromString('Elie', 0, 1)) // 'lie'
console.log(removeFromString('MyOwn School', 0, 6)) // 'School'
console.log(removeFromString('MyOwn School', 2, 4)) // 'MySchool'
console.log(removeFromString('MyOwn School', 6, 400)) // 'MyOwn '
