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

///------------Closure in action------

function defineAge(){
  let age = 28;
  return function growUp(){
      return ++age;
  }
}

let ageGrowByOne = defineAge();
console.log(ageGrowByOne)
console.log("Now age is",ageGrowByOne()) // 29
console.log("Now age is",ageGrowByOne()) // 30
console.log("Now age is",ageGrowByOne()) // 31
console.log("Now age is",ageGrowByOne()) // 32
/// Another Example-----------
function createInstructors(){
  let instructors=["Elie","Matt","Tim"]
  return{
    showInstructors: function displayAllInstructors(){
      return instructors
    },
    addInstructors: function addNewInstructor(instructor){
      instructors.push(instructor)
      return instructors
    }
  }
}
console.log("\nInstructor Role\n")
let firstClass=createInstructors()
console.log(firstClass)
console.log(firstClass.showInstructors())
firstClass.addInstructors("Jennifer")
console.log(firstClass.showInstructors())
let secondClass =createInstructors()
secondClass.addInstructors("Ashley")
console.log(secondClass.showInstructors())
console.log(createInstructors().showInstructors())
