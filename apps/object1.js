let obj={
    name:"John Snow",
    watchMember: "true"
}
console.log(obj)
obj.gamesOfThrones = "awesome"
console.log(obj)
delete obj.gamesOfThrones
console.log(obj)
//Excercise----

let myObj = {
    firstName : "Amrendra",
    lastName: "K",
    occupation: "Software Engineer"
}
console.log(myObj.firstName)
console.log(myObj.lastName)
console.log(myObj.occupation)
myObj.hobby = "Playing Kite"
console.log(myObj)
delete myObj.occupation
console.log(myObj)
console.log(myObj["firstName"])
console.log(myObj["lastName"])
console.log(myObj["hobby"])