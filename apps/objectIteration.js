let myObj = {
    firstName: "Amrendra",
    lastName: "K",
    occupation: "Software Engineer"
}

myObj.hobby = "Playing Kite"
console.log(myObj)
for(let value in myObj){
    console.log(myObj[value])
}
console.log()
//
for(let val in myObj){
    console.log(val+": "+myObj[val])
}
// If..in statement uses
let myName="firstName"
if (myName in myObj){
    console.log("\nI exist!! in If...in statement")
}
