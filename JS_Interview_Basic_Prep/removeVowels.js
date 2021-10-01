/*
### removeVowels

Write a function called **removeVowels** which will accept a string and return a new string with all the vowels removed. You should not consider "y" to be a vowel.

Examples:

removeVowels("Hello!"); // "Hll!"
removeVowels("Tomatoes"); // "Tmts"
removeVowels("Reverse Vowels In The String"); // "Rvrs Vwls n Th Strng"
removeVowels("aeiou"); // ""
removeVowels("why try, shy fly?"); // "why try, shy fly?"
*/

//Answer
function removeVowels(str){
    let vowels="aeiouAEIOU"
    let noVowels=[]
    for(let char of str){
        if(!vowels.includes(char)){
            noVowels.push(char)
        }
    }
    
    return noVowels.join('')
}

console.log(removeVowels("Hello!")) // "Hll!"
console.log(removeVowels("Tomatoes")) // "Tmts"
console.log(removeVowels("Reverse Vowels In The String")) // "Rvrs Vwls n Th Strng"
console.log(removeVowels("aeiou")) // ""
console.log(removeVowels("why try, shy fly?")) // "why try, shy fly?"
