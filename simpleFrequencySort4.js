// Answer 4
function solve(arr){
  
  return arr.map(elem => [elem, arr.filter(num => num == elem).length])
  .sort((a, b) => b[1] - a[1] || a[0] - b[0])
  .map(x => x[0])
}