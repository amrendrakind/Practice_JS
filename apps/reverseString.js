//Desired input -  "this is a thin table"
 //Desired output - "siht si a niht elbat"

function reverse(str,t){
    str=str.split(" ")
    let reverseSentence=""
    for(let j=0;j<str.length;j++){
        subStr=str[j].split("")
        let word=""
        for(let i=0;i<subStr.length;i++)
            {
                word+=subStr[subStr.length-1-i]
            }
        reverseSentence+=" "+word
    }
    return reverseSentence
}
let letter="t"
let string = "this is a thin table"
console.log(string)
console.log(reverse(string,letter))
//let a=string.replace(/(?<=\W|^)t\w+/g, x=>[...x].reverse().join(''))
//console.log(a)
