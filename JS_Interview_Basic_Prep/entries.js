/* 
### entries

Write a function called **entries,** which accepts an object and returns an array of arrays of key-value pairs.
In other words, each sub-array is an "entry" in the object with two elements: the first element is the key, and the second element is the value.

Do not use the built in `Object.entries()` function!

Examples:

let obj = { a: 1, b: 2, c: 3 };
entries(obj);
// [["a",1], ["b",2], ["c",3]]

let obj2 = { first: 'Matt', last: 'Lane', isDogOwner: true };
entries(obj2);
// [["first","Matt"], ["last","Lane"], ["isDogOwner",true]]

let obj3 = {};
entries(obj3); // []

*/

// Answer
function entries(obj){
    let objArr=[]
    for(let key in obj){
        objArr.push([key,obj[key]])
    }
    return objArr
}

let obj = { a: 1, b: 2, c: 3 };
console.log(entries(obj))
// [["a",1], ["b",2], ["c",3]]

let obj2 = { first: 'Matt', last: 'Lane', isDogOwner: true };
console.log(entries(obj2))
// [["first","Matt"], ["last","Lane"], ["isDogOwner",true]]

let obj3 = {};
console.log(entries(obj3)) // []

