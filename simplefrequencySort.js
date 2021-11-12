function solve(arr){
  
  const frequency = 
        arr.reduce((x, y) => {
          x[y] = (x[y] || 0) + 1;
          return x;
        }, {});
  
  return [...arr].sort((a, b) => {
    return frequency[b] - frequency[a] || a - b;
  });
}