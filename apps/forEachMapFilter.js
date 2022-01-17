let arr = [4,3,2,1,0]
arr.forEach(function(val,index,arr){
    console.log(val, index, arr)
})

arr.forEach(function(val){
    console.log(val)
})

function doubleVal(arr){
    let doubleArray = []
    arr.forEach(function(val){
        doubleArray.push(val*2)
    })
    return doubleArray
}
console.log(doubleVal(arr))