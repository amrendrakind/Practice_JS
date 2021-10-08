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
  
  let ageGrowBytwo = defineAge();
  console.log("Now age by 2 is ",ageGrowBytwo())
  console.log("Now age by 2 is ",ageGrowBytwo())
  
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
  //----Refactor as IIFEs
  let instructorModule = (function createInstructors(){
    let instructors = ["Elie", "Matt", "Tim"];
    return {
        showInstructors: function displayAllInstructors(){
            return instructors;
        },
        addInstructor: function addNewInstructor(instructor){
            instructors.push(instructor)
            return instructors;
        }
    }
  })();
  console.log(instructorModule.showInstructors())
  instructorModule.addInstructor("Lonie")
  console.log(instructorModule.showInstructors())
  // Refactored Further
  let instructorModuleRefactored = (function createInstructors(){
    let instructors = ["Elie", "Matt", "Tim"];
    function displayAllInstructors(){
        return instructors;
    }
    function addNewInstructor(instructor){
        instructors.push(instructor);
        return instructors;
    }
    return {
        showInstructors: displayAllInstructors,
        addInstructor: addNewInstructor
    }
  })();
  console.log(instructorModuleRefactored.showInstructors())
  instructorModuleRefactored.addInstructor("Shally")
  console.log(instructorModuleRefactored.showInstructors())
  
  ///-----------arguments--------------
  
  function logAll(){
    console.log(arguments)
  }
  logAll(2,3,4)
  logAll(5,6)
  function displayFirstArguments(){
    return arguments[0]
  }
  console.log(displayFirstArguments(1,2,3))
  console.log(displayFirstArguments(true))
  console.log(displayFirstArguments())
  /// add using arguments
  function add(){
    let total=0
    for(let i =0;i<arguments.length;i++){
        total+=arguments[i]
    }
    return total
  }
  console.log(add(1,2,3,4,5,6))
  console.log(add(-1,1,2,-3,-4))
  console.log(add())
  /// Write a function called createCounter. This function should contain a variable count that is initialized to 0. This function should return another function that when invoked, increments the counter by 1 and returns the count variable. You should be able to create multiple counters with the createCounter function and they should all have their own private variable called count.
  
  function createCounter(){
    let count=0
    return function counter(){
      return ++count
    }
  }
  let firstCounter = createCounter()
  console.log(firstCounter())
  console.log(firstCounter())
  console.log(firstCounter())
  console.log(firstCounter())
  
  let secondCounter=createCounter()
  
  console.log("from 2nd" ,secondCounter())
  console.log("from 2nd" ,secondCounter())
  
  console.log(firstCounter())
  console.log(firstCounter())
  console.log(firstCounter())
  