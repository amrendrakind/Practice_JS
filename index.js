var testObject={
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