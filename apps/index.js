//Write a function called onlyCapitalLetters which accepts a string and returns a new string with only the capital letters passed to the string.

function onlyCapitalLetters(str){
    let newStr=''
    for(let i in str){
        if(str[i].charCodeAt(0)<91 && str[i].charCodeAt(0)>64){
            newStr+=str[i]
        }
    }
    return newStr
}
console.log(onlyCapitalLetters("It is Awesome "))
console.log(onlyCapitalLetters("and amazing too"))
console.log(onlyCapitalLetters("BUT NOTHING"))
