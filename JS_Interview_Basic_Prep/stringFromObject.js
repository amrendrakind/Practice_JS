/*
### stringFromObject

Write a function called **stringFromObject** that generates a string from an object's key/value pairs.
The format should be "key = value, key = value".
Each key/value pair should be separated by a comma and space except for the last pair.

Examples:

stringFromObject({ a: 1, b: '2' }); // "a = 1, b = 2"
stringFromObject({ name: 'Elie', job: 'Instructor', isCatOwner: false }); // "name = Elie, job = Instructor, isCatOwner = false"
stringFromObject({}); // ""

*/

//Answer
function stringFromObject(obj){
    let str=''
    for(let key in obj){
        str+=key+" = "+obj[key]+", "
    }
    str = str.slice(0,str.length-2)
    return str
}

console.log(stringFromObject({ a: 1, b: '2' })) // "a = 1, b = 2"
console.log(stringFromObject({ name: 'Elie', job: 'Instructor', isCatOwner: false })) // "name = Elie, job = Instructor, isCatOwner = false"
console.log(stringFromObject({})) // ""

