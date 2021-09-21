//  Quicker -- Go over it more to understand it as well
function findShort(s){
  const result = Math.min(...s.split(' ').map((word) => word.length));
  return result;
}