function sumFibs(num) {
  
    let arr = [1, 1];
    let oddArrSum = []
    // write out num indexes of the fibonacci sequence:
    for (let i = 2; i < num; i++){       
            arr.push(arr[arr.length-1] + arr[arr.length-2]);   
    }
    
    oddArrSum = 
    // fish out all odd numbers smaller than num:
    arr.filter(item => item % 2 !== 0 && item <= num)
    // sum up all those numbers:
    .reduce((a, b) => a + b, 0);
    return oddArrSum;   
  }
  
sumFibs(4);
console.log(sumFibs(4));