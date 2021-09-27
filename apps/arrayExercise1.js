let people = ["Greg", "Mary", "Devon", "James"];
console.log(people.shift())
console.log(people.pop())
console.log(people.unshift("Matt"))
console.log(people.push("Amar"))
for (const name of people) {
        if(name==="Mary"){
            console.log("Loop Broken")
            break;
        }
}
console.log(people.indexOf("Mary"))
console.log(people.indexOf("Foo"))
let copyArr = people.slice(2)
console.log("copied array ",copyArr)
console.log(people.splice(2,1,"Elizabeth","Artie"))
console.log(people)
let withBob=people.concat("Bob")
console.log(withBob)
