//Write a function called randomFood. The function should use Math.random to randomly choose a favorite food in your favoriteFoods array

let favoriteFoods=["Pizza", "Ice-Cream","Burger","Pasta","Panipuri","Idli", "Dosa","Vada Paw"]    

function randomFood(){
    let min=0, max=favoriteFoods.length
    return favoriteFoods[Math.floor(Math.random()*(max-min)+min)]
}
console.log(randomFood())

//Write a function called displayOddNumbers which iterates over the numbers array and console.logs out all of the numbers that are odd
let numbers=[1,2,3,4,5,6,7,8,9,10]
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
