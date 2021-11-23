function partsSums(ls) {
  // your code
  let sum = ls.reduce((x, y) => x + y, 0);
  let resultArr = [];
  let x = 0;
  
  if(ls.length === 0) {
    return [0];
  }
  
  for(let i = 0; i <= ls.length; i += 1) {
    resultArr.push(sum);
    x = ls[i];
    sum -= x;
  }
  
  return resultArr;
}