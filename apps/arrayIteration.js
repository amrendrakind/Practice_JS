//Looping via for...of method

let names = ["Elie", "Matt", "Tim","Cooper"];
for (let elementName of names) {
    console.log(elementName);
}

let str = "Elie";

for(let i=0; i < str.length; i++){
    console.log(str[i]);
}
console.log(str.split(""))

let name2 = "Kayla";

for (let character of name2) {
    console.log(character);
}

let dashedString = "No-lots-of-dashes-here-after-removing-dases";
let removedDashes = dashedString.split("-").join(" ");
console.log(removedDashes);

