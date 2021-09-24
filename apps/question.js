//Find nth Fibonacci number 

function fib(n) {
    var a=0, b=1;
    for (var i=0; i < n; i++) {
    var temp = a+b;
    a = b;
    b = temp;
    }
    return a;
    }
console.log(fib(20))

//


//Find nth Fibonacci number 

function fib(n) {
    var a=0, b=1;
    for (var i=0; i < n; i++) {
    var temp = a+b;
    a = b;
    b = temp;
    }
    return a;
    }
console.log(fib(20))
//
var s = "hello";

console.log( s.substr(1,4) == "ello" )
console.log(( s.substring(1,4) == "ell" ))

var date = new Date();
var n = date.toISOString();
console.log(n);


let obj={
    name:"alex",
    age : "28",
    country :"Greece"
}
let result=[]

for (const [key, value] of Object.entries(obj)) {
    result.push(key)
    result.push(value)
  }
console.log(result)
//Reduce Example
var arr = [1, 2, 3,4,5,6] 
var sum = arr.reduce((sum, elem) => sum + elem)
console.log(sum)

//Filter out
var arr = [1, 2, 3] 

result = arr.filter(elem => elem !== 2)

console.log(result)





