let arr = [4,3,2,1,0]
arr.forEach(function(val,index,arr){
    console.log(val, index, arr)
})

arr.forEach(function(val){
    console.log(val)
})
//rite a function called double which accepts an array. The function should return a new array with all of the values doubled.
function doubleVal(arr){
    let doubleArray = []
    arr.forEach(function(val){
        doubleArray.push(val*2)
    })
    return doubleArray
}
console.log(doubleVal(arr));
//Write a function called printFirstAndLast which accepts an array (of objects) and console.logs a new string with the first character and the last character of each value.
////printFirstAndLast(['awesome','example','of','forEach'])
function printFirstAndLast(arr){
    let temp =[];
    arr.forEach(function(val){
        let len =val.length
        console.log(val[0]+val[len-1])
    })
}

printFirstAndLast(['awesome','example','of','forEach'])

//Write a function called addKeyAndValue which accepts three parameters, an array (of objects), a key and a value. This function should return the array of objects after each key and value have been added to each object in the array.

function addKeyAndValue(arrObj,key,val){
    let objVal=[]
    arrObj.forEach(function (obj){
        obj[key]=val
        objVal.push(obj)
    })
    return objVal
}
console.log(addKeyAndValue([{name: 'Elie'},{name: 'Tim'},{name: 'Elie'}], "isInstructor", true))

///////Map

function doubleArray(arr){
   return arr.map(function(val){
        return val*2
    })
}
arr = [1,2,3,4,5]

console.log(doubleArray(arr))
let doubleval = arr.map(function(val){ return val*2})
let tripple = arr.map(function(val){ return val*3 })
console.log(doubleval)
console.log(tripple)

