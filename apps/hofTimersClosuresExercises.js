//countdown
//Write a function called countdown that accepts a number as a parameter and every 1000 milliseconds decrements the value and console.logs it. Once the value is 0 it should log "DONE!" and stop.

function countdown(number){
  var timer=setInterval(function(){
    number--
    if(number<1){
      clearInterval(timer)
      console.log("DONE!")
    }
    else{console.log(number)}
  },1000)
}
countdown(5)
// randomGame
// Write a function called randomGame that selects a random number between 0 and 1 every 1000 milliseconds and each time that a random number is picked, add 1 to a counter. If the number is greater than .75, stop the timer and return the number of tries it took before we found a number greater than .75.

function randomGame(){
  var count=0, randomNumber
  var timer=setInterval(function(){
      randomNumber=Math.random()
      count++
      if(randomNumber>0.75){
          clearInterval(timer)
          console.log("It took "+count+" try/tries.")
      }
  },1000)
  return "Trying"
}
console.log(randomGame())
//isEven
//Write a function called isEven which takes in a number and returns true if the number is even and returns false if it is not
function isEven(num){
  return num%2===0
}
console.log(isEven(2))
console.log(isEven(3))
//isOdd
//Write a function called isOdd which takes in a number and returns true if the number is odd and returns false if it is not

function isOdd(num){
  return num%2!==0
}
console.log(isOdd(3))
console.log(isOdd(4))
//isPrime
//Write a function called isPrime which takes in a number and returns true if the number is a prime number (is greater than 1 and can only be divided in whole by itself and 1), otherwise returns false
function isPrime(num){
  for(let i=2;i<Math.sqrt(num);i++){
    if(num%i===0){
      return false
    }
  return true
  }
}
console.log("It is prime "+isPrime(8))
console.log("It is prime "+isPrime(17))








