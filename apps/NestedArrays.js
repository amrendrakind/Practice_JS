let myFirstSubarray = [["this", "is"], ["super", "cool"]];

for (let i = 0; i < myFirstSubarray.length; i++) {
    for(let j=0;j<myFirstSubarray[i].length;j++){
        console.log(myFirstSubarray[i][j]);
    }
  }

let arr = [];
Array.isArray(arr); // true
Array.isArray("Hello"); // false

function countVowels(arr){
    let newArr = arr.toString()
    console.log(newArr)
}

let nestedArr = [
  "Elie",
  ["Matt", ["Tim"]],
  ["Colt", ["Whiskey", ["Janey"], "Tom"]],
  "Lorien"
];

countVowels(nestedArr); // 14