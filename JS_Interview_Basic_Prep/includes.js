/*
### includes

Write a function called **`includes`** which accepts a `collection`, a `value`, and an optional starting `index`. 
The function should return `true` if the `value` exists in the collection 
when we search starting from the starting `index`. Otherwise, it should return `false`.

The collection can be a string, an array, or an object. If the collection is a string or array, 
the third parameter is a starting index for where to search from.If the collection is an object, 
the function searches for the value among values in the object; since objects have no sort order, 
the third parameter is ignored.

Examples:

includes([1, 2, 3], 1) // true
includes([1, 2, 3], 1, 2) // false
includes([1, 2, 3], 6) // false

includes({ 'a': 1, 'b': 2 }, 1) // true
includes({ 'a': 1, 'b': 2 }, 'a') // false

includes('abcd', 'b') // true
includes('abcd', 'e') // false
includes('abcd', 'a', 2) // false

*/

//Answer
function includes(collection,value,index){
    isAvailable=false
    for(let val in collection){
        if(index){
            val=index
        }
        if(collection[val]===value){
            isAvailable=true
            break
        }
    }
    return isAvailable
}

console.log(includes([1, 2, 3], 1)) // true
console.log(includes([1, 2, 3], 1, 2)) // false
console.log(includes([1, 2, 3], 6)) // false

console.log(includes({ 'a': 1, 'b': 2 }, 1)) // true
console.log(includes({ 'a': 1, 'b': 2 }, 'a')) // false

console.log(includes('abcd', 'b')) // true
console.log(includes('abcd', 'e')) // false
console.log(includes('abcd', 'a', 2)) // false
