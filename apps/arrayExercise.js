let arr =[]
arr.push("Amar")
arr.push("Kumar")
arr.unshift("Blue")
console.log(arr);
arr.shift()
console.log(arr);
let arr2 =[]
arr2.push(32)
console.log(arr2);
arr2.push("JavaScript")
console.log(arr2);
console.log(arr2.indexOf(32));
let combinedArray = arr.concat(arr2)
console.log(combinedArray)
//----------------------Part1 Over-------------

let arr = ["JavaScript", "Python", "Ruby", "Java"]
let result = arr.splice(1,2)
console.log(result)
console.log(arr)
let combinedArray=result.concat(["Haskell", "closure"])
console.log(combinedArray);
const sentence = 'The quick brown fox jumps over the lazy dog.';
const word = 'fox';
console.log(sentence.includes(word))

//----------------------End of Part2 Over-------------
