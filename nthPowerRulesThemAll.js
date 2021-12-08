function modifiedSum(a, n) {
  const powNum = a.map((x) => Math.pow(x, n));
  const reducer = (x, y) => x + y;
  
  return powNum.reduce(reducer) - a.reduce(reducer);
}