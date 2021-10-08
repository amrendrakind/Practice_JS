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