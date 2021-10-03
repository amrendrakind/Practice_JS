// let myFirstSubarray = [["this", "is"], ["super", "cool"]];
// for(let myArray of myFirstSubarray){
//   console.log(myArray)
// }
// //----------------------
// for(let nestedArray of myFirstSubarray){
//   for(let myArray of nestedArray){
//     console.log(myArray)
//   }
// }
let nestedArr = [[1, 2],
                 [3, 4]
                ]
for(let i =0;i<nestedArr.length;i++){
  for(let j=0;j<nestedArr.length;j++){
    console.log(nestedArr[j][i])
  }
}
