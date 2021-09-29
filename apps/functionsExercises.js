//This function takes in two parameters and returns the difference of the two E.g difference(2,2); // 0
function difference(a,b){
    return (a-b)
}
console.log(difference(2,2)) //0
console.log(difference(0,2)) //-2

//This function takes in two parameters and returns the product of the two E.g product(2,2); // 4

function product(a,b){
    return (a*b)
}
console.log(product(2,2)) //4
console.log(product(0,2)) //0

//printDay - This function takes in one parameter (a number from 1-7) and returns the day of the week (1 is Sunday, 2 is Monday, 3 is Tuesday etc.). If the number is less than 1 or greater than 7, the function should return undefined;
function printDay(day){
    let dayStr=''
    switch (day) {
        case 1: 
            dayStr = "Sunday"
            break;
        case 2:
            dayStr = "Monday"
            break;
        case 3:
            dayStr = "Tuesday"
            break;
        case 4:
            dayStr = "Wednesday"
            break;
        case 5:
            dayStr = "Thursday"
            break;
        case 6:
            dayStr = "Friday"
            break;
        case 7:
            dayStr = "Saturday"
            break;
        default:
            dayStr = "undefined"
            break;
    }
    return dayStr;
}
console.log(printDay(1))    //Sunday
console.log(printDay(3))    //Tuesday
console.log(printDay(5))    //THursday
console.log(printDay(7))    //Saturday
console.log(printDay(41))   //undefined

//lastElement : this function takes in one parameter (an array) and returns the last value in the array. It should return undefined if the array is empty.

function lastElement(arr){
    return arr.length?arr[arr.length-1]:"undefined"
}
console.log(lastElement([1,2,3,4,5])) //5
console.log(lastElement([])) //undefined

//numberCompare : this function takes in two parameters (both numbers). If the first is greater than the second, this function returns "First is greater". If the second number is greater than the first, the function returns "Second is greater". Otherwise the function returns "Numbers are equal"

function numberCompare(a,b){
    return a>b?"First is greater":(a===b?"Numbers are equal":"Second is greater")
}

console.log(numberCompare(1,1)) // "Numbers are equal"
console.log(numberCompare(2,1)) // "First is greater"
console.log(numberCompare(1,2)) // "Second is greater"

//singleLetterCount : this function takes in two parameters (two strings). The first parameter should be a word and the second should be a letter. The function returns the number of times that letter appears in the word. The function should be case insensitive (does not matter if the input is lowercase or uppercase). If the letter is not found in the word, the function should return 0.

function singleLetterCount(word, letter){
    let countLetter=0
    for(let i in word){
        if(word[i].toUpperCase()===letter.toUpperCase()){
            countLetter++;
        }
    }
    return countLetter
}

console.log(singleLetterCount('amazing','A')) // 2
console.log(singleLetterCount('SelfLearning Model','l')) // 3

//multipleLetterCount : this function takes in one parameter (a string) and returns an object with the keys being the letters and the values being the count of the letter.

function multipleLetterCount(str){
    let objLetterCount={}, newKey=true
//    objLetterCount[str[0]]=0
    for(let i =0;i<str.length;i++){
        for(let key in objLetterCount){
            if(str[i]===key){
                newKey=false
            }
        }
        if(newKey){
            objLetterCount[str[i]]=0
            newKey=true
        }
        for (let key in objLetterCount) {
            if(str[i]===key){
                objLetterCount[key]++
                newKey=true
            }
        }
    }
    return objLetterCount
}
console.log(multipleLetterCount("hello")) // {h:1, e: 1, l: 2, o:1}
console.log(multipleLetterCount("person")) // {p:1, e: 1, r: 1, s:1, o:1, n:1}

////arrayManipulation : 
//This function should take in at most four parameters (an array, command, location, and value).
//1. If the command is "remove" and the location is "end", the function should remove the last value in the array and return the value removed. (In this case, the function only needs three arguments.)
//2. If the command is "remove" and the location is "beginning", the function should remove the first value in the array and return the value removed. (In this case, the function only needs three arguments.)
//3. If the command is "add" and the location is "beginning", the function should add the value (fourth parameter) to the beginning of the array and return the array.
//4. If the command is "add" and the location is "end", the function should add the value (fourth parameter) to the end of the array and return the array.

function arrayManipulation(arr,command, location,value){
    let elStr=''
    switch (command) {
        case "add":
            switch (location) {
                case "beginning":
                    arr.unshift(value)
                    elStr = arr
                    break
                case "end" :
                    arr.push(value)
                    elStr = arr
                    break
                default:
                    console.log("Please provide location to add value")
                    break
            }
            break
        case "remove":
            switch (location) {
                case "beginning":
                    elStr = arr.shift()
                    break
                case "end" :
                    elStr = arr.pop()
                    break
                default:
                    console.log("Please provide location to remove value")
                    break
            }
            break
        default:
            console.log("Please provide four parameters (an array, command, location, and value).")
            break;
    }
    return elStr
}

console.log(arrayManipulation([1,2,3], "remove", "end")) // 3
console.log(arrayManipulation([1,2,3], "remove", "beginning")) // 1
console.log(arrayManipulation([1,2,3], "add", "beginning", 20)) // [20,1,2,3]
console.log(arrayManipulation([1,2,3], "add", "end", 30)) // [1,2,3,30]
//This function takes in two parameters and returns the difference of the two E.g difference(2,2); // 0
function difference(a,b){
    return (a-b)
}
console.log(difference(2,2)) //0
console.log(difference(0,2)) //-2

//This function takes in two parameters and returns the product of the two E.g product(2,2); // 4

function product(a,b){
    return (a*b)
}
console.log(product(2,2)) //4
console.log(product(0,2)) //0

//printDay - This function takes in one parameter (a number from 1-7) and returns the day of the week (1 is Sunday, 2 is Monday, 3 is Tuesday etc.). If the number is less than 1 or greater than 7, the function should return undefined;
function printDay(day){
    let dayStr=''
    switch (day) {
        case 1: 
            dayStr = "Sunday"
            break;
        case 2:
            dayStr = "Monday"
            break;
        case 3:
            dayStr = "Tuesday"
            break;
        case 4:
            dayStr = "Wednesday"
            break;
        case 5:
            dayStr = "Thursday"
            break;
        case 6:
            dayStr = "Friday"
            break;
        case 7:
            dayStr = "Saturday"
            break;
        default:
            dayStr = "undefined"
            break;
    }
    return dayStr;
}
console.log(printDay(1))    //Sunday
console.log(printDay(3))    //Tuesday
console.log(printDay(5))    //THursday
console.log(printDay(7))    //Saturday
console.log(printDay(41))   //undefined

//lastElement : this function takes in one parameter (an array) and returns the last value in the array. It should return undefined if the array is empty.

function lastElement(arr){
    return arr.length?arr[arr.length-1]:"undefined"
}
console.log(lastElement([1,2,3,4,5])) //5
console.log(lastElement([])) //undefined

//numberCompare : this function takes in two parameters (both numbers). If the first is greater than the second, this function returns "First is greater". If the second number is greater than the first, the function returns "Second is greater". Otherwise the function returns "Numbers are equal"

function numberCompare(a,b){
    return a>b?"First is greater":(a===b?"Numbers are equal":"Second is greater")
}

console.log(numberCompare(1,1)) // "Numbers are equal"
console.log(numberCompare(2,1)) // "First is greater"
console.log(numberCompare(1,2)) // "Second is greater"

//singleLetterCount : this function takes in two parameters (two strings). The first parameter should be a word and the second should be a letter. The function returns the number of times that letter appears in the word. The function should be case insensitive (does not matter if the input is lowercase or uppercase). If the letter is not found in the word, the function should return 0.

function singleLetterCount(word, letter){
    let countLetter=0
    for(let i in word){
        if(word[i].toUpperCase()===letter.toUpperCase()){
            countLetter++;
        }
    }
    return countLetter
}

console.log(singleLetterCount('amazing','A')) // 2
console.log(singleLetterCount('SelfLearning Model','l')) // 3

//multipleLetterCount : this function takes in one parameter (a string) and returns an object with the keys being the letters and the values being the count of the letter.

function multipleLetterCount(str){
    let objLetterCount={}, newKey=true
//    objLetterCount[str[0]]=0
    for(let i =0;i<str.length;i++){
        for(let key in objLetterCount){
            if(str[i]===key){
                newKey=false
            }
        }
        if(newKey){
            objLetterCount[str[i]]=0
            newKey=true
        }
        for (let key in objLetterCount) {
            if(str[i]===key){
                objLetterCount[key]++
                newKey=true
            }
        }
    }
    return objLetterCount
}
console.log(multipleLetterCount("hello")) // {h:1, e: 1, l: 2, o:1}
console.log(multipleLetterCount("person")) // {p:1, e: 1, r: 1, s:1, o:1, n:1}

////arrayManipulation : 
//This function should take in at most four parameters (an array, command, location, and value).
//1. If the command is "remove" and the location is "end", the function should remove the last value in the array and return the value removed. (In this case, the function only needs three arguments.)
//2. If the command is "remove" and the location is "beginning", the function should remove the first value in the array and return the value removed. (In this case, the function only needs three arguments.)
//3. If the command is "add" and the location is "beginning", the function should add the value (fourth parameter) to the beginning of the array and return the array.
//4. If the command is "add" and the location is "end", the function should add the value (fourth parameter) to the end of the array and return the array.

function arrayManipulation(arr,command, location,value){
    let elStr=''
    switch (command) {
        case "add":
            switch (location) {
                case "beginning":
                    arr.unshift(value)
                    elStr = arr
                    break
                case "end" :
                    arr.push(value)
                    elStr = arr
                    break
                default:
                    console.log("Please provide location to add value")
                    break
            }
            break
        case "remove":
            switch (location) {
                case "beginning":
                    elStr = arr.shift()
                    break
                case "end" :
                    elStr = arr.pop()
                    break
                default:
                    console.log("Please provide location to remove value")
                    break
            }
            break
        default:
            console.log("Please provide four parameters (an array, command, location, and value).")
            break;
    }
    return elStr
}

console.log(arrayManipulation([1,2,3], "remove", "end")) // 3
console.log(arrayManipulation([1,2,3], "remove", "beginning")) // 1
console.log(arrayManipulation([1,2,3], "add", "beginning", 20)) // [20,1,2,3]
console.log(arrayManipulation([1,2,3], "add", "end", 30)) // [1,2,3,30]


//isPalindrome :  Palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This function should take in one parameter and returns true or false if it is a palindrome. As a bonus, allow your function to ignore whitespace and capitalization so that isPalindrome('a man a plan a canal Panama'); returns true
console.log("\nFunction isPalindrome")
function isPalindrome(str){
    str=str.toUpperCase()
    let len=str.length-1
    // console.log(len)
    let isPal=false
    for(let i=0;i<len/2;i++){
        // console.log(i)
        // console.log(str[i],str[len-i])
        if(str[i]===str[len-i]){
            isPal=true
        }
        else {
            isPal=false
            break
        }
    }
    return isPal
}

console.log('testing',isPalindrome('testing')) // false
console.log('tacoCat',isPalindrome('tacoCat')) // true
console.log('hannah', isPalindrome('hannah')) // true
console.log('robert', isPalindrome('robert')) // false








