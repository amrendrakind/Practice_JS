
let a = [1, 2, 3, 4]
let b = [5, 6, 7, 8]
//Expected resulting array c = [1, 5, 2, 6, 3, 7, 4, 8]

let c=new Array(a.length+b.length)
let k=0
console.log("Array A is ",a)
console.log("Array B is ",b)
for (let i=0;i<(a.length+b.length);i++){
    if(i%2==0){
        c[i]=a[k]
    }else{
        c[i]=b[k++]
    }
}
console.log("Resulting Array is ",c) 

const newArr = [];
for(let i = 0; i < a.length; i++) { 
  newArr.push(a[i]);
  newArr.push(b[i]);
}
console.log(newArr)

var myVar= "Hi!"
console.log(myVar.valueOf())

