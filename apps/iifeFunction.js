let result=(function(){
    let person = "Amrendra K";
    return person;
})();
console.log(result)
//
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

