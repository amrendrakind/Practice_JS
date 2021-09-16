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
