// There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

function sockMerchant(n, ar) {
    // Write your code here
    let sortedArr = ar.sort()
    let pairOfSocks = 0;
    for(let i=0;i<n-1;i++){
        if (sortedArr[i]===sortedArr[i+1]){
            pairOfSocks++;
            i++;
        }
    }
    return pairOfSocks;
}
let n=9, ar=[10,20,20,10,10,30,50,10,20]
const result = sockMerchant(n, ar);
console.log(result)