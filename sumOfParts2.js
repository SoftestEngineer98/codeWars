// Answer 2
function partsSums(ls) {
  let res = new Array(ls.length + 1);
  res[ls.length] = 0;
  
  for (let i = ls.length - 1; i >= 0; i--) 
    res[i] = res[i + 1] + ls[i];
  
  return res;
  
}