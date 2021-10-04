let myFirstSubarray = [["this", "is"], ["super", "cool"]];
for(let myArray of myFirstSubarray){
  console.log(myArray)
}
//----------------------
for(let nestedArray of myFirstSubarray){
  for(let myArray of nestedArray){
    console.log(myArray)
  }
}
let nestedArr = [[1, 2],
                 [3, 4]
                ]
for(let i =0;i<nestedArr.length;i++){
  for(let j=0;j<nestedArr[i].length;j++){
    console.log(nestedArr[j][i])
  }
}
let nestedArr1 = [[1, 2, 3], 
                  [4, 5, 6], 
                  [7, 8, 9, 10, 11, 12]];
for(let i=0;i<nestedArr1.length;i++){
  for(let j=0;j<nestedArr1[i].length;j++){
    console.log(nestedArr1[i][j])
  }
}
//--printEvens
console.log("-------------Print Even Numbers----------------")
let nestedArr2 = [[1, 2, 3], [4, 5, 6], [7, 8], [9, 10, 11, 12]];
function printEvens(nestedArray){
  let evenArray=[]
  for(let arrayElement of nestedArray){
    for(let element of arrayElement){
      if(element%2===0){
        evenArray.push(element)
      }
    }
  }
  return evenArray
}
console.log(printEvens(nestedArr2))
console.log("-------------Sum Total of Array Elements----------------")
function sumTotal(nestedArray){
  let sumOfElements=0
  for(let arrayElement of nestedArray){
    for(let element of arrayElement){
      sumOfElements+=element
    }
  }
  return sumOfElements
}
console.log(sumTotal(nestedArr2))
console.log("-------------Counting Vovels in Nested Array----------------")
let nestedArr4 = [
  "Elie",
  ["Matt", ["Tim"]],
  ["Colt", ["Whiskey", ["Janey"], "Tom"]],
  "Lorien"
]
console.log(nestedArr4)
//--------------countVowels--------------
function countVowels(nestedArray){
  let str = nestedArray.toString()
  let count=0
  let vowels ="aeiouAEIOU"
  for(let char of str){
    if(vowels.includes(char)){
      count++
    }
  }
  return count
}
console.log("No of vowels are "+countVowels(nestedArr4))
//---------Rotate Array-------------
//Write a function called rotate which takes an array and a number, and moves each element however many spaces the number is to the right. For the value at the end of the array, rotate should move it back to the beginning.console
console.log("-------------Array Rotation----------------")

function rotateArray(arr,num){
  var amount = num % arr.length;
  for(var i=0; i< amount; i++){
    arr.unshift(arr.pop());
  }
  return arr;
}
console.log(rotateArray([1,2,3],1))
console.log(rotateArray([1,2,3],2))
console.log(rotateArray([1,2,3],3))




