let result=(function(){
    let person = "Amrendra K";
    return person;
})();
console.log(result)
//IIFE returns Objects
let personObject= (function(){
    return{
        name :"Amrendra",
        age : 32,
        occupation : "Software Engineer",
        hobbies: "Playing Kites"
    }
})()
console.log(personObject.name)
console.log(personObject.age)
console.log(personObject.occupation)
console.log(personObject.hobbies)
console.log("\n",personObject)
// IIFE object with functions for the values of the keys:

let personObj = (function invokeRightAway(){
    let person = "Amrendra"
    return{
        getName : function(){
            return person
        },
        setName : function(newName){
            person = newName
        }
    }
})()
//console.log(personObj)
console.log(personObj.getName())
personObj.setName("Amrendra Kumar");
console.log(personObj.getName());

//Write a function called displayFullName, which should accept two parameters, firstName and lastName. The function should be immediately invoked and return the firstName + lastName. You should NOT have to call this function, it should invoke right away.
firstName1="Akshaj"
lastName1="K"
let fullName = (function displayFullName(firstName, lastName){
    return (firstName+" "+lastName)
})(firstName1, lastName1)
console.log(fullName)
//Write a function called createCalculator, which should return an object that has four methods, add, subtract, multiply and divide.
let calculator=(function createCalculator(){
    return{
        add : function(a,b){
            return (a+b)
        },
        substract: function(a,b){
            return (a-b)
        },
        multiply: function(a,b){
            return (a*b)
        },
        divide: function(a,b){
            return (a/b)
        }
    }
})()
console.log(calculator.add(10,5))
console.log(calculator.substract(10,5))
console.log(calculator.multiply(10,5))
console.log(calculator.divide(10,5))
