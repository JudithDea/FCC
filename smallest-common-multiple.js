function smallestCommons(arr) {
  let sorted = arr.sort(function(a, b){return a-b});
  let maxNum = sorted[sorted.length-1];
  let minNum = sorted[0];
  let sequence = [];
  // sequence all numbers within the given arr
      for (let i = minNum; i <= maxNum; i++){
        sequence.push(i);
      }

  let upperStop = factorialize(maxNum);
  // factorialize maxNum to avoid an infinite loop as we know that maxNum! is divisible by all numbers within the sequence
  function factorialize(num) {
      if (num < 0) 
            return -1;
      else if (num == 0) 
          return 1;
      else {
          return (num * factorialize(num - 1));
      }
  }
  let stop = 1;
  while (stop < upperStop){
    let multiplied = minNum * maxNum * stop;
    // we multiply the minNum times maxNum for as many times as possible within our upperStop
    
    let truthcounter = 0; 
    // We will count how often multiplied is divisible by sequence[i]

    for (let i = 0; i < sequence.length; i++){
        if (multiplied % sequence[i] === 0){
          truthcounter += 1;
          // every time the multiplied number is divisible by sequence[i] we count a match

          if (truthcounter === sequence.length){
            return multiplied;
            // if all numbers in the sequence match we return that multiplied number
          }
        }
    }
    
    stop += 1;
    // this is adding to out stop counter to avoid an infinite loop
  }

  
}


smallestCommons([5, 1]);
console.log(smallestCommons([2, 10]))
