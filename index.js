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

