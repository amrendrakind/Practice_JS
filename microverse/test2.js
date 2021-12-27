function countingValleys(steps, path) {
    // Write your code here Steps = 8// Path =[UDDDUDUU] //DDUUDDUDUUUD
    let step = path.split("");
    let countValley =0;
    let currentSeaLevel=0
    let current=0
    let isValley =false;
    for (let i =0;i<steps;i++){

        step[i]==='U' ? currentSeaLevel++ : currentSeaLevel--;
        if (currentSeaLevel<0 && !isValley){
                isValley=true;
                countValley++;
            }
            else if(currentSeaLevel >= 0 && isValley){
            isValley=false;
        }
        }
        return countValley      
    }
    
let steps =12 
let path="UDDDUDUU"
const result = countingValleys(steps, path);
console.log(result)