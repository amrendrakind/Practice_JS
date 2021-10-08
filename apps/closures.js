function outer(a){
    return function inner(b){
        return a + b;
    }
  }
  
  console.log(outer(10)) // this returns the inner function
  
  // this calls the inner function right away
  console.log(outer(5)(2)) // 7
  
  // // we can store the inner function in a variable
  let laterAdd = outer(10)
  // we can now call that inner function
  console.log(laterAdd(15)) // 25
  console.log(outer(25)(10)) // 35