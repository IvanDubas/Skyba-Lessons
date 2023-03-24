const summation = function (num) {
    let sum = 0;
    if (num>0)
      {
        for (let i=1; i<=num; i++)
          {
            num+=i
          }
        
      }
    return sum;
  }

console.log (summation(8))