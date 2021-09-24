//Any random number between 1 to max
function randomNumber(max){
    return Math.floor(Math.random()*max)
}
console.log(randomNumber(20));

//any random numnber between max and min

function randomNumberBetween(min, max){
    return (Math.floor(Math.random()*(max-min+1)+min))
}
console.log(randomNumberBetween(10,20));
