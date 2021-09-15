var testObject={
    "name" : "Coder",
    "an atom" : "Amrendra K",
    "an atom" : "Amrendra",
    "an atom" : "Amrendr",
    "an atom" : "Amrend",
    "my side" : "Nilesh",
    "My drink" : "Water"
}

var atomValue = testObject["My drink"]
console.log(atomValue);
atomValue = testObject["My drink"].length
console.log(atomValue);
atomValue = testObject["an atom"]
console.log(atomValue);
testObject["an atom"] = "Ramesh"
atomValue = testObject["an atom"]
console.log(atomValue);
atomValue = testObject["name"]
console.log(atomValue);
testObject.add="Mumbai"
atomValue = testObject["add"]
console.log(atomValue);
testObject["add"]="Amchi Mumbai"
atomValue = testObject["add"]
console.log(atomValue);
console.log(testObject)
