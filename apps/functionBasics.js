//Write a function called randomFood. The function should use Math.random to randomly choose a favorite food in your favoriteFoods array

let favoriteFoods=["Pizza", "Ice-Cream","Burger","Pasta","Panipuri","Idli", "Dosa","Vada Paw"]    

function randomFood(){
    let min=0, max=favoriteFoods.length
    return favoriteFoods[Math.floor(Math.random()*(max-min)+min)]
}
console.log(randomFood())

//Write a function called displayOddNumbers which iterates over the numbers array and console.logs out all of the numbers that are odd
let numbers=[11,12,13,14,15,16,17,18,19,20]
function displayOddNumbers(numbers){
    let numOdd=[]
    for(let num of numbers){
        if(num%2===1){
            numOdd.push(num)
        }
    }
    return numOdd
}
console.log("Odd Numbers are: ",displayOddNumbers(numbers))

//Write a function called display evenNumbers which iterates over the numbers array and console.logs out all of the numbers that are odd
//let numbers=[1,2,3,4,5,6,7,8,9,10]
function displayEvenNumbers(numbers){
    let numEven=[]
    for(let num of numbers){
        if(num%2===0){
            numEven.push(num)
        }
    }
    return numEven
}
console.log("Even Numbers are: ",displayEvenNumbers(numbers))
//-----------------Return nth odd number

function displayNthOddNumbers(numbers,nth){
    let counter=0,oddNum=0
    for(let num of numbers){
        if(num%2===1 && counter<nth){
            counter++
            if(counter===nth){
                oddNum=num
                break
            }
        }
    }
    return oddNum
}
console.log(displayNthOddNumbers(numbers,2))

//-----------------Return nth Even number

function displayNthEvenNumbers(numbers,nth){
    let counter=0,evenNum=0
    for(let num of numbers){
        if(num%2===0 && counter<nth){
            counter++
            if(counter===nth){
                evenNum=num
                break
            }
        }
    }
    return evenNum
}
console.log(displayNthEvenNumbers(numbers,4))
// First Half

function firstHalf(numbers){
    return numbers.slice(0,numbers.length/2);
}
console.log(firstHalf(numbers))

// Second Half

function secondHalf(numbers){
    return numbers.slice(numbers.length/2);
}
console.log(secondHalf(numbers))

//Write a function called countEvensAndOdds which accepts an array as a parameter. This function should return an object with the count of even numbers and the count of odd numbers. The object returned should have the keys oddCount and evenCount.
let numArray=[10,11,12,13,14,15,16,17,18,19,20]

function countEvensAndOdds(number){
    let objEvenOdd={}
    let countEven=0, countOdd=0
    for(let num of number){
        if(num%2===0){
            countEven++
        }
        else countOdd++
    }
    objEvenOdd.oddCount=countOdd
    objEvenOdd.evenCount=countEven
    return objEvenOdd
}
console.log(countEvensAndOdds(numArray))
//Write a function called onlyCapitalLetters which accepts a string and returns a new string with only the capital letters passed to the string.

function onlyCapitalLetters(str){
    let newStr=''
    for(let i in str){
        if(str[i].charCodeAt(0)<91 && str[i].charCodeAt(0)>64){
            newStr+=str[i]
        }
    }
    console.log(newStr)
    return newStr
}
console.log(onlyCapitalLetters("It is "))
console.log(onlyCapitalLetters("Amazing"))
console.log(onlyCapitalLetters("But nothing"))
