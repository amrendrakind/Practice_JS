function sendMessage(message, fn){
  return fn(message);
}
sendMessage("Hello World", console.log); // Hello World
// Another One callBack

function add(a,b){
  return a+b
}
function substract(a,b){
  return a-b
}
function math(a,b,calllBack){
  return calllBack(a,b)
}
console.log(math(1,4,add))
console.log(math(8,5,substract))
//Next
console.log("Higher Order function")
function each(arr, fn){
  for(let i = 0; i<arr.length;i++){
    fn(arr[i])
  }
}
each([1,2,3,4,5],function(val){console.log(val)})
console.log("Double Number")
each([1,2,3,4,5],function(val){console.log(val*2)})
//-----------MAP Function
//Write a function called map which accepts two parameters: an array and a callback. The map function should return a new array with the result of each value being passed to the callback function.

function map(arr,fn){
    let tempArr=[]
    for(let i =0; i<arr.length;i++){
      tempArr.push(fn(arr[i]))
    }
    return tempArr
}
console.log(map([6,7,8,9,10],function (val){return val*2}))

//---------------Reject Function--------------
function reject(arr,fn){
  let tempArr=[]
  for(let i =0; i<arr.length;i++){
    if(!fn(arr[i])){
     tempArr.push((arr[i]))
    }
  }
  return tempArr
}

console.log(reject([1,2,3,4], function(val){
  return val > 2;
})); // [1,2]

console.log(reject([2,3,4,5], function(val){
  return val % 2 === 0;
})); // [3,5]

