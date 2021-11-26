// Answer 3
function partsSums(ls) {
  var result = [];
  result.push(ls.reduce((a, b) => a + b, 0));
  for ( i = 0; i < ls.length; i++){
      result.push((result[result.length-1]) - ls[i] );
  };
  return result
}