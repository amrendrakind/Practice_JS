let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};
//add the language "Go" to the end of the languages array.
programming.languages.push("Go")
console.log(programming)
//Change the difficulty to the value of 7
programming.difficulty=7
console.log(programming)
//Using the delete keyword, write the command to remove the jokes key from the programming object.
delete programming.jokes
console.log(programming)
//command to add a new key called isFun and a value of true to the programming object.
programming.isFun=true
console.log(programming)
//iterate through the languages array and console.log all of the languages.
for(let lang of programming.languages){
    console.log(lang)
}
//log all of the keys in the programming object.
for(let key in programming){
    console.log(key)
}
//log all of the values in the programming object.
for(let val in programming){
    console.log(programming[val])
}