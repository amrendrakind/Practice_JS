//Write a function called valTimesIndex which accepts an array of numbers and returns a new array with each value multiplied by the index it is at in the array:

function valTimesIndex(arr){
    let valueIndex = arr.map(function(val,index){ return val*index})
    return valueIndex
}

console.log(valTimesIndex([1,2,3]))// [0,2,6]
console.log(valTimesIndex([5,10,15])) // [0,10,30]

//Write a function called extractKey which accepts two parameters, an array of objects, and the name of a key and returns an array with just the values for that key:
function extractKey(data, key){
    let keyvalue =[]
    data.forEach(function(val){
        keyvalue.push(val[key])
    })
    return keyvalue
}


console.log(extractKey([{name: "Elie", isInstructor:true},{name: "Tim", isInstructor:true},{name: "Matt", isInstructor:true}], "name"))

//Write a function called filterLetters which accepts an array of letters and returns the number of occurrences of a specific letter. This function should be case insensitive

//filterLetters(["a","a","b","c","A"], "a");
function filterLetters(arr, key){
    let temp =[]
    arr.filter(function(val){
        if(val.toLowerCase()===key.toLowerCase())
        temp.push(val)
    })
    return temp.length
    
}

console.log(filterLetters(["a","a","b","c","A"], "a")); // 3
console.log(filterLetters(["a","a","b","c","A"], "z")); // 0
console.log(filterLetters(["a","a","b","c","A"], "B")); // 1

//Write a function called filterKey which accepts two parameters, an array of objects, and the name of a key and returns an array with only those objects which have truthy values for that key:

function filterKey(arr, key){
    arr.filter(function(val){
        if(val[key]== true)
        console.log(val)
    })
}

filterKey([{name: "Elie", isInstructor:true, isHilarious: false},{name: "Tim", isInstructor:true, isHilarious: true},{name: "Matt", isInstructor:true}], "isHilarious")