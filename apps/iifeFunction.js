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
console.log(personObj.getName())

