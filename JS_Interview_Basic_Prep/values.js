/*
### values
Write a function called **values,** which accepts an object and returns an array of all of the values in the object.

Do not use the built in `Object.values()` function!

Examples:

let obj = { a: 1, b: 2, c: 3 };
values(obj); // [1,2,3]

let obj2 = { first: 'Matt', last: 'Lane', isDogOwner: true };
values(obj2); // ["Matt", "Lane", true]

let obj3 = {};
values(obj3); // []

*/

//Answer
function values(obj){
    objValue=[]
    for(let key in obj){
        objValue.push(obj[key])
    }
    return objValue
}

let obj = { a: 1, b: 2, c: 3 };
console.log(values(obj)) // [1,2,3]

let obj2 = { first: 'Matt', last: 'Lane', isDogOwner: true };
console.log(values(obj2)) // ["Matt", "Lane", true]

let obj3 = {};
console.log(values(obj3)) // []
